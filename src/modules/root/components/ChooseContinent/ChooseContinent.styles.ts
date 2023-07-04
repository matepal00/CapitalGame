import { Container, Typography, styled } from "@mui/material";

export const ChooseContinentContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
});
export const Title = styled(Typography)({
  width: "100%",
  height: "15%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#e9edc9",
  fontSize: "3rem",
});
export const SideNavContainer = styled(Container)({
  width: "40%",
  height: "85%",
});
