import { Container, DialogTitle, Typography, styled } from "@mui/material";

export const Title = styled(Typography)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#e9edc9",
  fontSize: "3rem",
});
export const Subtitle = styled(Typography)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#e9edc9",
  fontSize: "2rem",
});
export const GameContainer = styled("div")({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
});
export const Wrapper = styled(Container)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});
export const StyledDialogTitle = styled(DialogTitle)({
  padding: 0,
  fontWeight: 600,
});
