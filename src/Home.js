import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
function Home() {
  return (
    <div className="home vh-100">
      <div className="container ">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-6">
            <div className="card border-1 shadow-lg ">
              <div className="card-body hom text-center bg-dark">
                <br />
                <div class="glitch-wrapper">
                  <div class="glitch" data-glitch="PC Store ">
                    PC Store{" "}
                  </div>
                </div>{" "}
                <br />
                <h2 className="lead text-white">Welcome To PC Store</h2>
                <br />
                <Link to="/login" className="btn btn-primary btn-lg">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
