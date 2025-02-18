"use client";

import { theme } from "@/styles/theme";
import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
}));
