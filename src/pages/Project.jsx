import { useState } from "react";
import Footer from "../component/Footer";
import "../styles/project.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Learning Platform",
    description: [
      "Spearheaded the development of a React.js-based learning platform managing a myriad of complex components and interactive features.",
      "Collaborated with UX/UI designers to implement responsive and intuitive interfaces, resulting in a 20% increase in user engagement.",
      "Resolved performance bottlenecks through optimized React components,leading to a 15% improvement in website load times.",
      "Video Purchase and Security Integration Successfully integrated Razorpay payment gateway for seamless and secure video purchases, enhancing the ecommerce capabilities of the learning platform. Implemented robust security measures to restrict unauthorized video recording, safeguarding proprietary content. Devised and integrated anti-scam mechanisms,preventing fraudulent activities and ensuring a trustworthy user environment.",
    ],
    image:
      "https://elearningindustry.com/wp-content/uploads/2021/08/Top-5-Benefits-Of-eLearning-Education.png",
    duration: "6 months",
  },
  {
    id: 2,
    title: "IHAF Political Website",
    description: [
      "Creating an introductory section for a political website is crucial for  engaging visitors and conveying the purpose, mission, and key features of  the website.",
      "Implement a user registration and login system using react authentication mechanisms or third-party libraries like Firebase Authentication. Allow users to sign up, log in, and manage their profiles.",
      "Integrating YouTube, Instagram, and Twitter feeds directly into our political website can enhance engagement, provide dynamic content, and allow  visitors to interact with our social media channels without leaving our site.",
      " Adding phone number verification to your political website can enhance security, prevent spam registrations, and ensure that users provide valid contact information.",
    ],
    image:
      "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/dc-Cover-que6m8tnkvb3e9s3nhfe877pl1-20191027013948_20220617181332.Medi_",
    duration: "4 months",
  },
  {
    id: 3,
    title: "AI Chatbot",
    description: [
      "Developed an AI chatbot using React.js and Node.js, enhancing user engagement and support.",
      "Integrated with third-party APIs for real-time data retrieval and processing.",
      "Implemented natural language processing (NLP) features to improve user interaction.",
      "Created user friendly Chatbot for a Learning Website with the inspiration of latest AI Technology which is used in ChatGptDeveloping",
    ],
    image: "https://blog.usablenet.com/hubfs/AI%20Chatbot%20Blog.png",
    duration: "2 months",
  },
  {
    id: 4,
    title: "NFT Dashboard",
    description: [
      "User-Friendly Interface: Creating an intuitive and visually appealing user interface that allows users to easily navigate and understand the dashboard.",
      "Comprehensive Monitoring: Providing detailed insights and analytics on NFT performance, maintenance history, and other relevant metrics.",
      "Alerts and Notifications: Implementing automated alerts and notifications for critical events, such as maintenance updates,issues, or anomalies.",
      "Customization: Allowing users to customize the dashboard layout, display preferences, and set personalized alerts or filters.",
      "Integration with External Services: Seamless integration with blockchain platforms, smart contracts, or other external services to fetch and update NFT data",
    ],
    image:
      "https://public.bnbstatic.com/static/academy/uploads/713b95b5c3e942098f007729ba4a231b.png",
    duration: "3 months",
  },
  {
    id: 5,
    title: "Token Bridge",
    description: [
      "Spearheaded the integration of Metamask wallet connectivity to our web platform, enabling seamless interaction with the Wagmi protocol.",
      "Collaborated with blockchain developers to ensure secure and reliable transaction processing. Implemented secure transaction processing through the integration of Wagmi, ensuring a reliable and decentralized experience for users",
      "Video Purchase and Security Integration Successfully integrated Razorpay payment gateway for seamless and secure video purchases, enhancing the ecommerce capabilities of the learning platform. ",
      "Implemented robust security measures to restrict unauthorized video recording, safeguarding proprietary content. Devised and integrated anti-scam mechanisms, preventing fraudulent activities and ensuring a trustworthy user environment.",
    ],
    image: "https://miro.medium.com/max/1400/0*3Nx4CGd9g3AZN3CX",
    duration: "3 months",
  },
  {
    id: 6,
    title: "School Admin Dashboard",
    description: [
      "Developed a comprehensive school administration dashboard that enables the creation and management of schools, teachers, and students with full CRUD operations.",
      "The system allows administrators to assign subjects and syllabuses to both teachers and students, ensuring structured academic planning.",
      "Additionally, tasks and guidance can be assigned to teachers to streamline student support and progress tracking.",
      "The dashboard enhances administrative efficiency and promotes better collaboration between staff and students.",
    ],
    image: "https://schoolonnet.in/img/bh1.png",
    duration: "2 months",
  },
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  const fadeInUp = {
    hidden: { opacity: 0},
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.6,
        duration: 1,
        ease:[0.25, 0.1, 0.25, 1],
      },
    }),
  };

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
      <div className="main-page-container">
        <div className="resume-content">
          <h1>My Projects</h1>
          <div class="divider-draft center"></div>
          <div className="project-list">
              {projects.map((project,index) => (
                 <motion.div
                 className="project-contain"
                 key={index}
                 custom={index}
                 variants={fadeInUp}
                 initial="hidden"
                 animate="visible"
                 title={project.title}
               >
                <div
                  key={project.id}
                  className="project-contain"
                  onClick={() => handleOpen(project)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-text">
                    <h2>{project.title}</h2>
                    <p>{`Duration : ${project.duration}`}</p>
                  </div>
                
                </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
      {/* Popover */}
      {selectedProject && (
        <div className="popover">
          <div className="popover-content">
            <span className="close-btn" onClick={handleClose}>
              ×
            </span>
            <h2>{selectedProject.title}</h2>
            <ul>
              {selectedProject.description.map((item, index) => (
                <li key={index} className="des-list">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
