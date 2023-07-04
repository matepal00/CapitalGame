import { CircularProgress } from "@mui/material";
import { LoaderContainer } from "./Loader.styles";

export interface LoaderProps {
  size?: string;
}
const Loader = ({ size = "10rem" }: LoaderProps) => {
  return (
    <LoaderContainer>
      <CircularProgress size={size} color={"inherit"} />
    </LoaderContainer>
  );
};

export default Loader;
