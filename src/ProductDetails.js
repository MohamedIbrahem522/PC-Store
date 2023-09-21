import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function ProductDetails({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id, 10));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return <div>Product not found.</div>;
  }

  const showNextImage = () => {
    if (currentImageIndex < product.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const showPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="container mt-5 mb-3 d-flex justify-content-center align-items-center">
      <div className="col-md-10">
        <div className="card border-0 shadow-lg cart">
          <div className="row no-gutters">
            <div className="col-md-4">
              <div className="card-body text-center">
                <button
                  onClick={showPreviousImage}
                  disabled={currentImageIndex === 0}
                  className="btn btn-primary"
                  style={{ width: 40, height: 40, borderRadius: "50%" }}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <img
                  src={product.images[currentImageIndex]}
                  className="img-fluid"
                  alt={product.title}
                  style={{ width: "100%", height: "auto" }}
                />
                <button
                  onClick={showNextImage}
                  disabled={currentImageIndex === product.images.length - 1}
                  className="btn btn-primary"
                  style={{ width: 40, height: 40, borderRadius: "50%" }}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2>
                  {product.title}
                </h2>
                <br />
                <p>
                  <b>Price:</b> {product.price} EGP
                </p>
                <p>
                  <b>Availability:</b>{" "}
                  {product.Availability ? "In Stock" : "Out of Stock"}
                </p>
                <p>
                  <b>Brand:</b> {product.Brand}
                </p>
                <p>
                  <b>Category:</b> {product.category}
                </p>
                <div className="ml-3">
                  {[1, 2, 3, 4, 5].map(index =>
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      style={{ color: "red" }}
                    />
                  )}
                </div>
                <br />

                <br />
                <Link
                  to={`/product/${product.id}/price`}
                  className="btn btn-success mt-3"
                >
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
