import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalCount: 0,
  totalPrice: 0,
  user: {},
};

const cartSlicer = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, price, count, cartTotal } = action.payload;
      const existingItemIndex = state.cart.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].count += count || 1;
        state.cart[existingItemIndex].cartTotal += cartTotal || price;
      } else {
        state.cart.push({
          ...action.payload,
          count: count || 1,
          cartTotal: cartTotal || price,
        });
      }

      state.totalPrice = subTotal(state.cart);
      state.totalCount = state.cart.reduce((acc, item) => acc + item.count, 0);
    },

    restoreCart: (state, action) => {
      state.cart = initialState.cart;
      state.totalPrice = initialState.totalPrice;
      state.totalCount = initialState.totalCount;
    },
    deleteFromCart: (state, action) => {
      const { id } = action.payload;
      const existingItems = state.cart.filter((item) => item.id === id);

      if (existingItems.length > 0) {
        const deletedItemCount = existingItems.reduce(
          (acc, item) => acc + item.count,
          0
        );
        const deletedItemTotalPrice = existingItems.reduce(
          (acc, item) => acc + item.price * item.count,
          0
        );

        state.cart = state.cart.filter((item) => item.id !== id);
        state.totalCount -= deletedItemCount;
        state.totalPrice -= deletedItemTotalPrice;
      }
    },

    setPrice: (state, action) => {
      const { increment, index } = action.payload;
      const copyArray = [...state.cart];

      copyArray[index].cartTotal += copyArray[index].price * increment;

      if (increment === -1 && copyArray[index].count === 1) {
        copyArray.splice(index, 1);
      } else {
        copyArray[index].count += increment;
      }

      state.totalPrice = subTotal(copyArray);
      state.totalCount = copyArray.reduce((acc, item) => acc + item.count, 0);
      state.cart = copyArray;
    },
  },
});

function subTotal(cart) {
  return cart.reduce((acc, current) => {
    return acc + current.cartTotal;
  }, 0);
}

export const { addToCart, deleteFromCart, setPrice, setCustomer, restoreCart } =
  cartSlicer.actions;

export default cartSlicer.reducer;
