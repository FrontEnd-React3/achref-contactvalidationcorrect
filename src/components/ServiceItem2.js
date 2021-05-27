import React from "react";
import { SiDevDotTo } from "react-icons/si";

function ServiceItem2() {
  return (
    <div className="services__box">
      <SiDevDotTo className="common-icons" />
      <div className="services__box-header">web dev</div>
      <div className="services__box-p">
        I also develop the websites . I create high performance website with
        blazing fast speed
      </div>
    </div>
  );
}

export default ServiceItem2;
