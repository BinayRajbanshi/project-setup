import axios from "axios";
import Detail from "./Detail";
const ProductDetail = async ({ params }: { params: { productId: string } }) => {
  const res = await axios.get(
    `http://localhost:5000/api/products/${params.productId}`
  );
  const { data } = res;

  return (
    <div>
      <Detail data={data} />
    </div>
  );
};

export default ProductDetail;
