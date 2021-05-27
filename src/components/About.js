import React from "react";

const About = () => {
  const [state] = React.useState([
    { id: 1, title: "Name", text: "Achrefbenkadaa" },
    { id: 2, title: "Eamil", text: "benkadaachref@gmail.com" },
    { id: 3, title: "Phone", text: "068587999" },
    { id: 4, title: "Linkedin", text: "Achref__1920" },
  ]);
  return (
    <div className="about">
      <div className="common">
        <div data-aos="zoom-out-up">
          <h3 className="heading-1">About Me </h3>
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
      <div className="row h-650 alignCenter">
        <div className="col-6">
          <div data-aos="flip-right">
            <div className="about__img">
              <img src="/image/boll.png" alt="boll" />
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="about__info">
            <div data-aos="flip-right">
              <h1>Hi There</h1>
            </div>
            <div data-aos="flip-right">
              <div className="about__info-p1">
                I´ll find the hidden gems, and the natural gravity of the text.
                I can see where tweaking your structure can help you gain
                clarity in your writing, and what areas need more lines to read
                between
              </div>
            </div>
            <div data-aos="flip-right">
              <div className="about__info-p2">
                Of course, there’s always room for projects with strict
                deadlines, and I will treat any information you give me with
                strict confidentiality.
              </div>
            </div>
          </div>
          <div className="info__contacts">
            <div className="row">
              {state.map((info) => (
                <div className="col-6">
                  <strong>{info.title}</strong>
                  <p>{info.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
