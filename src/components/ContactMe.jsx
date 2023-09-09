import React, { useState } from "react";
import Contact from "../Assets/AboutmePIC.png";

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className="contact-me">
      <div className="contact-container">
        <form className="form">
          <div className="descr cm-title">Hey, Let's Connect!</div>
          <div className="contact-input">
            <input
              required
              autoComplete="off"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name">Name</label>
          </div>

          <div className="contact-input">
            <input
              required
              autoComplete="off"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="contact-input">
            <input
              required
              autoComplete="off"
              name="message"
              type="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message">Message</label>
          </div>
          <button>Send Message →</button>
        </form>
      </div>
      <div className="cm-img">
        <img src={Contact} alt="Contact" />
      </div>
    </div>
  );
};

export default ContactMe;
