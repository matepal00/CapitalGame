import { Navigate, generatePath, useParams } from "react-router-dom";
import { Continents, GameStep } from "../../../../shared/types";
import { constants } from "../../../../config/constants";
import { paths } from "../../../../config";
import {
  ReactElement,
  Ref,
  Suspense,
  forwardRef,
  useEffect,
  useMemo,
} from "react";
import { Form, FormTextField, Loader } from "../../../../shared/components";
import {
  GameContainer,
  Subtitle,
  Title,
  Wrapper,
  StyledDialogTitle,
} from "./Game.styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  Slide,
} from "@mui/material";
import SideNav from "../SideNav";
import { mappedContinents, useModuleTranslation } from "../../utils";
import {
  CountriesFormField,
  useDialog,
  useFormProps,
  useSubmitHandler,
} from "./Game.utils";
import { TransitionProps } from "@mui/material/transitions";

const Game = () => {
  const { step, continent } = useParams<{
    step?: GameStep;
    continent?: Continents;
  }>();
  const Transition = forwardRef(
    (
      props: TransitionProps & {
        children: ReactElement<any, any>;
      },
      ref: Ref<unknown>
    ) => <Slide direction="up" ref={ref} {...props} />
  );
  const { t } = useModuleTranslation({});
  const countriesInContinent = useMemo(
    () =>
      continent === Continents.AllContinents
        ? constants.countriesWithCapitals
        : constants.countriesWithCapitals.filter(
            (item) =>
              item.continent?.toLowerCase().replace(/\s/g, "-") === continent
          ),
    [continent]
  );
  const { ...formProps } = useFormProps();
  const { reset } = formProps;
  const {
    handleSubmit,
    correctAnswears,
    wrongAnswears,
    currentCountry,
    countriesLeft,
    setCurrentCountry,
    setCountriesLeft,
    setwrongAnswears,
    setCorrectAnswears,
  } = useSubmitHandler({ countriesInContinent, reset });
  const { open, setOpen, handleDialogClose } = useDialog();
  useEffect(() => {
    if (countriesLeft.length > 0) {
      setCurrentCountry(
        countriesLeft[Math.floor(Math.random() * countriesLeft.length)]
      );
    } else {
      setOpen(true);
    }
  }, [countriesLeft]);
  useEffect(() => {
    reset();
    setCountriesLeft(countriesInContinent);
    setwrongAnswears([]);
    setCorrectAnswears([]);
  }, [continent]);

  return (
    <>
      {step !== GameStep.Game || !continent ? (
        <Navigate
          to={generatePath(paths.root.step, { step: GameStep.ChooseContinent })}
        />
      ) : (
        <Suspense fallback={<Loader />}>
          <GameContainer>
            <Dialog
              open={open}
              onClose={handleDialogClose}
              TransitionComponent={Transition}
              keepMounted
              fullWidth
            >
              <DialogContent>
                <StyledDialogTitle>{t("game.dialog.result")}</StyledDialogTitle>
                <DialogContentText>
                  {t("game.dialog.resultMessage", {
                    correct: correctAnswears.length,
                    overall: countriesInContinent.length,
                  })}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleDialogClose}>
                  {t("game.dialog.close")}
                </Button>
              </DialogActions>
            </Dialog>
            <Grid
              container
              flexDirection={"row"}
              spacing={1}
              height={"100%"}
              width={"100%"}
            >
              <Grid item xs={3}>
                <Subtitle>{t("game.changeContinent")}</Subtitle>
                <SideNav excludedContinent={continent} />
              </Grid>
              <Grid item xs={9}>
                <Wrapper>
                  <Title>{t("game.title")}</Title>
                  <Subtitle>
                    {t("game.subtitle", {
                      continent:
                        mappedContinents[
                          continent as keyof typeof mappedContinents
                        ],
                    })}
                  </Subtitle>
                  <Subtitle>
                    {t("game.guessTheCapital", {
                      country: currentCountry.country,
                    })}
                  </Subtitle>
                  <Form onSubmit={handleSubmit} {...formProps}>
                    <FormTextField
                      name={CountriesFormField.Capital}
                      placeholder={t("game.placeholder")}
                    />
                  </Form>
                  <Subtitle>
                    {t("game.correctAnswears", {
                      count: correctAnswears.length,
                    })}
                  </Subtitle>
                  <Subtitle>
                    {t("game.wrongAnswears", {
                      count: wrongAnswears.length,
                    })}
                  </Subtitle>
                  <Subtitle>
                    {t("game.countriesLeft", {
                      count: countriesLeft.length,
                    })}
                  </Subtitle>
                </Wrapper>
              </Grid>
            </Grid>
          </GameContainer>
        </Suspense>
      )}
    </>
  );
};

export default Game;
