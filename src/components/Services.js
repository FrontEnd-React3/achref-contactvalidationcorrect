import React from "react";
import Serviceitem from "./ServiceItem1";
import Serviceitem2 from "./ServiceItem2";
import Serviceitem3 from "./ServiceItem3";
import Serviceitem4 from "./ServiceItem4";
import Serviceitem5 from "./Serviceitem5";
import Serviceitem6 from "./Serviceitem6";

const Services = () => {
  return (
    <div className="services">
      <div className="common">
        <h3 className="heading">SERVICES</h3>
        <div data-aos="flip-up">
          <h1 className="mainHeader">My Services</h1>
        </div>
        <div data-aos="zoom-in">
          <p className="mainContent">
            It is defined as the connections between language, images,
            characters, themes, or subjects depending on their similarities in
            language, genre, or discourse. This is seen when an author borrows
            and transforms a prior text, or when you read one text and you
            reference another.
          </p>
        </div>

        <div className="commenBorder"></div>
      </div>
      <div className="services__container">
        <Serviceitem />
        <Serviceitem2 />
        <Serviceitem3 />
        <Serviceitem4 />
        <Serviceitem5 />
        <Serviceitem6 />
      </div>
    </div>
  );
};

export default Services;
