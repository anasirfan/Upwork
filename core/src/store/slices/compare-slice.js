import cogoToast from "@hasanm95/cogo-toast";
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";
import { getProduct } from "../../services/product.services";

const compareSlice = createSlice({
  name: "compare",
  initialState: {
    compareItems: []
  },
  reducers: {
    addToCompare: async (state, action) => {
      const productId = action.payload;
      try {
        const product = await getProduct(productId);
        state.compareItems.push(product);
        cogoToast.success("Added To Compare", { position: "bottom-left" });
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    },
    deleteFromCompare: (state, action) => {
      const productId = action.payload;
      state.compareItems = state.compareItems.filter(item => item.id !== productId);
      cogoToast.error("Removed From Compare", { position: "bottom-left" });
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action) => {
        return {
          ...state,
          ...action.payload.compareItems,
        };
      })
  },
});

// Rest of the code...

export const { addToCompare, deleteFromCompare } = compareSlice.actions;
export default compareSlice.reducer;
