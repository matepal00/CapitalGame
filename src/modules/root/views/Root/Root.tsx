import { useParams } from "react-router-dom";
import { GameStep } from "../../../../shared/types";
import { TransitionStepper } from "../../../../shared/components";
import { ChooseContinent, Game } from "../../components";

const Root = () => {
  const { step = GameStep.ChooseContinent } = useParams<{
    step?: GameStep;
  }>();
  return (
    <TransitionStepper
      activeStep={step}
      steps={{
        [GameStep.ChooseContinent]: <ChooseContinent />,
        [GameStep.Game]: <Game />,
      }}
    />
  );
};

export default Root;
