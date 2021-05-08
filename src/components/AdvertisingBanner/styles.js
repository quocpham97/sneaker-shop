import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  content: {
    marginBottom: theme.spacing(5),
    maxWidth: "75vw",
    margin: "0 auto",
    [theme.breakpoints.down(600)]: {
      maxWidth: "100vw"
    }
  },
  image: {
    width: "100%"
  }
}));
