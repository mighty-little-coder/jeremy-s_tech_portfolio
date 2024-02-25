import React from "react";

export default function Contact() {
  return (
    <div className="contact-content">
      <h1>Contact Me</h1>
      <p>Feel free to fill out the form below to connect with me, or connect with me on LinkedIn or GitHub.</p>
        {/* <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required></input>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required></input>
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <input type="submit" value="Submit"></input>
        </form> */}
        <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="4" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>You can also email me at: <a href="mailto:you@example.com">you@example.com</a></p>
    </div>
  );
}