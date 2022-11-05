import { v4 } from 'uuid';
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from 'react-redux';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [{}]
  },
  reducers: {
    add_product: (state, payload) => {
      const product = state.products.find(a => a.id == payload.payload.id);

      !product
        ? state.products.push(
          payload.payload
        ) : null
    }
  }
});

export const products = () => useSelector(state => state.cart.products);

export const { add_product } = cartSlice.actions;
export default cartSlice.reducer;