"use client";

import { store } from "../store/store";
import { addToCart } from "../store/features/cartSlice";
import { cartItemT } from "../types/types";
import { useRef } from "react";

function PreloadStore({ cartItems }: { cartItems: cartItemT }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(addToCart(cartItems));
    loaded.current = true;
  }
  return null;
}

export default PreloadStore;
