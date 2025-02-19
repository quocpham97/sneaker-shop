"use client";

import React from "react";
import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import useStyles from "./styles";

function Cart({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) {
  const classes = useStyles();
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <strong>start adding some</strong>!
    </Typography>
  );
  const FillCart = () => (
    <>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="center">Size</TableCell>
              <TableCell align="center">Unit price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.line_items.map((item) => (
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                  <div style={{ display: "flex" }}>
                    <img
                      src={item.media.source}
                      alt={item.name}
                      style={{ width: "100px" }}
                    />

                    <Typography className={classes.productName}>
                      {item.name}
                    </Typography>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Typography>
                    {item.selected_options[0].option_name}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>{item.price.formatted_with_symbol}</Typography>
                </TableCell>
                <TableCell align="center">
                  <div className={classes.buttons}>
                    <Button
                      type="button"
                      variant="outlined"
                      className={classes.buttonQuantity}
                      onClick={() =>
                        handleUpdateCartQty(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </Button>
                    <Typography className={classes.quantity}>
                      {item.quantity}
                    </Typography>
                    <Button
                      type="button"
                      variant="outlined"
                      className={classes.buttonQuantity}
                      onClick={() =>
                        handleUpdateCartQty(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </Button>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Typography>
                    {item.line_total.formatted_with_symbol}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    type="button"
                    className={classes.removeButton}
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className={classes.cardDetails}>
        <Typography variant="h5" className={classes.subtotal}>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return "Loading...";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h5">
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FillCart />}
    </Container>
  );
}

export default Cart;
