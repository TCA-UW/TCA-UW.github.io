import React, { useState } from "react";
import "../css/Contact.css";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true);

    const templateParams = {
      name: form.name,
      email: form.email,
      company: form.company,
      message: form.message
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", company: "", message: "" });
        setIsSending(false);
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        alert("Failed to send message. Please try again.");
        setIsSending(false);
      });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company (Optional)"
          value={form.company}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
