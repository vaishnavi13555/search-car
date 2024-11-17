import React, { useState } from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Create a CSV string
    const csvData = [
      ["Name", "Email", "Subject", "Message"], // Header
      [name, email, subject, message], // Row data
    ].map((row) => row.join(",")).join("\n");

    // Create a Blob from the CSV string
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "contact_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up after download

    // Clear form fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <section className="contact mb">
        <Back name="Contact Us" title="Get Helps & Friendly Support" cover={img} />
        <div className="container">
          <form className="shadow" onSubmit={handleSubmit}>
            <h4>Fill up The Form</h4> <br />
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
