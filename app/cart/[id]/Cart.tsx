"use client";
import { BsFillTrashFill } from "react-icons/bs";
import OrderSummary from "../../components/OrderSummary";
import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/app/store/features/cartSlice";

import { TypedUseSelectorHook } from "react-redux";

import { RootState, AppDisptach } from "@/app/store/store";

export const useAppDispatch: () => AppDisptach = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Cart = () => {
  const dispatch = useAppDispatch();
  const storedata = useAppSelector((store) => store.cart);
  const params = useSearchParams();
  const quantity = params.getAll("qty");
  const [qty, setQty] = useState(0);
  const handleOnChange = () => {
    console.log("handles onchange");
  };
  const handlesIncrease = () => {
    setQty(qty + 1);
  };
  const handlesDecrease = () => {
    setQty(qty - 1);
  };

  return (
    <div className="my-container mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="bg-white p-3 md:w-3/4 md:p-10">
          <div className="flex justify-between border-b pb-4 md:pb-8">
            <h1 className="text-lg font-semibold md:text-2xl">
              {" "}
              Shopping Cart
            </h1>
            <h2 className="text-lg font-semibold md:text-2xl">
              {storedata.cartItems.length} Items
            </h2>
          </div>

          {/* table heading  */}
          <div className="hidden items-center   border-b py-6 text-xs font-semibold uppercase text-gray-600 md:flex">
            <span className="w-6/12">Product</span>
            <span className="w-2/12">Quatity</span>
            <span className="w-2/12">Price</span>
            <span className="w-2/12">Total</span>
          </div>
          {/* table items */}

          {storedata.cartItems.map((item) => {
            return (
              <div className="relative my-4 flex h-24 items-center bg-gray-100">
                <button
                  className="absolute right-3 top-1/4 -translate-y-3/4 rounded bg-red-600 p-1 text-sm text-white md:right-8 md:top-2/4 md:-translate-y-2/4 md:rounded-md md:p-2 md:text-base"
                  onClick={() => dispatch(removeFromCart(item._id))}
                >
                  <BsFillTrashFill />
                </button>
                <div className="w-6/12 flex-grow md:flex-grow-0">
                  <div className="flex items-center">
                    <img
                      className="object-fit ml-2 inline-block h-20  self-start rounded-lg"
                      src={`${item.image}`}
                      alt={item.name}
                    />
                    <div className="ml-3 flex flex-grow flex-col md:flex-grow-0">
                      <p className="font-semibold md:text-lg">{item.name}</p>
                      <p className="font-light">{item.brand}</p>
                      <div className="flex items-center self-center md:hidden">
                        <button className="w-3 fill-current text-lg font-bold text-gray-600 ">
                          -
                        </button>
                        <input
                          className="mx-2 w-8 border bg-gray-900 text-center text-white"
                          type="number"
                          value={qty}
                          onChange={handleOnChange}
                        />
                        <button className="w-3 fill-current text-lg font-bold text-white ">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-2/12">
                  <div className="my-auto flex  h-24  items-center ">
                    <button
                      className=" w-8 rounded-l  bg-gray-900  text-lg text-white"
                      onClick={handlesDecrease}
                    >
                      -
                    </button>
                    <span className=" w-8 bg-gray-900 text-center text-lg text-white">
                      {qty}
                    </span>
                    <button
                      className=" w-8 rounded-r  bg-gray-900 text-lg text-white"
                      onClick={handlesIncrease}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="md: hidden w-2/12 md:block">${item.price}</div>
                <div className="inline-flex self-end pb-2 pr-2 text-end text-sm font-semibold md:block md:w-2/12 md:self-center md:p-0 md:text-start md:text-base ">
                  <span className="text-sm font-light md:hidden">Price : </span>{" "}
                  ${item.price}
                </div>
              </div>
            );
          })}

          <Link
            href="/"
            className="mt-10 flex text-sm font-semibold text-indigo-600"
          >
            <svg
              className="mr-2 w-4 fill-current text-indigo-600"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        {/* order summary */}
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
