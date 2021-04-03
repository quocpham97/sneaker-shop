import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "auto"
  },
  cardContent: {
    justifyContent: "space-between"
  }
}));
