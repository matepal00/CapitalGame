import { constants } from "../../../../config/constants";
import { SubmitContinentButton } from "../../../../shared/components";
import { generatePath, useNavigate } from "react-router-dom";
import { paths } from "../../../../config";
import { Continents, GameStep } from "../../../../shared/types";
import { Grid } from "@mui/material";
import { useMemo } from "react";
export interface SideNavProps {
  excludedContinent?: string;
}
const SideNav = ({ excludedContinent }: SideNavProps) => {
  const navigate = useNavigate();
  const continentsArray = useMemo(
    () =>
      constants.continents.filter(
        (continent) =>
          continent.toLowerCase().replace(/\s/g, "-") !== excludedContinent
      ),
    [excludedContinent]
  );
  return (
    <Grid
      container
      flexDirection={"column"}
      width={"100%"}
      height={"100%"}
      alignItems={"center"}
      spacing={1}
      padding={"1rem"}
    >
      {continentsArray.map((continent, index) => {
        return (
          <Grid item key={index}>
            <SubmitContinentButton
              continent={continent}
              onClick={() => {
                navigate(
                  generatePath(paths.root.game, {
                    step: GameStep.Game,
                    continent:
                      Continents[
                        continent.replace(/\s/g, "") as keyof typeof Continents
                      ],
                  })
                );
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SideNav;
