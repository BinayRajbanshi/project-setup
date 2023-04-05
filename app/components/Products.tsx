"use client";

import { productType } from "../types/types";
import Product from "./Product";
const Products = ({ products }: { products: productType[] }) => {
  return (
    <div className="bg-gray-200 md:pb-28">
      <div className=" mx-auto flex max-w-[1500px]  md:w-11/12">
        <div className="items-center-justify-center relative mt-8 flex w-full gap-8">
          {/* sidebar */}
          <div className="max-w-3/12 min-w-[300px] sticky top-8 left-0 h-[400px]  rounded-lg bg-white py-6 px-4">
            <p className="font-title text-2xl uppercase">Filters</p>
            <div>
              <p className="py-3 ">Filter by categories:</p>
              <div className="flex flex-wrap gap-1">
                <button className="rounded-3xl border border-black bg-transparent py-1 px-3 font-title text-sm  text-black duration-300 hover:border-black hover:bg-black hover:text-white">
                  electronics
                </button>
                <button className="rounded-3xl border border-black bg-transparent py-1 px-3 font-title text-sm  text-black duration-300 hover:border-black hover:bg-black hover:text-white">
                  clothes
                </button>
                <button className="rounded-3xl border border-black bg-transparent py-1 px-3 font-title text-sm  text-black duration-300 hover:border-black hover:bg-black hover:text-white">
                  console
                </button>
                <button className="rounded-3xl border border-black bg-transparent py-1 px-3 font-title text-sm  text-black duration-300 hover:border-black hover:bg-black hover:text-white">
                  fashion
                </button>
              </div>
            </div>
          </div>
          {/* main */}
          <div className=" grid-override grid w-9/12  grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 ">
            {products.map((item) => (
              <Product
                key={item._id}
                id={item._id}
                image={item.image}
                price={item.price}
                name={item.name}
                brand={item.brand}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
