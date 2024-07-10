import React, { useState, useEffect } from "react";
import "./MainPage.css";
import img from "../../assets/Images/default.jpg";
import Navbar from "../Navbar/Navbar";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("General");

  const fetchData = async () => {
    const apiKey = "866493ce1dd54ff1b23c06668f167fa7";
    const api_url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;

    try {
      const response = await fetch(api_url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <>
      <Navbar onSelectCategory={handleCategorySelect} />
      <div className="cardSec d-flex flex-wrap m-3" style={{ width: "100%" }}>
        {data.map((article, index) => (
          <div className="card m-3" style={{ width: "18rem" }} key={index}>
            <img
              src={article.urlToImage || img}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-title">
                {article && article.title}
              </p>
              <p className="card-text">
                {article && article.description}
              </p>
              <a href={article && article.url} className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainPage;
