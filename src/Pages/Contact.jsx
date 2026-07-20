import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    discribtion: "",
  });

  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = {};

    if (formData.userName.trim() === "") {
      newError.userName = "Please Enter Your Name";
    } else if (formData.email.trim() === "") {
      newError.email = "Please Enter valid Email Address";
    } else if (formData.discribtion.trim() === "") {
      newError.discribtion = "Message should not be empty";
    }

    setError(newError);

    if (Object.keys(newError).length > 0) {
      document.getElementById("error")?.scrollIntoView({
        behavior: "smooth",
      });
      return;
    }

    emailjs
      .send(
        "service_bmd8tjo",
        "template_gfgbq1s",
        {
          user_name: formData.userName,
          user_email: formData.email,
          message: formData.discribtion,
        },
        {
          publicKey: "oPGUkVQ4Lhn57aQ-o",
        },
      )
      .then(() => {
        alert("Message sent successfully 🚀");

        setFormData({
          userName: "",
          email: "",
          discribtion: "",
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong ❌");
      });
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

        <div>
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

        <form onSubmit={handleSubmit} className="contactForm">
          <label className="contactLabel">What is your name</label>

          <div className="contactInput">
            <input
              type="text"
              name="user_name"
              placeholder="John Doe"
              value={formData.userName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  userName: e.target.value,
                })
              }
            />
          </div>

          <label className="contactLabel">Your email address</label>

          <div className="contactInput">
            <input
              type="email"
              name="user_email"
              value={formData.email}
              placeholder="hello@gmail.com"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />
          </div>

          <label className="contactLabel">Tell me about your project</label>

          <div className="contactTextarea">
            <textarea
              name="message"
              value={formData.discribtion}
              placeholder="What are you looking to build? Any specific feature or timeline"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  discribtion: e.target.value,
                })
              }
            ></textarea>
          </div>

          <div className="contactButton">
            <button type="submit">start your project</button>
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
