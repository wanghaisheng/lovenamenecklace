import { createSlice } from "@reduxjs/toolkit";
import { CartType } from "../../../typings";
import { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  cart: CartType[];
  total: number;
}

const initialState: InitialState = {
  cart: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartType>) {
      console.log("Working");
      const cartItemExist = state.cart.find((item) =>
        item.color === action.payload.color ? item : null
      );
      console.log("cartItemExits", cartItemExist);
      console.log("action payload", action.payload);
      if (cartItemExist) {
        const updatedCartItem = state.cart.map((item) =>
          item.color === cartItemExist.color
            ? {
                ...item,
                quantity: item.quantity + action.payload.quantity,
                total: item.total + action.payload.total,
              }
            : item
        );
        state.cart = updatedCartItem;
        console.log("Multiple", state.cart);
      } else {
        state.cart = [...state.cart, action.payload];
        console.log("Single", state.cart);
      }
      cartSlice.caseReducers.setCartToLocalStorage(state);
      cartSlice.caseReducers.setTotal(state);
    },
    setCartToLocalStorage(state) {
      localStorage.setItem("cartLocal", JSON.stringify(state.cart));
    },
    getCartFromLocalStorage(state) {
      const cartLocal = localStorage.getItem("cartLocal");
      if (cartLocal !== null) {
        state.cart = JSON.parse(cartLocal);
        cartSlice.caseReducers.setTotal(state);
      } else {
        state.cart = [];
      }
    },
    setItemQuantity(
      state,
      action: PayloadAction<{ id: string; color: string; quantity: number }>
    ) {
      console.log("work work");
      const newCart = state.cart.map((item) => {
        return item.id === action.payload.id &&
          item.color === action.payload.color
          ? {
              ...item,
              quantity: action.payload.quantity,
              total: action.payload.quantity * item.price,
            }
          : item;
      });
      state.cart = newCart;
      console.log("CART", state.cart);
      cartSlice.caseReducers.setCartToLocalStorage(state);
      cartSlice.caseReducers.setTotal(state);
    },
    deleteItem(state, action: PayloadAction<{ id: string; color: string }>) {
      const { id, color } = action.payload;
      const newCart = state.cart.filter(
        (item) => !(item.id === id && item.color === color)
      );
      state.cart = newCart;
      console.log("CART", state.cart);
      cartSlice.caseReducers.setCartToLocalStorage(state);
      cartSlice.caseReducers.setTotal(state);
    },
    setTotal(state) {
      const total = state.cart.reduce((acc, cur) => {
        return (acc += cur.total);
      }, 0);
      state.total = total;
    },
  },
});

export const {
  addToCart,
  getCartFromLocalStorage,
  setItemQuantity,
  deleteItem,
} = cartSlice.actions;
export default cartSlice.reducer;
