import React, { useState } from "react";
import axios from "axios";
import "./NewsPost.css";
import Navbar from "../Navbar/Navbar";

const NewsPostWithUploadButton = () => {
  const [newsList, setNewsList] = useState([]);
  const [formData, setFormData] = useState({
    image: null,
    headline: "",
    description: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    const formDataToSend = new FormData();
    formDataToSend.append("image", formData.image);
    formDataToSend.append("headline", formData.headline);
    formDataToSend.append("description", formData.description);

    try {
      const response = await axios.post(
        "http://localhost:3001/upload",
        formDataToSend
      );

      const newNews = {
        id: response.data.id,
        image: response.data.imageUrl,
        headline: formData.headline,
        description: formData.description,
      };
      setNewsList([...newsList, newNews]);

      setFormData({ image: null, headline: "", description: "" });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
    <Navbar/>
      <div className="news-post-container">
        <h2>Add News</h2>
        <form action="http://localhost:3001/upload" method="post" enctype="multipart/form-data" className="">
          <div className="upload-btn-wrapper">
            <label htmlFor="image" className="upload-btn">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="headline">Headline:</label>
            <input
              type="text"
              id="headline"
              name="headline"
              value={formData.headline}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Add News</button>
        </form>

        <div className="cardSec d-flex flex-wrap m-3" style={{ width: "50%" }}>
          {newsList.map((news) => (
            <div className="card m-3" style={{ width: "18rem" }} key={news.id}>
              <img src={news.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-title">{news.headline}</p>
                <p className="card-text">{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsPostWithUploadButton;
