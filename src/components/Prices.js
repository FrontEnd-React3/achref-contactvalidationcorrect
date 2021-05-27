import React from "react";

const Prices = () => {
  const [state] = React.useState([
    {
      id: 1,
      heading: "Basic",
      price: "50,",
      mesg1: "5GB stroge space",
      mesg2: "5GB stroge space",
      mesg3: "5GB stroge space",
      mesg4: "5GB stroge space",
      mesg5: "5GB stroge space",
    },
    {
      id: 2,
      heading: "Test",
      price: "120,",
      mesg1: "5GB stroge space",
      mesg2: "5GB stroge space",
      mesg3: "5GB stroge space",
      mesg4: "5GB stroge space",
      mesg5: "5GB stroge space",
    },
    {
      id: 3,
      heading: "Test",
      price: "150,",
      mesg1: "5GB stroge space",
      mesg2: "5GB stroge space",
      mesg3: "5GB stroge space",
      mesg4: "5GB stroge space",
      mesg5: "5GB stroge space",
    },
  ]);
  return (
    <div className="prices-1">
      <div className="prices">
          <div className="common">
            <h3 className="heading">MADE WITH LOVE </h3>
            <h1 className="mainHeader">MY APPS</h1>
            <p className="mainContent">
              Looking for constant improvement I am proud to show you some of my apps. <br/>As I am in a constant learning curve believe in my ability to progress.
            </p>
            <div className="commenBorder"></div>
          </div>        <div className="pricescontainer">

          <div className="row">
            {state.map((prices) => (
              <div className="col-md-4 col-sm-6 col-xs-12" key={prices.id}>
                <div className="price">
                  <div className="priceHeding">£{prices.heading}</div>
                  <div className="price__rs">
                    <span>£</span>£{prices.price}
                  </div>
                  <ul>
                    <li>{prices.mesg1}</li>
                    <li>{prices.mesg2}</li>
                    <li>{prices.mesg3}</li>
                    <li>{prices.mesg4}</li>
                    <li>{prices.mesg5}</li>
                  </ul>
                  <div className="price__btn">
                    <a href="" className="btn btn-outline">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
