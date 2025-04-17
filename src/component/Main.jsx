import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import stark from "../assets/profileUAN__1_-removebg-preview.png";
import "../App.css";

export default function Main() {
  const [animationStage, setAnimationStage] = useState(null);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setAnimationStage(1);
    setTimeout(() => {
      setAnimationStage(2); 
      setTimeout(() => {
        navigate(path);
      }, 650);
    }, 500); 
  };

  return (
    <div className="main">
      <div className={`main-container ${animationStage === 2 ? "expand-fullscreen" : ""}`}>
        <img src={stark} alt="main" className="main-image" />
        {animationStage && <div className="inner-transition-overlay" />}
      </div>
      <div className="main-text-container">
        <ul className="main-text">
          <li onClick={() => handleNavigation("/about")}>About Me</li>
          <li onClick={() => handleNavigation("/resume")}>Resume</li>
          <li onClick={() => handleNavigation("/service")}>Service</li>
          <li onClick={() => handleNavigation("/projects")}>Projects</li>
          <li onClick={() => handleNavigation("/contact")}>Contact</li>
        </ul>
      </div>

      <div className="main-stack-container">
        <ul className="main-stack">
          <li>Full Stack Developer</li>
        </ul>
      </div>
      <h1>Ananth Mani</h1>
    </div>
  );
}
