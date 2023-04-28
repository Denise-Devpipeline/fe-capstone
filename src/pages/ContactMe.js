import React, { useState } from "react";

export default function ContactMe() {
  return (
    <div>
      <Contact />
    </div>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailAlert, setEmailAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name !== "" && email !== "" && message !== "") {
      setEmailAlert(true);
    } else {
      setEmailAlert(false);
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setEmailAlert(false);
  };

  return (
    <div className="contact-form-container">
      {emailAlert && <div>Your email has been sent!</div>}
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} on Reset={handleReset}>
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
