import axios from "axios";
import { store } from "@/app/store/store";
import { addToCart } from "@/app/store/features/cartSlice";
import { cartItemT, productType } from "@/app/types/types";
import Cart from "./Cart";
import Providers from "@/app/components/Provider";
import PreloadStore from "@/app/components/PreloadStore";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { data }: { data: productType } = await axios.get(
    `http://localhost:5000/api/products/${id}`
  );

  const cartItem: cartItemT = {
    _id: data._id,
    name: data.name,
    brand: data.brand,
    image: data.image,
    price: data.price,
    quantity: 1,
  };

  // adding the data from server to store directly
  store.dispatch(addToCart(cartItem));

  return (
    <div>
      <PreloadStore cartItems={cartItem} />
      <Providers>
        <Cart />
      </Providers>
    </div>
  );
};

export default page;
