import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

import useStyles from "./styles";

function CartItem({ item, onUpdateCartQty, onRemoveFromCart }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia image={item.media.source} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <div className={classes.productName}>
          <Typography variant="body1">{item.name}</Typography>
          <Typography variant="body1">
            Size: {item.selected_options[0].option_name}
          </Typography>
        </div>
        <Typography variant="body1">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            variant="outlined"
            onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography className={classes.quantity}>{item.quantity}</Typography>
          <Button
            type="button"
            variant="outlined"
            onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          className={classes.removeButton}
          onClick={() => onRemoveFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default CartItem;
