import { useParams } from "react-router-dom";
import { getProductById } from "../fake-api";

export default function ProductDetails() {
  const { productId } = useParams();
  const product = getProductById(productId);
  return (
    <div>
      <h2>
        Product - {product.name} - {productId}
      </h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sunt
        excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate a, sed
        reprehenderit? Deleniti optio quasi, amet natus reiciendis atque fuga
        dolore? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Impedit suscipit quisquam incidunt commodi fugiat aliquam praesentium
        ipsum quos unde voluptatum?
      </p>
    </div>
  );
}
