import { Fade } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { ComponentType, ReactNode, useCallback, useState } from "react";

export interface TransitionStepperProps<
  Transition = ComponentType<
    Omit<TransitionProps, "children"> & { children: any }
  >
> {
  Transition?: Transition;
  steps: Record<string, ReactNode>;
  activeStep: string;
}
const TransitionStepper = ({
  Transition = Fade,
  steps,
  activeStep,
}: TransitionStepperProps) => {
  const [mountedStep, setMountedStep] = useState(String(activeStep));
  const handleExit = useCallback(() => {
    setMountedStep(String(activeStep));
  }, [activeStep]);
  return (
    <>
      {Object.entries(steps).map(([step, component]) => {
        mountedStep === step && (
          <Transition key={step} in={activeStep === step} onExit={handleExit}>
            <>{component}</>
          </Transition>
        );
      })}
    </>
  );
};

export default TransitionStepper;
