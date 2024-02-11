import { Avatar, Typography } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function NewShoppingItemHeading() {
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: 'warning.main' }}>
        <ShoppingCartOutlinedIcon />
      </Avatar>
      <Typography variant="h6" gutterBottom>
        Here is your shopping list!
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        To add product to the list, fill the form below and press the button.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        You can also check off each item as you go.
      </Typography>
    </>
  )
}