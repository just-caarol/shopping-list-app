import { Grid, Paper } from "@mui/material";
import ShoppingListItems from "./shoppingListItems";

export default function ShoppingList({ setProducts, products }) {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: "url(/owoce.jpg)",
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 3,
          my: 19,
          mx: 3,
          minWidth: '450px',
          alignItems: 'center',
          alignContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <ShoppingListItems setProducts={setProducts} products={products} />
      </Paper>
    </Grid>
  )
}