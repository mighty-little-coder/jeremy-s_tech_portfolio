import React from "react";

export default function Contact() {
  return (
    <div className="contact-content">
      <h1>Connect with Me!</h1>
      <p>Feel free to fill out the form below to connect with me, or connect with me on LinkedIn or GitHub.</p>
      <form>
        <div className="form_group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form_group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form_group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="4" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>You can also email me at: <a href="mailto:jeremy.doran.95@gmail.com?Subject=Connection Opportunity!">jeremy.doran.95@gmail.com</a></p>
    </div>
  );
}