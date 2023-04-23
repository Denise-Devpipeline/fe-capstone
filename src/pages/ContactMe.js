import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push("/thank-you");
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message">Feedback Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default function ContactMe() {
  return (
    <div>
      <Contact />
    </div>
  );
}
