"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Rating from "./Rating";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
// import Quickview from "./Quickview";

import Link from "next/link";

// const ProductCard = (props: productType) => {
const ProductCard = ({
  id,
  name,
  image,
  price,
  brand,
}: {
  id: string;
  name: string;
  image: string;
  price: number;
  brand: string;
}) => {
  const [wishlist, setWishlist] = useState(false);
  const [quickview, setQuickview] = useState(false);
  const handleWishlist = (): void => {
    setWishlist(!wishlist);
  };

  const openQuickview = () => {
    setQuickview(true);
  };
  const closeQuickview = () => {
    setQuickview(false);
  };

  const router = useRouter();

  return (
    <>
      {/* {quickview && <Quickview id={props.id} closeQuickview={closeQuickview} />} */}
      {/* card */}
      <div className="relative overflow-hidden rounded-lg bg-white shadow-lg md:shadow-xl min-h-[450px]">
        {/* wishlist quickview */}
        <div className="absolute top-3 left-3 flex flex-col  gap-2 md:top-6 md:left-5 md:gap-3">
          <button
            className="grid h-8 w-8 place-items-center rounded-full bg-white text-gray-600"
            onClick={openQuickview}
          >
            <AiFillEye />
          </button>
          <button
            onClick={handleWishlist}
            className="grid h-8 w-8 place-items-center rounded-full bg-white text-gray-600"
          >
            {wishlist ? (
              <AiFillHeart className="text-red-500" />
            ) : (
              <AiFillHeart className="text-gray-600" />
            )}
          </button>
        </div>
        <div className="flex h-full flex-col">
          <div className="flex-grow bg-gray-100">
            <Link href={`/product/${id}`}>
              <img
                className="min-h-36 min-w-36 object-cover "
                src={`${image}`}
                alt={`${name}`}
              />
            </Link>
          </div>
          <div className="p-2 md:p-4">
            <div className="flex flex-col-reverse justify-between gap-1 md:flex-row">
              <p className="text-sm text-gray-700">{brand}</p>
              <Rating rating={3} />
            </div>
            <p className="font-semibold capitalize line-clamp-1">{name}</p>
            <p className="text-sm font-semibold">Rs. {price}</p>
            <button
              className="mt-2 w-full rounded bg-black  px-4 py-2  text-white hover:bg-[#222]"
              onClick={() => router.push(`/cart/${id}?qty=1`)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
