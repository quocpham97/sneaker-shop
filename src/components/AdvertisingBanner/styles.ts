import { theme } from "@/styles/theme";
import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  content: {
    marginBottom: "40px",
    maxWidth: "75vw",
    margin: "0 auto",
    paddingTop: "80px",
    [theme.breakpoints.down(600)]: {
      maxWidth: "100vw",
    },
  },
  image: {
    width: "100%",
  },
}));
