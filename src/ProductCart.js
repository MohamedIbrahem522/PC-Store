import React from "react";
import { useParams, Link } from "react-router-dom";

function ProductCart({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container mt-5">
      <h1 style={{ color: "green", textAlign: "center", marginBottom: "20px" }}>
        Product Cart
      </h1>
      <div className="product-details d-flex align-items-center">
        <img
          src={product.images[0]}
          className="product-image"
          alt={product.title}
          style={{ width: "250px", height: "250px", marginRight: "20px" }}
        />
        <div>
          <div
            className="product-info"
            style={{
              borderBottom: "2px solid green",
              paddingBottom: "20px",
              marginBottom: "8px"
            }}
          >
            <h4 className="mt-5">
              {product.title}
            </h4>
            <br />
            <h5>
              {product.Brand},
              {product.category}
            </h5>
            <br />
            <b>
              <p>
                Price: {product.price} EGP
              </p>
            </b>
          </div>
          <div className="d-flex">
            <h5 style={{ marginRight: "75px" }}>
              Total Price: {product.price} EGP
            </h5>
            <Link to={`/products`} className="btn btn-success">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
