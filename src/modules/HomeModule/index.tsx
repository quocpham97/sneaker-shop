"use client";

import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import AdvertisingBanner from "@/components/AdvertisingBanner";
import { CircularProgress, Grid2 } from "@mui/material";
import { commerce } from "@/lib/commerce";
import Category from "@/components/Category";
import Product from "@/components/Product";

function HomeModule() {
  const classes = useStyles();
  const [category, setCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();
    setCategories(data);
  };

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({ limit: 16 });
    setProducts(data);
  };

  const fetchProductsByCategory = async () => {
    const { data } = await commerce.products.list({
      limit: 16,
      category_slug: category,
    });
    setProducts(data);
  };

  // const fetchCart = async () => {
  //   setCart(await commerce.cart.retrieve());
  // };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
    // fetchCart();
  }, []);

  useEffect(() => {
    if (category) fetchProductsByCategory();
    // eslint-disable-next-line
  }, [category]);

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
        categories={categories}
        onSelectCategory={setCategory}
        selectedCategory={category}
      />
      {products.length === 0 ? (
        <div className={classes.spinner}>
          <CircularProgress style={{ color: "#2d3436" }} />
        </div>
      ) : null}

      <Grid2 container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid2 key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Product product={product} />
          </Grid2>
        ))}
      </Grid2>
    </main>
  );
}

export default HomeModule;
