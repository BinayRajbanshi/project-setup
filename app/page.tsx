import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "./components/Banner";
import Products from "./components/Products";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const { data } = await axios.get("http://localhost:5000/api/products");
  // console.log(data);
  return (
    <main className="">
      <Banner />
      <div>
        <Products products={data} />
      </div>
    </main>
  );
}
