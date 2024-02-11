import { useState } from "react";
import { v4 as uuid } from 'uuid';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import NewShoppingItem from "./newShoppingItem/newShoppingItem";
import ShoppingList from "./shoppingList/shoppingList";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("products"));
  if (!data) return [];
  return data;
};

export default function Grocery() {
  const [products, setProducts] = useState(getInitialData);

  const addItem = (item) => {
    setProducts((currProducts) => {
      return [...currProducts, { ...item, id: uuid() }]
    });
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <NewShoppingItem addItem={addItem} />
      <ShoppingList products={products} setProducts={setProducts} />
    </Grid>
  );
}