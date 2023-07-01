import { StyledButton } from "./SubmitContinentButton.styles";

export interface SubmitContinentButtonProps {
  continent: string;
}
const SubmitContinentButton = ({ continent }: SubmitContinentButtonProps) => {
  return (
    <StyledButton variant="contained" size="large">
      {continent}
    </StyledButton>
  );
};

export default SubmitContinentButton;
