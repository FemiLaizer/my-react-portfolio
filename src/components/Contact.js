import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Message sent (simulation). You can integrate EmailJS next.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="pa4 bg-light-gray">
      <div className="mw6 center">
        <h2 className="f2 dark-blue tc mb4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-column">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="pa2 mb3 br2 b--light-gray"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="pa2 mb3 br2 b--light-gray"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="pa2 mb3 br2 b--light-gray"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-blue white b pv2 br2 grow pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
