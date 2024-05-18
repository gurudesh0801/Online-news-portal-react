import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";

const About = () => {
  const randomParagraph = `Welcome to NewsX.com, your go-to source for the latest news and updates from around the globe. At NewsX, we strive to provide accurate and unbiased reporting on a wide range of topics, including politics, technology, entertainment, and more. Our team of experienced journalists works tirelessly to bring you the most relevant and timely information, keeping you informed and engaged.

  Founded in 2024, NewsX has quickly become one of the most trusted names in online news. With millions of readers worldwide, we are committed to upholding the highest standards of journalism and integrity. Whether you're looking for breaking news, in-depth analysis, or insightful opinion pieces, you'll find it all right here on NewsX.com.

  Our mission is simple: to empower our readers with the knowledge they need to navigate an increasingly complex world. From local events to global developments, we cover it all with accuracy, fairness, and professionalism. Thank you for choosing NewsX.com as your source for news, and we look forward to serving you for years to come.`;

  return (
    <>
      <Navbar/>
      <div className="about-page">
        <header>
          <h1>NewsX.com</h1>
        </header>
        <section>
          <p>{randomParagraph}</p>
        </section>
        <footer>
          <p>
            &copy; {new Date().getFullYear()} NewsX.com. All rights reserved.
          </p>
          <p>Contact: contact@newsx.com</p>
        </footer>
      </div>
    </>
  );
};

export default About;
