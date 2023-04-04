import React from "react";

const Hero = () => {
  return (
    <div className="md:flex md:h-[80vh]">
      <div className="grid place-items-center bg-[#8ec8b8] md:w-6/12">
        <div className="flex flex-col items-center justify-center gap-8 py-10 md:flex-row md:gap-0 md:py-0">
          <div className="pl-0 md:w-6/12 md:pl-5">
            <div className="max-w-[500px] px-4 md:px-0">
              <p className="font-subtitle">New Arrivals</p>
              <p className="font-title text-3xl font-bold md:text-5xl">
                Ultima Nova Smartwatch
              </p>
              {/* <p className="font-text text-gray-800 md:pt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, reiciendis sint placeat corporis nemo mollitia
                temporibus, adipisci explicabo eligendi in fugit fuga! Nam,
                neque!
              </p> */}
              <button className="btn-buy mt-4 self-start rounded-[63px]">
                Shop Now
              </button>
            </div>
          </div>
          {/* image */}
          <div className="md:w-4/12">
            <img src="./images/watch/black-left.png" alt="smartwatch" />
          </div>
        </div>
      </div>
      <div className="h-full flex-col md:flex md:w-6/12">
        <div className="hidden h-[40vh] bg-[#a18c10] text-white md:block">
          <div className="flex  h-full items-center justify-around">
            <div className="pl-5 md:w-5/12">
              <p className="font-subtitle">Top Seller</p>
              <p className="font-title text-3xl font-bold">
                Ultima Atom Earbuds
              </p>
              <p className="text-gray-white font-text ">
                Sound you want to feel no matter what
              </p>
              <button className="btn-buy-white mt-4 self-start rounded-[63px]">
                Shop Now
              </button>
            </div>
            {/* image */}
            <div className="overflow-hidden md:w-5/12">
              <img
                src="./images/earbud/blue-earbud.png"
                className="h-60 w-60 object-contain"
                alt="classic radio"
              />
            </div>
          </div>
        </div>
        <div className="flex h-[40vh]">
          <div className="w-6/12 bg-[#F2AEAE]">
            <div className="grid h-full place-items-center">
              <img src="./images/shop.png" alt="" />
            </div>
          </div>
          <div className="w-6/12 bg-gray-100">
            <div className="flex h-full flex-col items-center justify-center">
              <p className="text-semibold font-text uppercase">Attention !</p>
              <p className="text-semibold text-center font-subtitle text-3xl">
                Flash Sale Here
              </p>

              <button className="btn-buy mx-auto mt-4 self-start rounded-[63px]">
                Flash Sale
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
