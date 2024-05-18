import React from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <>
    <Navbar/>
      <div className="contact-page">
        <header>
          <h1>Contact Us</h1>
        </header>
        <section>
          <p>
            Feel free to reach out to us with any questions, comments, or
            feedback. We'd love to hear from you!
          </p>
          <form action='http://localhost:3001/contact' method="post">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <input type="submit" value="Sent Message"/>
          </form>
        </section>
        <footer>
          <p>
            &copy; {new Date().getFullYear()} NewsX.com. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Contact;
