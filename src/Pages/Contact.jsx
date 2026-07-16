import React from "react";
import { MoveUpRight } from "lucide-react";
import avater from "../assets/avater7.jpg";
export default function Contact() {
  return (
    <div className="contactHeader">
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

      <form action="" method="get" className="contactForm">
        <label htmlFor="" className="contactLabel">
          What is your name
        </label>
        <div className="contactInput">
          <input type="text" placeholder="John Doe" />
        </div>

        <label htmlFor="" className="contactLabel">
          Your email address
        </label>
        <div className="contactInput">
          <input type="email" name="" id="" placeholder="hello@gmail.com" />
        </div>

        <label htmlFor="" className="contactLabel">
          Tell me about your project
        </label>
        <div className="contactTextarea">
          <textarea
            name=""
            id=""
            placeholder="What are you looking to build? Any specific feature or timeline "
          ></textarea>
        </div>
        <div className="contactButton">
          <button>start your project </button>
        </div>
      </form>
      <div className="contactDividerheader">
        <div className="contactDivider"></div>
        <div className="contactRespon">
          <span>I'll respond within 24-48 hours</span>
        </div>
      </div>
    </div>
  );
}
