import React from "react";
import { TiDeviceDesktop } from "react-icons/ti";
import "../App.css";

function ServiceItem1() {
  return (
    <div className="services__box">
      <TiDeviceDesktop className="common-icons" />
      <div className="services__box-header">Web desgin</div>
      <div className="services__box-p">
        i do ui/ux desgin for the website that helps website to get unique look
      </div>
    </div>
  );
}

export default ServiceItem1;
