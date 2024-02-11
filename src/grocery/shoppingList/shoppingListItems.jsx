import { useEffect } from "react";

import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ShoppingListItem from "./shoppingListItem";

const ListTheme = createTheme({
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#fff2df',
          },
        },
      },
    },
  }
});

export default function ShoppingListItems({ setProducts, products }) {
  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );
  }, [products]);

  const removeProduct = (id) => {
    setProducts(prevProducts => {
      return prevProducts.filter(i => i.id !== id)
    })
  };

  const deleteAllList = () => {
    setProducts([]);
  };

  const changePurchaseStatus = (id) => {
    setProducts(prevProducts => {
      return prevProducts.map(i => {
        if (i.id === id) {
          return { ...i, bought: !i.bought }
        }
        return i;
      })
    })
  }

  return (
    <ThemeProvider theme={ListTheme}>
      <Box component="section" sx={{
        maxWidth: '400px', width: '100%'
      }}>
        <Box
          noValidate
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" mb={2} sx={{
            fontFamily: 'Monospace',
            letterSpacing: 6
          }}>
            Shopping List
          </Typography>

          <List>
            {products.map((item, idx) => <ShoppingListItem
              key={`shopping-list-item-${idx}`}
              events={{ changePurchaseStatus, removeProduct }}
              item={item}
            />
            )}
          </List>

        </Box>
        <Button
          onClick={deleteAllList}
          variant="contained"
          color="warning"
          fullWidth
          sx={{ maxWidth: '400px' }}
          startIcon={<DeleteIcon />}
        > <Typography sx={{
          fontFamily: 'Monospace',
          letterSpacing: 3
        }}> Clear list </Typography></Button>
      </Box >
    </ThemeProvider>
  );
}