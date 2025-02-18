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
  mediaContainer: {
    textAlign: "center",
  },
  media: {
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  selectSize: {
    marginBottom: theme.spacing(5),
  },
  selectQuantity: {
    marginBottom: theme.spacing(5),
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
  addToCart: {
    padding: theme.spacing(1.25),
  },
  quantity: {
    padding: theme.spacing(0, 2),
  },
  buttonQuantity: {
    minWidth: 48,
  },
  buttonSize: {
    borderRadius: 0,
  },
  buttonSelectedSize: {
    backgroundColor: "#2d3436",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#2d3436",
    },
  },
  missingSelectSize: {
    color: "#d63031",
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
}));
