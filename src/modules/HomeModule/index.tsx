"use client";

import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import AdvertisingBanner from "@/components/AdvertisingBanner";
import { CircularProgress, Grid2 } from "@mui/material";
import Category from "@/components/Category";
import Product from "@/components/Product";

function HomeModule() {
  const classes = useStyles();
  const [category, setCategory] = useState([]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main className={classes.content}>
      <AdvertisingBanner />
      <Category
        categories={[]}
        onSelectCategory={setCategory}
        selectedCategory={category}
      />
      {[].length === 0 ? (
        <div className={classes.spinner}>
          <CircularProgress style={{ color: "#2d3436" }} />
        </div>
      ) : null}

      <Grid2 container justifyContent="center" spacing={4}>
        {[].map((product) => (
          <Grid2 key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Product product={product} />
          </Grid2>
        ))}
      </Grid2>
    </main>
  );
}

export default HomeModule;
