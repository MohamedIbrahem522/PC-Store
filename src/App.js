import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink
} from "react-router-dom";
import ProductList from "./Products";
import ProductDetails from "./ProductDetails";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import products from "./productsdata";
import ProductCart from "./ProductCart";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
            PC Store
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/"
                    exact
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/about"
                    activeClassName="active"
                  >
                    About
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/products"
                    activeClassName="active"
                  >
                    Products
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/login"
                    activeClassName="active"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/register"
                    activeClassName="active"
                  >
                    Register
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/products"
              element={<ProductList products={products} />}
            />
            <Route
              path="/products/:id"
              element={<ProductDetails products={products} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/product/:id/price"
              element={<ProductCart products={products} />}
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
