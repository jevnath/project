import React from "react";
import "../styles/Contact.css";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="main-page">
      <div className="close">
        <Link to={"/"}>
          <img
            src="https://static-00.iconduck.com/assets.00/close-icon-2048x2047-22z7exfk.png"
            alt="close"
            width={"25px"}
            height={"25px"}
          />
        </Link>
      </div>
      <div className={`main-page-container`}>
        <div className="main-page-text-contain">
          <div className="contact-container">
           <div className="content-card"> <h1>My Contact</h1>
           <div class="divider-draft center"></div>
            </div>
            <div className="contact-page">
      <header className="header">
        <h1>Contact Us About <br /><span>HubSpot’s Software</span></h1>
        <p>
          We’d love to show you how you can get more traffic and leads, increase your
          sales productivity, provide better customer service, or all of the above!
          Here are a few ways to reach out to our sales team.
        </p>
      </header>
   
      <div className="contact-options">
      <div className="option-card">
      <i className="icone">🧑‍💼</i>
          <h3>Full name</h3>
          <button className="demo-btn">Ananth M, Full-stack Developer</button>
        </div>
        <div className="option-card">
          <i className="icone">📞</i>
          <h3>Call us directly</h3>
          <p className="phone">+91 9994321692</p>
        </div>

        <div className="option-card">
          <i className="icone">💬</i>
          <h3>Contact as Email well</h3>
          <button className="chat-btn">ananthmani032@gmail.com</button>
        </div>

       
      </div>

      <div className="contact-image">
        <img
          src="https://img.freepik.com/premium-vector/vector-flat-design-illustration-customer-support_727932-76.jpg" // replace this with your image path
          alt="Person talking with headset"
        />
      </div>
    </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
