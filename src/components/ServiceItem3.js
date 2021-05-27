import React from "react";
import { FaJava } from "react-icons/fa";
import "../App.css";

const ServiceItem3 = () => {
  return (
    <div className="services__box">
      <FaJava className="common-icons" />
      <div className="services__box-header">App Dev</div>
      <div className="services__box-p">
        I develop mobile application i create mobile App with react Native
      </div>
    </div>
  );
};

export default ServiceItem3;
