import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "2%"
  },
  emptyButton: {
    minWidth: "150px",
    color: "#ffffff",
    backgroundColor: "#c0392b",
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px"
    },
    "&:hover": {
      backgroundColor: "#c23616"
    }
  },
  checkoutButton: {
    minWidth: "150px"
  },
  link: {
    textDecoration: "none"
  },
  cardDetails: {
    display: "flex",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    width: "100%",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      display: "block"
    }
  },
  subtotal: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(2)
    }
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  buttonQuantity: {
    minWidth: 48
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
    padding: theme.spacing(0, 1)
  },
  productName: {
    margin: "auto 1rem"
  },
  linkProductName: {
    textDecoration: "none",
    color: "inherit"
  }
}));
