import { Box, Grid, Paper } from "@mui/material";
import NewShoppingItemForm from "./newShoppingItemForm";
import NewShoppingItemHeading from "./newShoppingItemHeading";

export default function NewShoppingItem({ addItem }) {
  return (
    <Grid
      item
      component={Paper}
      elevation={6}
      xs={12}
      sm={12}
      square
    >
      <Box
        sx={{
          my: 1,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <NewShoppingItemHeading />
        <NewShoppingItemForm addItem={addItem} />
      </Box>
    </Grid>
  )
}