import React, { useEffect, useState } from "react";
import { commerce } from "./lib/commerce";
import { NavBar, Products, Cart, Checkout, DetailProduct } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [category, setCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState();

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();
    setCategories(data);
  };

  const handleChangeCategory = (categorySlug) => {
    setProducts([]);
    setCategory([categorySlug]);
  };

  const refreshProducts = () => {
    setProducts([]);
    setCategory([]);
  };

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({ limit: 16 });
    setProducts(data);
  };

  const fetchProductsByCategory = async () => {
    const { data } = await commerce.products.list({ limit: 16, category_slug: category });
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity, options) => {
    const item = await commerce.cart.add(productId, quantity, options);
    setCart(item.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    console.log(checkoutTokenId);
    console.log(newOrder);
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
    fetchCart();
  }, []);

  useEffect(() => {
    if (category) fetchProductsByCategory();
    // eslint-disable-next-line
  }, [category]);

  return (
    <Router>
      <div>
        <NavBar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products
              categories={categories}
              products={products}
              onSelectCategory={handleChangeCategory}
              selectedCategory={category}
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
          <Route path="/product/:productId">
            <DetailProduct onAddToCart={handleAddToCart} onRefreshProducts={refreshProducts} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
