import React, { useState } from "react";
import products from "./productsdata";
import "./App.css";

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };

  const categories = ["Processors", "Motherboard", "Graphic Card", "Cases"];

  return (
    <div className="page">
      <div className="container mt-5 mb-3 text-center">
        <h1 className="adr">Products</h1>
        <div className="category-buttons m-3">
          <button
            className={`btn categ m-2 ${selectedCategory === "all"
              ? "active"
              : ""}`}
            onClick={() => handleCategoryChange("all")}
          >
            All Products
          </button>
          {categories.map((category, index) =>
            <button
              key={index}
              className={`btn categ m-2 ${selectedCategory === category
                ? "active"
                : ""}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          )}
          <button
            className={`btn categ m-2 ${selectedCategory === "SSD & HDD"
              ? "active"
              : ""}`}
            onClick={() => handleCategoryChange("SSD & HDD")}
          >
            SSD & HDD
          </button>
        </div>

        <div className="row">
          {products
            .filter(product => {
              if (selectedCategory === "all") {
                return true;
              } else if (selectedCategory === "SSD & HDD") {
                return product.category === "SSD" || product.category === "HDD";
              } else {
                return product.category === selectedCategory;
              }
            })
            .map(product =>
              <div key={product.id} className="col-md-3 col-sm-6 mb-3">
                <div className="card">
                  <img
                    src={product.images[0]}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body pro">
                    <h5 className="card-title">
                      {product.title}
                    </h5>
                    <h5 className="card-text">
                      Price: {product.price} EGP
                    </h5>
                    <a
                      href={`/products/${product.id}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
