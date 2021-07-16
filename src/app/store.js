import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import currencyReducer from "../features/currencySlice";
function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}
const persistedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    cart: cartReducer,
  },
  preloadedState: persistedState,
  devTools: true,
});

store.subscribe(() =>
  saveToLocalStorage({
    cart: store.getState().cart,
  })
);

export default store;
