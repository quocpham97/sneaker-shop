import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  content: {
    marginBottom: theme.spacing(3),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  categoryItem: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer"
    }
  },
  selected: {
    textDecoration: "underline",
    cursor: "pointer"
  }
}));
