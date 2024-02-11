import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Checkbox, FormControlLabel, IconButton, ListItem, ListItemButton, Typography } from "@mui/material";

export default function ShoppingListItem({ item, events }) {
  return (
    <ListItem
      sx={{
        wordBreak: 'break-word',
      }}
      key={item.id}
      selected={item.bought}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => events.removeProduct(item.id)}>
          <HighlightOffOutlinedIcon sx={{
            color: '#424242'
          }} />
        </IconButton>
      }
      disablePadding
    >

      <ListItemButton>
        <FormControlLabel component="div" control={<Checkbox
          checked={item.bought}
          onChange={() => events.changePurchaseStatus(item.id)}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<TaskAltIcon />}
          sx={{
            color: '#424242',
            '&.Mui-checked': {
              color: '#ed6c02',
            }
          }}
        />
        } label={<Typography sx={{
          fontFamily: 'Monospace',
          letterSpacing: 3,
          textDecoration: item.bought ? "line-through" : "none",
        }}>{`${item.product} ${item.quantity} ${item.unit}`} </Typography>}
        />
      </ListItemButton>
    </ListItem>
  )
}