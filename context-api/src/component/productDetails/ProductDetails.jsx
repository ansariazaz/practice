import React from "react";
import { useParams} from "react-router-dom";
useParams;
const ProductDetails = ({ products }) => {
  const { id } = useParams();
  let product = products?.filter((item) => item.id == id);
  return (
    <div className="detail">
      <div>
        <img src={product[0]?.thumbnail} alt="product-image" />
      </div>
      <div>
        <h2>{product[0]?.title}</h2>
        <p>{product[0]?.description}</p>
        <p>Brand:{product[0]?.brand}</p>
        <h3>Rs {product[0]?.price}</h3>
      </div>
    </div>
  );
};

export default ProductDetails;
