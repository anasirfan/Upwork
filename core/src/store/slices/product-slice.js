import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";
import { getProduct } from "../../services/product.services";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: async (state, action) => {
      const productIds = action.payload;
      try {
        const products = await Promise.all(productIds.map(productId => getProduct(productId)));
        state.products = products;
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action) => {
        return {
          ...state,
          ...action.payload.products,
        };
      })
  },
});

// Rest of the code...

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
