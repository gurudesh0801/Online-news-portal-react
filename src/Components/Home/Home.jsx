import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">NewsX</label>
        <ul>
          <li>
            <a className="active" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/postnews">Post/Add News</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/signup">Signup/Login</a>
          </li>
        </ul>
      </nav>
      <div className="mainCont">
        <section>
          <div className="centerDiv">
            <h1 className="display-1">
              World's Best Online <span className="newsSpan">NEWS</span> Portal
            </h1>
            <button>
              <a href="/main">Read NEWS</a>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
