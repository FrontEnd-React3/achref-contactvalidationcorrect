import React, { useState } from "react";
import { FaMailBulk } from "react-icons/fa";
import emailjs from "emailjs-com";
import "../App.css";



// const App = () => {
//   const [name, setName] = useState("");
//   const [company, setCompany] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

// const isEmail = () => {
//   let mail = document.getElementById("not-mail");
//   // let regex = /^[a-zA-Z09-._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   let regex = /[0-9a-zA-Z]+@[0-9a-zA-Z]+[\.]{1}[0-9a-zA-Z]+[\.]?[0-9a-zA-Z]+/g;
//   if (email.match(regex)) {
//     mail.style.display = "none";
//     return true;
//   } else {
//     mail.style.display = "block";
//     // mail.style.animation = "dongle 1s";
//     // setTimeout(() => {});
//     return false;
//   }
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (name && message) {
//     sendFeedback("template_l4rbsdr", {
//       name,
//       company,
//       phone,
//       email,
//       message,
//     });
//   } else {
//     console.log("error");
//   }
// };
function App() {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  const emailRegex = /[0-9a-zA-Z]+@[0-9a-zA-Z]+[\.]{1}[0-9a-zA-Z]+[\.]?[0-9a-zA-Z]+/g;

  const validateEmail = event => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage("Your email looks good!");




    } else {
      setIsValid(false);
      setMessage("Please enter a valid email!");
    }
  };
  function sendEmail(e) {
    e.preventDefault();
  if(isValid){
    emailjs
      .sendForm(
        "gmail",
        "template_KYeLN1ok",
        e.target,
        "user_BFbqsy2KIxiAGQL36TMLj"
      )
      .then(
        result => {
          console.log("rrrrr" + result.text);
          if (result.text === "OK") {
            document.getElementById("knop").innerHTML = "Merci!";
            document.getElementById("knop").style.background = "green";
          }
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
      }
  }
  return (
    <div data-aos="zoom-out-up">
      <form
        onSubmit={sendEmail}
        name="contact"
        method="post"
        className="contact-form"
      >
        <h2>Contact Me</h2>
        <div className="form-content">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name*"
            autoComplete="off"
            required
          />
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Subject*"
            required
          />

          <div className="email-content">
            <label id="not-mail">Email non valide</label>
            <input
              type="mail"
              id="email"
              name="email"
              onChange={validateEmail}
              placeholder="Email*"
              autoComplete="off"
              required
            />{" "}
            <div className={`message ${isValid ? "success" : "error"}`}>
              {message}
            </div>
          </div>
          <textarea required id="msg" name="message" placeholder="Message*" />
        </div>
        <button id="knop" className="button" type="submit">
          Envoyer
        </button>
        <div className="form-message"></div>
      </form>
    </div>
  );
}

export default App;
