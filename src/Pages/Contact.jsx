import React, { useState } from "react";
import { MoveUpRight } from "lucide-react";
import avater from "../assets/avater7.jpg";
import { delay } from "framer-motion";
import { motion } from "framer-motion";
export default function Contact() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    discribtion: "",
  });

  const [error, SetError] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};

    if (formData.userName === "") {
      newError.userName = "Please  Enter Your Name";
    } else if (formData.email === "") {
      newError.email = "Please Enter valid Email Address";
    } else if (formData.discribtion === "") {
      newError.discribtion = "Message should be at least 10 characters. ";
    }

    SetError(newError);

    const element = document.getElementById("error");
    element.scrollIntoView({
      behavior: "smooth",
    });

    if (Object.keys(newError).length === 0) {
      navigate("");
    }
  };

  return (
    <div className="contactHead">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <h1>Contact</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="contactHeader"
      >
        <div className="borderHead">
          <div className="borderStyle"></div>
          <h1 className="borderH1">Let's Create Something</h1>
          <div className="borderStyle"></div>
        </div>
        <div className="">
          <h1 className="contactH1Font">Have a project in mind?</h1>
          <p className="contactPFont">
            Let's bring your ideas to life. Whether it's a website or a web app,
            I'd love to help.
          </p>
        </div>
        {Object.keys(error).length > 0 && (
          <div className="contactError" id="error">
            <h1>{Object.values(error)[0]}</h1>
          </div>
        )}
        <form action="" method="get" className="contactForm">
          <label htmlFor="" className="contactLabel">
            What is your name
          </label>
          <div className="contactInput">
            <input
              type="text"
              placeholder="John Doe"
              value={formData.userName}
              onChange={(e) => {
                const name = e.target.value;
                setFormData({ ...formData, userName: name });
              }}
            />
          </div>

          <label htmlFor="" className="contactLabel">
            Your email address
          </label>
          <div className="contactInput">
            <input
              type="email"
              value={formData.emailmail}
              placeholder="hello@gmail.com"
              onChange={(e) => {
                const email = e.target.value;
                setFormData({ ...formData, email: email });
              }}
            />
          </div>

          <label htmlFor="" className="contactLabel">
            Tell me about your project
          </label>
          <div className="contactTextarea">
            <textarea
              value={formData.discribtion}
              placeholder="What are you looking to build? Any specific feature or timeline "
              onChange={(e) => {
                const discrip = e.target.value;
                setFormData({ ...formData, discribtion: discrip });
              }}
            ></textarea>
          </div>
          <div className="contactButton" onClick={handleSubmit}>
            <button>start your project </button>
          </div>
        </form>
        <div className="contactDividerheader">
          <div className="contactDivider"></div>
          <div className="contactRespon">
            <span>I'll respond within 24-48 hours</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
