"use client";

import { theme } from "@/styles/theme";
import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  content: {
    marginBottom: theme.spacing(3),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  categoryItem: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  selected: {
    textDecoration: "underline",
    cursor: "pointer",
  },
}));
