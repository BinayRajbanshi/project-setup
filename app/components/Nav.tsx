import {
  AiFillShopping,
  AiFillHome,
  AiOutlineLogin,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex min-h-[10vh] flex-col gap-3 bg-white p-4 font-text md:flex-row md:items-center md:justify-center md:gap-0  md:py-4">
      {/* mobile */}
      <div className="block text-center font-head text-3xl text-primary md:hidden md:text-5xl">
        <Link href="/">Puffy de store</Link>
      </div>
      <div className="fixed bottom-0 left-0 z-20 flex w-screen bg-gray-200 py-2 text-sm text-gray-600 md:hidden">
        <div className="flex w-full justify-around">
          <Link href="/" className="flex flex-col items-center justify-center">
            <AiFillHome className="text-lg" /> <span>Home </span>
          </Link>
          <Link
            href="/login"
            className="flex flex-col items-center justify-center"
          >
            <FaUserAlt className="text-lg" /> <span>Profile </span>
          </Link>

          <Link
            href="/orders"
            className="flex flex-col items-center justify-center"
          >
            <AiFillShopping className="text-lg" />
            <span>Orders </span>
          </Link>
          <Link
            href="/cart"
            className="relative flex flex-col items-center justify-center"
          >
            <BsFillCartFill className="text-lg"></BsFillCartFill>{" "}
            <span>Cart</span>
            <div className="absolute -top-2 -right-2 inline-flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white ">
              1
            </div>
          </Link>
        </div>
      </div>
      {/* mobile ends */}
      <div className="my-container flex items-center text-gray-800 md:gap-16 lg:gap-24 ">
        <div className="hidden font-head text-4xl text-primary md:block md:text-5xl">
          <Link href="/">Ultima Lifestyle</Link>
        </div>
        <div className="flex flex-grow items-center justify-between gap-12">
          <form action="" className="relative max-w-[900px]  flex-grow">
            <input
              className="w-full rounded-lg border-2 border-primaryLight p-2 pr-12 text-gray-800 outline-primary md:rounded-xl md:px-4"
              type="text"
              placeholder="Search for products"
            />
            <button
              type="submit"
              className="absolute right-0 z-10  h-full rounded-r-lg border-2  p-2 text-sm  md:rounded-r-xl md:px-4"
            >
              Search
            </button>
          </form>
          <div className="hidden gap-8 md:flex ">
            <Link
              href="/login"
              className="flex flex-col items-center justify-center"
            >
              <AiOutlineLogin className="text-3xl "></AiOutlineLogin>{" "}
              <span>Sign in </span>
            </Link>
            <Link
              href="/orders"
              className="flex flex-col items-center justify-center"
            >
              <AiFillShopping className="text-3xl "></AiFillShopping>
              <span>Orders </span>
            </Link>
            <Link
              href="/cart"
              className="relative flex flex-col items-center justify-center"
            >
              <BsFillCartFill className="fa-solid fa-cart-shopping text-3xl"></BsFillCartFill>
              <div className="absolute -top-2 -right-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white ">
                1
              </div>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
      {/* dark mode toggle  */}
      {/* <button onClick={handleDarkMode} className={`object inline-block fixed bottom-16 right-16 p-4 rounded-full ${darkMode ? "bg-yellow-500" : 'bg-transparent'} border-[1px] border-black`}>
          dark mode
      </button> */}
    </nav>
  );
};

export default Nav;
