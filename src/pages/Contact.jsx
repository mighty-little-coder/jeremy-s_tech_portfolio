import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ADD CODE FOR FORM SUBMISSION LOGIC LATER ON FOR EMAIL API OR BACKEND EMAIL SERVICE
    console.log({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2500);
  };

  return (
    <div className="contact-content">
      <h1>Connect with Me!</h1>
      <p>Feel free to fill out the form below to connect with me, or connect with me on LinkedIn or GitHub.</p>
      <form onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form_group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form_group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="4"
            value={message}
            onChange={handleMessageChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>You can also email me at: <a href="mailto:jeremy.doran.95@gmail.com?Subject=Connection Opportunity!">jeremy.doran.95@gmail.com</a></p>
      {showMessage && (
        <div className="popup-message">
          <p>Message sent successfully!</p>
        </div>
      )}
    </div>
  );
}
