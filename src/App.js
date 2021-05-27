import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Service from "./components/Services";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import "aos/dist/aos.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typical from "react-typical";

function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Service />
      <About />
      <Prices />
      <Contact />
    </div>
  );
}

export default App;
