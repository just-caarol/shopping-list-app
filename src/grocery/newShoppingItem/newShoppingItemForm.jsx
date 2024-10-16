import { useState } from "react";

import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

export default function NewShoppingItemForm({ addItem }) {
  const [formData, setFormData] = useState({
    product: "",
    quantity: 0,
    unit: "",
    bought: false,
  });
  const [productIsValid, setProductIsValid] = useState(false);
  const maxQuantity = 1000000;

  const validateProduct = (product) => setProductIsValid(product.length !== 0);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    const isQuantity = name === "quantity";
    const isProduct = name === "product";

    if (isProduct) validateProduct(value);

    setFormData((currData) => {
      let finalValue;
      if (isQuantity) {
        const parsedValue = parseInt(value.toLowerCase()).toString();
        finalValue = parsedValue > maxQuantity ? currData[name] : parsedValue;
      } else {
        finalValue = value.toLowerCase();
      }

      return {
        ...currData,
        [name]: finalValue,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (productIsValid && formData.unit && formData.quantity) {
      addItem(formData);
      setFormData({ product: "", quantity: 0, unit: "", bought: false });
      setProductIsValid(false);
    }
  };

  return (
    <Box
      noValidate
      component="form"
      sx={{
        my: 1,
        mx: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 750,
        "& .MuiTextField-root": { m: 1 },
      }}
      onSubmit={onSubmit}
    >
      <Box
        component="section"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          "& .MuiFormControl-root": { m: "8px", display: "flex", flexGrow: 1 },
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="product"
          label="Enter product name"
          name="product"
          placeholder="ex. apple"
          autoFocus
          value={formData.product}
          error={!formData.product}
          onChange={handleChange}
          sx={{ m: "auto 0.5rem" }}
          inputProps={{ maxLength: 40 }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="quantity"
          label="Enter quantity of product"
          type="number"
          id="quantity"
          error={!formData.quantity}
          value={formData.quantity}
          onChange={handleChange}
          inputProps={{ min: 0, max: maxQuantity }}
          sx={{ m: "auto 0.5rem" }}
        />
        <FormControl required>
          <InputLabel
            error={!formData.unit}
            id="demo-simple-select-helper-label"
          >
            Choose product unit
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Choose product unit *"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            error={!formData.unit}
          >
            <MenuItem value="">
              <em>Choose one unit:</em>
            </MenuItem>
            <MenuItem name="unit" value={"piece"}>
              piece
            </MenuItem>
            <MenuItem name="unit" value={"pieces"}>
              pieces
            </MenuItem>
            <MenuItem name="unit" value={"pack"}>
              pack
            </MenuItem>
            <MenuItem name="unit" value={"packages"}>
              packages
            </MenuItem>
            <MenuItem name="unit" value={"bottle"}>
              bottle
            </MenuItem>
            <MenuItem name="unit" value={"bottles"}>
              bottles
            </MenuItem>
            <MenuItem name="unit" value={"kg"}>
              kilogram
            </MenuItem>
            <MenuItem name="unit" value={"g"}>
              gram
            </MenuItem>
            <MenuItem name="unit" value={"l"}>
              liter
            </MenuItem>
            <MenuItem name="unit" value={"ml"}>
              mililiter
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="warning"
        sx={{
          mt: 3,
          mb: 2,
          wordBreak: "break-word",
          maxWidth: 715.72,
          textTransform: "none",
        }}
        startIcon={<AddShoppingCartOutlinedIcon />}
        disabled={!productIsValid || !formData.unit || !formData.quantity}
      >
        {`Add to the list: ${formData.product} ${formData.quantity} ${formData.unit}`}
      </Button>
    </Box>
  );
}
