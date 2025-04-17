import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import {
  IoIosBluetooth,
  IoIosBulb,
  IoIosFootball,
  IoIosGlasses,
  IoIosHelpBuoy,
  IoIosTrophy,
  IoMdHappy,
} from "react-icons/io";
import "../styles/about.css";
import DownloadPDF from "../component/Download";

export default function About() {
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
          <div className="about-content">
            <h1>Basic Info About Me</h1>
            <div class="divider-draft center"></div>
            <div className="basic-details">
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/5d2392b234a5c400084abe23/Film-Robert-Downey-Jr/960x0.jpg?format=jpg&width=960"
                alt="tony stark"
              />
              <div className="basic-details-text-contain">
                <div className="basic-details-text">
                  <p>
                    As a passionate and dedicated Full Stack Developer with 3
                    years of professional experience, I specialize in building
                    responsive, scalable, and performance-driven web
                    applications using modern technologies like the Full stack
                    (SQL,PostgreSQL,MongoDB, Express.js, React.js, Node.js). I
                    have a deep understanding of both frontend and backend
                    development, and I’m highly proficient in translating
                    business requirements into efficient and elegant solutions.
                    Beyond coding, I’ve had the opportunity to lead and
                    coordinate development teams, mentor junior developers, and
                    collaborate closely with cross-functional teams including
                    UI/UX designers, QA engineers, and project managers. I excel
                    in agile environments, value clean and maintainable code,
                    and prioritize clear communication to ensure timely and
                    successful delivery.
                  </p>
                </div>
                <div className="basic-details-text-list">
                  <div className="basic-details-text-list-item">
                    <h1>Name</h1>
                    <p>ANANTH M</p>
                  </div>
                  <div className="basic-details-text-list-item">
                    <h1>Age</h1>
                    <p>27 Years</p>
                  </div>
                  <div className="basic-details-text-list-item">
                    <h1>Position</h1>
                    <p>Full-Stack Developer</p>
                  </div>
                  <div className="basic-details-text-list-item">
                    <h1>Home Town</h1>
                    <p>Dindigul</p>
                  </div>
                </div>
                <div><DownloadPDF/></div>
              </div>
            </div>
            <div className="services">
              <div className="services-contain">
                <div className="icon">
                  <div className="icon-i">
                    <IoIosBulb size={56} color="#ffff" />
                  </div>
                </div>
                <div className="services-text">
                  <h1>Creative</h1>
                  <p>
                    I am good at finding and fixing bugs. I enjoy solving
                    problems and making sure everything works smoothly. My
                    creative thinking helps me come up with solutions to fix
                    issues quickly and effectively.
                  </p>
                </div>
              </div>
              <div className="services-contain">
                <div className="icon">
                  <div className="icon-i">
                    <IoIosTrophy size={56} color="#ffff" />
                  </div>
                </div>
                <div className="services-text">
                  <h1>Winner</h1>
                  <p>
                    I have won several competitive programs at my office, which
                    highlights my ability to perform well under pressure. These
                    achievements demonstrate my skills, dedication, and
                    problem-solving abilities.
                  </p>
                </div>
              </div>
              <div className="services-contain">
                <div className="icon">
                  <div className="icon-i">
                    <IoIosGlasses size={56} color="#ffff" />
                  </div>
                </div>
                <div className="services-text">
                  <h1>Smart</h1>
                  <p>
                    I have the ability to analyze projects smartly and find the
                    best ways to work efficiently. I focus on writing clean,
                    optimized code to improve performance and maintainability.
                  </p>
                </div>
              </div>
              <div className="services-contain">
                <div className="icon">
                  <div className="icon-i">
                    <IoIosBluetooth size={56} color="#ffff" />
                  </div>
                </div>
                <div className="services-text">
                  <h1>Powerful</h1>
                  <p>
                    I am confident in handling projects with a strong focus on
                    security. I ensure that every part of the development
                    process follows best practices to keep data safe and the
                    system protected.
                  </p>
                </div>
              </div>
              <div className="services-contain">
                <div className="icon">
                  <div className="icon-i">
                    <IoIosHelpBuoy size={56} color="#ffff" />
                  </div>
                </div>
                <div className="services-text">
                  <h1>Helper</h1>
                  <p>
                    I work well with team members and always offer help when
                    needed. I believe in good coordination and clear
                    communication to keep the team united and the project on
                    track.
                  </p>
                </div>
              </div>
              <div className="services-contain">
                <div className="icon">
                  <div className="icon-i">
                    <IoMdHappy size={56} color="#ffff" />
                  </div>
                </div>
                <div className="services-text">
                  <h1>Intelligent</h1>
                  <p>
                    I handle projects with intelligence and a strong focus on
                    security. I make smart decisions during development to
                    ensure the code is efficient, reliable, and well-protected.
                  </p>
                </div>
              </div>
              <div className="services-contain">
                <div className="icon">
                  <div className="icon-i">
                    <IoIosFootball size={56} color="#ffff" />
                  </div>
                </div>
                <div className="services-text">
                  <h1>Gamer</h1>
                  <p>
                    Along with my technical skills, I’m also active in games and
                    sports like football, cricket, and more. Being involved in
                    these activities helps me stay energetic, focused, and work
                    better in a team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
