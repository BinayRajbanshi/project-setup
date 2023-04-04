"use client";
import { productType } from "@/app/types/types";
import { useState } from "react";
// import Rating from "../components/Rating";
// import WishlistBtn from "../components/WishlistBtn";
// import Review from "../components/Review";

const Detail = ({ data: item }: { data: productType }) => {
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
    <>
      <div className="my-container py-10 md:p-20">
        <div
          key={item._id}
          className="flex flex-col gap-8 md:flex-row md:gap-0"
        >
          <div className="flex items-center justify-center md:w-5/12">
            <img
              className="object-fit inline-block w-10/12  rounded-lg"
              src={item.image}
              alt={item.name}
            />
          </div>
          {/* description of product */}
          <div className="grid place-items-center px-4 font-text md:w-7/12 md:p-0">
            <div className="flex flex-col gap-2 md:w-10/12">
              <p className="text-sm uppercase text-gray-600">{item.category}</p>
              <p className="text-2xl font-semibold text-gray-800">
                {item.name}
              </p>
              <div className="flex gap-3 ">
                {/* <Rating rating={4} />{" "} */}
                <span className="text-sm">{item.numReviews} reviews</span>
              </div>
              <p className="py-4 text-gray-800">{item.description}</p>
              <ul className="list-disc">
                <p className="text-semibold">Features</p>
                {item.features.map((item, index) => {
                  return (
                    <li className="text-gray-700" key={index}>
                      {item}
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-col gap-1 whitespace-pre text-gray-500">
                <p>
                  Price:{" "}
                  <span className="font-bold text-gray-900">${item.price}</span>
                </p>
                <p>
                  Brand: <span className="text-gray-900">{item.brand}</span>
                </p>
                <p>
                  Status:{" "}
                  {item.countInStock > 0 ? (
                    <span className="text-gray-900">InStock</span>
                  ) : (
                    <span className="text-red-500">Out Of Stock</span>
                  )}
                </p>
              </div>
              <div className="mt-4 flex gap-4">
                <div className="flex items-center rounded bg-gray-700 font-sans">
                  <button
                    className=" w-10 rounded-l  bg-gray-700  text-lg text-white"
                    onClick={handlesDecrease}
                  >
                    -
                  </button>
                  <span className="w-10 border-2 border-gray-700 bg-gray-700 text-center text-lg text-white">
                    {qty}
                  </span>
                  <button
                    className=" w-10 rounded-r  bg-gray-700 text-lg text-white"
                    onClick={handlesIncrease}
                  >
                    +
                  </button>
                </div>
                {/* <WishlistBtn onWishlist={true} /> */}
                <button className="btn hidden max-w-[300px] flex-grow md:block">
                  Add To Cart
                </button>
              </div>
              <button className="btn mt-4 flex-grow md:hidden">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
