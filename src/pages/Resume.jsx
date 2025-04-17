import React from "react";
import "../styles/resume.css";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import {
  IoIosBaseball,
  IoIosBook,
  IoIosBusiness,
  IoIosChatboxes,
  IoIosShuffle,
  IoIosTrain,
} from "react-icons/io";

const TimelineItem = ({ data, index }) => {
  const isOdd = index % 2 !== 0;

  const contentStyle = {
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
    borderRadius: "5px",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: isOdd ? "flex-end" : "flex-start",
    padding: "15px",
    position: "relative",
    width: "400px",
    maxWidth: "70%",
    left: isOdd ? "-27px" : "27px",
    textAlign: isOdd ? "right" : "left",
  };

  return (
    <div className="timeline-item">
      <div className="timeline-item-content" style={contentStyle}>
        <span className="tag" style={{ background: data.category.color }}>
          {data.category.tag}
        </span>
        <time>{data.date}</time>
        <p>{data.text}</p>
        <span className="circle" />
      </div>
    </div>
  );
};

const SeoProgressBar = ({ label, percent }) => {
  return (
    <div className="seo-bar-container">
      <div className="seo-bar-label">{label}</div>
      <div className="seo-bar">
        <div className="seo-bar-fill" style={{ width: `${percent}%` }}></div>
      </div>
      <div className="seo-bar-percentage">{percent}%</div>
    </div>
  );
};

const progressData = [
  { label: "HTML", percent: 80 },
  { label: "CSS", percent: 80 },
  { label: "JS", percent: 70 },
  { label: "REACT", percent: 75 },
  { label: "SQL", percent: 65 },
  { label: "REDUX", percent: 70 },
];

const timelineData = [
  {
    text: "Government College of Engineering, Salem.where I learned the core technical skills that helped start my career.",
    date: "Bachelor’s Degree in Engineering, 2016-2020",
    category: {
      tag: "Education",
      color: "#e8853f",
    },
  },
  { 
    text: " I worked as a supervisor at RMC in Thirunelveli for 6 months, managing tasks and overseeing operations.",
    date: "Supervisor – RMC, Thirunelveli, 2020-2021",
    category: {
      tag: "Experience",
      color: "#B7A389",
    },
  },
  {
    text: "I worked as an AC Technician in Chennai, handling installation, maintenance, and repair tasks.",
    date: "AC Technician – Chennai, 2021-2022",
    category: {
      tag: "Experience",
      color: "#B7A389",
    },
  },
  {
    text: "I worked for 1 year and 10 months as a Web Developer at Inocyx Technology, where I started my IT career and became a MERN stack developer.",
    date: "Web Developer – Inocyx Technology, Perungudi, 2022-2024",
    category: {
      tag: "Experience",
      color: "#B7A389",
    },
  },
  {
    text: "I joined Mayavaram Chit Funds Corporation as a Full Stack Developer in 2024 and am currently working there.",
    date: "Full Stack Developer – Mayavaram Chit Funds Corporation, 2024-Present",
    category: {
      tag: "Experience",
      color: "#B7A389",
    },
  },
];

export default function Resume() {
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
          <div className="resume-content">
            <h1>My Resume</h1>
            <div class="divider-draft center"></div>
            <>
              {timelineData.length > 0 && (
                <div className="timeline-container">
                  {timelineData.map((data, idx) => (
                    <TimelineItem data={data} index={idx} key={idx} />
                  ))}
                </div>
              )}
            </>
          </div>
          <div className="hobbie-content">
            <h1>My Hobbies</h1>
            <div class="divider-draft center"></div>
            <div className="hobbie-list">
              <div className="hobbie-contain">
                <div className="icon">
                  <div className="icon-i">
                    <IoIosBook size={56} color="#ffff" />
                  </div>
                </div>
                <p>Reading</p>
              </div>
              <div className="hobbie-contain">
                <div className="icon">
                  <div className="icon-i">
                    <IoIosChatboxes size={56} color="#ffff" />
                  </div>
                </div>
                <p>Chat</p>
              </div>
              <div className="hobbie-contain">
                <div className="icon">
                  <div className="icon-i">
                    <IoIosBaseball size={56} color="#ffff" />
                  </div>
                </div>
                <p>Foot ball</p>
              </div>
              <div className="hobbie-contain">
                <div className="icon">
                  <div className="icon-i">
                    <IoIosTrain size={56} color="#ffff" />
                  </div>
                </div>
                <p>Travel</p>
              </div>
              <div className="hobbie-contain">
                <div className="icon">
                  <div className="icon-i">
                    <IoIosBusiness size={56} color="#ffff" />
                  </div>
                </div>
                <p>Business</p>
              </div>
            </div>
          </div>
          <div className="skil-content">
            <h1>My Skills</h1>
            <div class="divider-draft center"></div>
            <div className="skil-list">
              {progressData.map((item, index) => (
                <SeoProgressBar
                  key={index}
                  label={item.label}
                  percent={item.percent}
                />
              ))}
            </div>
          </div>
          <div className="skil-content">
            <h1>Extra Skills</h1>
            <div class="divider-draft center"></div>
            <div className="my-flex-container">
              <p>
                <span className="icons">⭐</span>
                Cross-browser optimization
              </p>
              <p>
                <span className="icons">⭐</span>
                SEO
              </p>
              <p>
                <span className="icons">⭐</span>
                Accessibility
              </p>
              <p>
                <span className="icons">⭐</span>
                Performance tuning
              </p>
              <p>
                <span className="icons">⭐</span>
                Testing
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
