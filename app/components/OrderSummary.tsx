// import Message from "./Message";
import { useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import Link from "next/link";

const OrderSummary = () => {
  const [orderOpen, setOrderOpen] = useState(false);
  // open order summary in phone
  const handleOrderOpen = (): void => {
    setOrderOpen(!orderOpen);
  };
  return (
    <div
      id="summary"
      className="md:w-1/4 px-8 md:py-8 md:px-0 py-6 font-text z-30 "
    >
      <div
        className={`fixed md:static duration-500  bottom-[54px] left-0 bg-gray-100 md:bg-white w-full px-4 md:px-0 md:py-0 py-3 translate-y-[86%] md:translate-y-0 ${
          orderOpen ? "order-show" : ""
        }`}
      >
        <div
          onClick={handleOrderOpen}
          className=" font-semibold text-lg md:text-2xl border-gray-300 border-b md:border-gray-300 border-t-0 py-2 md:pb-8 flex items-center md:justify-start justify-center gap-3 "
        >
          Order Summary{" "}
          <span className="object text-primary text-2xl md:hidden">
            {orderOpen ? <FiArrowDown /> : <FiArrowUp />}
          </span>
        </div>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Items 3</span>
          <span className="font-semibold text-sm">590$</span>
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">
            Shipping
          </label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
            <option>Fast Delivery - $40.00</option>
          </select>
        </div>
        <div className="py-4">
          <label
            htmlFor="promo"
            className="font-semibold inline-block mb-3 text-sm uppercase"
          >
            Promo Code
          </label>
          <input
            type="text"
            id="promo"
            placeholder="Enter your code"
            className="p-2 text-sm w-full"
          />
        </div>
        <button className="bg-gray-800 rounded hover:bg-gray-900 px-5 py-2 text-sm text-white uppercase">
          Apply
        </button>
        <div className="border-gray-300 border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>$600</span>
          </div>
          <Link
            href="/checkout"
            className="block text-center bg-primaryLight rounded font-semibold hover:bg-primary py-3 text-sm text-white uppercase w-full"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
