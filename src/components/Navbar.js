import React from "react";
import Aos from "aos";
import react, { useEffect } from "react";

const Testnavbar = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-bleu">
      <div data-aos="zoom-out-up">
        <div className="img-navbar">
          <img src="/image/ACHREF.png" alt="" />
        </div>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto " id="Nav-ul">
          <div data-aos="flip-right">
            <li className="nav-item active ">
              <a className="nav-link navWhite " href="#">
                Home <span className="sr-only ">(current)</span>
              </a>
            </li>
          </div>
          <div data-aos="flip-right">
            <li className="nav-item">
              <a className="nav-link navWhite" href="#">
                About me
              </a>
            </li>
          </div>
          <div data-aos="flip-right">
            <div data-aos="flip-up">
              <li className="nav-item">
                <a className="nav-link navWhite" href="#">
                  my Services
                </a>
              </li>
            </div>
          </div>
          <div data-aos="flip-right">
            <li className="nav-item">
              <a className="nav-link navWhite" href="#">
                Skills
              </a>
            </li>
          </div>
          <div data-aos="flip-right">
            <li className="nav-item">
              <a className="nav-link navWhite" href="#">
                Contact me
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Testnavbar;
