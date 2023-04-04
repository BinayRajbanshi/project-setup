import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";
import Rating from "./Rating";
import { useState } from "react";
import Link from "next/link";
// import WishlistBtn from "./WishlistBtn";

type propType = {
  closeQuickview: () => void;
  id: string;
};
const Quickview = (props: propType) => {
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
    <div className="fixed top-0 left-0 z-20 grid h-full w-full place-items-center bg-black bg-opacity-50">
      <div className="relative z-30 grid w-11/12 place-items-center rounded-xl bg-gray-100 md:h-[500px] md:w-[1000px]">
        <button
          onClick={props.closeQuickview}
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-red-600 md:right-8"
        >
          <AiOutlineClose className=" text-white"></AiOutlineClose>
        </button>
        <div className="mx-auto max-w-[900px] p-2 py-6 md:w-11/12 md:py-14 md:px-5">
          <div className="flex flex-col gap-8 md:flex-row md:gap-0">
            <div className="flex items-center justify-center md:w-5/12">
              <img
                className="object-fit h-32 w-32 rounded-lg md:h-auto md:w-auto  "
                src="https://media.wired.com/photos/6148ef98a680b1f2086efee0/1:1/w_1037,h_1037,c_limit/Gear-Review-Apple_iphone13_hero_us_09142021.jpg"
                alt="iphone 13"
              />
            </div>
            {/* description of product */}
            <div className="grid place-items-center px-4 font-text md:w-7/12 md:p-0">
              <div className="flex flex-col gap-2 md:w-10/12">
                <p className="text-sm uppercase text-gray-600">Mobile Phones</p>
                <p className="text-2xl font-semibold text-gray-800">
                  Samsung Galaxy Z fold3 5G 8/512gb
                </p>
                <div className="flex gap-3 ">
                  <Rating rating={4} />{" "}
                  <span className="text-sm">20 reviews</span>
                </div>
                {/* <p className="py-4 text-gray-800">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                        harum quo sit obcaecati odio placeat corporis ullam quibusdam
                        cumque, tenetur porro pariatur veniam voluptatum aperiam illum
                        nulla fuga adipisci dolorum vitae est necessitatibus
                        repellendus! Aperiam eos molestias omnis suscipit pariatur
                        </p> */}
                <div className="flex flex-col gap-1 whitespace-pre text-gray-500">
                  <p>
                    Price:{" "}
                    <span className="font-bold text-gray-900">$1200</span>
                  </p>
                  <p>
                    Brand: <span className="text-gray-900">Apple</span>
                  </p>
                  <p>
                    Status: <span className="text-gray-900">InStock</span>
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
          <Link
            href="/product/asdf"
            className="mt-10 flex items-end justify-end text-sm font-semibold text-indigo-600"
          >
            View All Details
            <span className="ml-2 text-xl">
              <AiOutlineArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quickview;
