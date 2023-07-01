import { CircularProgress } from "@mui/material";

export interface LoaderProps {
  size?: string;
}
const Loader = ({ size = "6rem" }: LoaderProps) => {
  return <CircularProgress size={size} />;
};

export default Loader;
