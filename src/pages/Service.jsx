import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import "../styles/about.css";
import "../styles/service.css";
import Testimonials from "../component/Slider";
import html from "../assets/html-js-css-icon-style-vector-removebg-preview.png";
import backend from "../assets/node-removebg-preview.png";
const steps = [
  {
    step: "01",
    title: "Planning",
    description:
      "We start by understanding what you need, what the project should achieve, and who it's for. This includes goal setting, requirement gathering, and defining the overall direction.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Once the plan is clear, we design the layout and user interface. This involves creating wireframes, mockups, and making sure the experience is smooth and easy to use.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "With approved designs, we begin coding the application. Frontend and backend are built using modern technologies, and all features are developed to match the plan.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "After testing and final checks, the project is deployed. We make sure everything works perfectly in the live environment, and you're ready to go live with confidence.",
  },
];

export default function Service() {
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
        <div className="main-page-text-contain"></div>
        <div className="service-content">
          <h1>My Services</h1>
          <div class="divider-draft center"></div>
          <p className="service-description">
            I provide high-quality services, and the ones I offer are listed
            below. I hope you find them valuable and appealing.{" "}
          </p>
          <div className="services">
            <div className="services-contain">
              <div className="icon">
                <img src={html} alt="service" />
              </div>
              <div className="services-text">
                <h1>Front End</h1>
                <p>
                  I offer frontend development services using the latest
                  technologies like React.js, Vite, and Tailwind CSS to build
                  fast, efficient, and fully responsive user interfaces.
                </p>
              </div>
            </div>
            <div className="services-contain">
              <div className="icon">
                <img src={backend} alt="service" />
              </div>
              <div className="services-text">
                <h1>Back End</h1>
                <p>
                  On the backend, I specialize in building robust server-side
                  applications using Node.js and the Express.js framework. I
                  focus on writing clean, modular code that ensures high
                  performance, security, and scalability.
                </p>
              </div>
            </div>
            <div className="services-contain">
              <div className="icon">
                <img
                  src="https://icons.veryicon.com/png/o/miscellaneous/streamline/database-39.png"
                  alt="service"
                />
              </div>
              <div className="services-text">
                <h1>DB Management</h1>
                <p>
                  I have hands-on experience with handling various databases,
                  including MongoDB, SQL, and PostgreSQL. I design and implement
                  efficient data models, perform complex queries, and optimize
                  database performance.
                </p>
              </div>
            </div>
            <div className="services-contain">
              <div className="icon">
                <img
                  src="https://static-00.iconduck.com/assets.00/redux-icon-256x246-7a0flk71.png"
                  alt="service"
                />
              </div>
              <div className="services-text">
                <h1>Redux</h1>
                <p>
                  I have extensive experience using various tools to enhance
                  state management in my applications, such as Redux Toolkit.
                  With Redux Toolkit, I efficiently manage global state in React
                  applications, making data flow more predictable and easy to
                  debug.
                </p>
              </div>
            </div>
            <div className="services-contain">
              <div className="icon">
                <img
                  src="https://icons.veryicon.com/png/o/system/dan_system/manager-1.png"
                  alt="service"
                />
              </div>
              <div className="services-text">
                <h1>Team Leader</h1>
                <p>
                  In my previous role, I worked closely with my team as a
                  leader, guiding and motivating them to meet project goals. I
                  coordinated tasks, ensured effective communication, and
                  fostered a collaborative environment to achieve the best
                  results
                </p>
              </div>
            </div>
            <div className="services-contain">
              <div className="icon">
                <img
                  src="https://static.thenounproject.com/png/4199145-200.png"
                  alt="service"
                />
              </div>
              <div className="services-text">
                <h1>Version Control</h1>
                <p>
                  I offer version control services using Git to efficiently
                  manage and track code changes. With Git, I ensure smooth
                  collaboration within development teams, enabling efficient
                  code merging, conflict resolution, and maintaining clean code
                  history.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="skill-content">
          <h1>Work Progress</h1>
          <div class="divider-draft center"></div>
          <div className="steps-container">
            {steps.map((item, index) => (
              <div className="step-content" key={index}>
                <div className="step-wrapper">
                  <div className="step-diamond">
                    <span>{item.step}</span>
                  </div>
                  {index !== steps.length - 1 && (
                    <>
                      <div className="step-line" />
                      <div className="step-arrow" />
                    </>
                  )}
                </div>
                <div className="step-text">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="testimoni-content">
          <h1>Testimonials</h1>
          <div class="divider-draft center"></div>
          <Testimonials />
        </div>
      </div>
      <Footer />
    </div>
  );
}
