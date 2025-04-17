import Main from "./component/Main";
import './App.css'
import {Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Hireme from "./pages/Hireme";


export default function App() {
  return (
    <>

      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/service" element={<Service />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/hire" element={<Hireme />} />
      </Routes>
    </>
  );
}