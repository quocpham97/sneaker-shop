import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  media: {
    height: 260
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between"
  },
  cardActions: {
    justifyContent: "space-between",
    marginTop: "auto"
  },
  buttons: {
    display: "flex",
    alignItems: "center"
  },
  productName: {
    marginRight: theme.spacing(2)
  },
  removeButton: {
    color: "#ffffff",
    backgroundColor: "#c0392b",
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "#c23616"
    }
  },
  quantity: {
    padding: theme.spacing(0, 2)
  }
}));
