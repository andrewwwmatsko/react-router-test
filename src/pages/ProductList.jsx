import ProductDetails from "./ProductDetails";
import { getProducts } from "../fake-api";
import { Link } from "react-router-dom";

export default function ProductList() {
  const products = getProducts();
  return (
    <ul style={{ listStyleType: "none" }}>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link to={`${product.id}`}>
              <p>{product.name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
