import React, { useContext, useRef, useState } from "react";
import Contact from "../Assets/AboutmePIC.png";
import emailjs from '@emailjs/browser';
import { DarkContext } from "../context/ThemeContext";

const ContactMe = () => {

  const {darkMode} = useContext(DarkContext)
  const [isMessageSent, setMessageSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_sqqqwbo', 'template_h3ihazn', form.current, 'MqeF1i118qwy3gyu1')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          setMessageSent(true)
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className={`contact-me`}>
      <div className={`contact-container  ${darkMode ? "darkTheme" : ""}`}>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="descr cm-title">Hey, Let's Connect!</div>
          <div className="contact-input">
            <input
              required
              name="name"
              autoComplete="off"
              type="text"
            />
            <label htmlFor="name">Name</label>
          </div>

          <div className="contact-input">
            <input
              required
              autoComplete="off"
              name="email"
              type="text"
            />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="contact-input">
            <input
              required
              autoComplete="off"
              name="message"
              type="textarea"
            />
            <label htmlFor="message">Message</label>
          </div>
          <button style={{ color: darkMode ? '#fff' : '#000' }} type="submit"> {isMessageSent ? "Message Sent ✔" : "Send Message →"}</button>
        </form>
        <div className="cm-img">
          <img src={Contact} alt="Contact" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
