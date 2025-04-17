import React from "react";
import pdfFile from "../assets/Anand_CV_Resume.pdf"; // adjust path based on your file location
import down from "../assets/download-removebg-preview.png"

const DownloadPDF = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "Ananth.pdf"; // set your desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{paddingBlock:"2rem"}}>
      <button
        onClick={handleDownload}
        style={{
          padding: "10px 20px",
          backgroundColor: "#b7a389",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap:"1rem"
        }}
      >
         Download Resume<img src={down} alt="downLoad" className="download_logo" /> 
      </button>
    </div>
  );
};

export default DownloadPDF;
