"use client";

import React, { useEffect, useState } from "react";

import useStyles from "./styles";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

function NavBar({ totalItems }) {
  const classes = useStyles();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="inherit">
          <img
            src={"../../assets/commerce.png"}
            alt="Sneaker Shop"
            height="25px"
            className={classes.image}
          />
          Sneaker Shop
        </Typography>
        <div className={classes.grow} />
        <div>
          <IconButton aria-label="Show cart items" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
