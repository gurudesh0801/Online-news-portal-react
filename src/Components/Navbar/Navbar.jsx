import React from "react";
import "./Navbar.css";

const Navbar = ({ onSelectCategory }) => {
  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];
  return (
    <>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">NewsX</label>
        <ul>
          <li></li>
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
      <nav className="smallNav">
        <hr />
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <a href="#" onClick={() => onSelectCategory(category)}>
                {category}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
