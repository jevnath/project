import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <h1>Ananth Mani</h1>
      </div>
      <div className="footer-socials">
       <div className="footer-socials-container">
       <a href="" target="_blank" rel="noopener noreferrer">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgFZUjkxLNm4ZbgM9SwxZIxlxfBIglZimiA&s" alt="GitHub" width={"25px"} height={"25px"}/>
       </a>
       </div>
       <div className="footer-socials-container">
       <a href="" target="_blank" rel="noopener noreferrer">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJvVA6elKgoutJwYQvBsEjAQRZ4P1l0kTsA&s" alt="GitHub" width={"25px"} height={"25px"}/>
       </a>
       </div>
      </div>
    </div>
  );
}
