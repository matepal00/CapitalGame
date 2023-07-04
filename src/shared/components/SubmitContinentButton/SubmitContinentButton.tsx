import { StyledButton } from "./SubmitContinentButton.styles";

export interface SubmitContinentButtonProps {
  continent: string;
  onClick: () => void;
}
const SubmitContinentButton = ({
  continent,
  onClick,
}: SubmitContinentButtonProps) => {
  return (
    <StyledButton variant="contained" size="large" onClick={onClick}>
      {continent}
    </StyledButton>
  );
};

export default SubmitContinentButton;
