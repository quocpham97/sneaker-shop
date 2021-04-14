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
  }
}));
