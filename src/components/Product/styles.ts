"use client";

import { theme } from "@/styles/theme";
import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  cardContent: {
    justifyContent: "space-between",
  },
  productName: {
    minHeight: 50,
  },
  productPrice: {
    marginLeft: theme.spacing(1),
  },
}));
