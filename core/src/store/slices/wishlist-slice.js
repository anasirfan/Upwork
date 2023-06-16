import cogoToast from "@hasanm95/cogo-toast";
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";
import { getProduct } from "../../services/product.services";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: []
  },
  reducers: {
    addToWishlist: async (state, action) => {
      const product = action.payload;
      const isInWishlist = state.wishlistItems.findIndex(item => item.id === product.id);
      if (isInWishlist > -1) {
        cogoToast.info("Product already in wishlist", { position: "bottom-left" });
      } else {
        try {
          const fetchedProduct = await getProduct(product.id);
          state.wishlistItems.push(fetchedProduct);
          cogoToast.success("Added To wishlist", { position: "bottom-left" });
        } catch (error) {
          console.log("Error fetching product:", error);
        }
      }
    },
    deleteFromWishlist(state, action) {
      state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload);
      cogoToast.error("Removed From Wishlist", { position: "bottom-left" });
    },
    deleteAllFromWishlist(state) {
      state.wishlistItems = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action) => {
        return {
          ...state,
          ...action.payload.wishlistItems,
        };
      })
  },
});

// Rest of the code...

export const { addToWishlist, deleteFromWishlist, deleteAllFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
