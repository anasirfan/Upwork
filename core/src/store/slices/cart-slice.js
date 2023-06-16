import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import cogoToast from "@hasanm95/cogo-toast";
import { getProduct } from "../../services/product.services";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: []
  },
  reducers: {
    addToCart: async (state, action) => {
      const productId = action.payload;
      try {
        const product = await getProduct(productId);

        const cartItem = state.cartItems.find(
          item =>
            item.id === product.id &&
            item.selectedProductColor === product.selectedProductColor &&
            item.selectedProductSize === product.selectedProductSize &&
            (item.cartItemId ? item.cartItemId === product.cartItemId : true)
        );

        if (!cartItem) {
          state.cartItems.push({
            ...product,
            quantity: product.quantity ? product.quantity : 1,
            cartItemId: uuidv4()
          });
        } else {
          state.cartItems = state.cartItems.map(item => {
            if (item.cartItemId === cartItem.cartItemId) {
              return {
                ...item,
                quantity: product.quantity ? item.quantity + product.quantity : item.quantity + 1
              };
            }
            return item;
          });
        }

        cogoToast.success("Added To Cart", { position: "bottom-left" });
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    },
    deleteFromCart: (state, action) => {
      const cartItemId = action.payload;
      state.cartItems = state.cartItems.filter(item => item.cartItemId !== cartItemId);
      cogoToast.error("Removed From Cart", { position: "bottom-left" });
    },
    decreaseQuantity: (state, action) => {
      const product = action.payload;
      const cartItem = state.cartItems.find(item => item.cartItemId === product.cartItemId);
      if (cartItem) {
        if (cartItem.quantity === 1) {
          state.cartItems = state.cartItems.filter(item => item.cartItemId !== product.cartItemId);
          cogoToast.error("Removed From Cart", { position: "bottom-left" });
        } else {
          state.cartItems = state.cartItems.map(item =>
            item.cartItemId === product.cartItemId ? { ...item, quantity: item.quantity - 1 } : item
          );
          cogoToast.warn("Item Quantity Decreased", { position: "bottom-left" });
        }
      }
    },
    deleteAllFromCart: (state) => {
      state.cartItems = [];
      cogoToast.error("Cleared Cart", { position: "bottom-left" });
    },
  },
  // Extra reducers...
});

// Rest of the code...

export const { addToCart, deleteFromCart, decreaseQuantity, deleteAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;
