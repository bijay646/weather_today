import React from "react";
import CopyrightIcon from "../../assets/icons/CopyrightIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container mt-auto">
      <div className="d-flex align-items-center justify-content-center  my-5">
        <CopyrightIcon height={20} width={20} className="me-2" />
        {currentYear} Copyright by WeatherToday
      </div>
    </div>
  );
};

export default Footer;
