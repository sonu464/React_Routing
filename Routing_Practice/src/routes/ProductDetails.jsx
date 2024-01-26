import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  return (
    <div>
      <h1>Product {params.productId} Details</h1>
      <Link to=".." relative="path">
        Path Back
      </Link>
      <Link to=".." relative="route">
        Route Back
      </Link>
    </div>
  );
}

export default ProductDetails;
