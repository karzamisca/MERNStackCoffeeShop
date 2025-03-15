// views/src/pages/Contact.jsx

import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file we'll create

function Contact() {
  // Directly embed the contact data instead of fetching from API
  const contact = {
    phone: "+123456789",
    email: "contact@kylongcoffee.com",
    address: "123 Coffee Street, Bean City, BC 90210",
    hours: {
      weekdays: "7:00 AM - 8:00 PM",
      weekends: "8:00 AM - 9:00 PM",
    },
    socialMedia: {
      instagram: "@kylongcoffee",
      facebook: "facebook.com/kylongcoffee",
      twitter: "@kylongcoffee",
    },
  };

  // State for contact form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p className="subtitle">We'd love to hear from you!</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-section">
            <h2>Reach Us</h2>
            <div className="info-item">
              <span className="info-label">Phone:</span>
              <span className="info-value">{contact.phone}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">{contact.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Address:</span>
              <span className="info-value">{contact.address}</span>
            </div>
          </div>

          <div className="info-section">
            <h2>Hours</h2>
            <div className="info-item">
              <span className="info-label">Weekdays:</span>
              <span className="info-value">{contact.hours.weekdays}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Weekends:</span>
              <span className="info-value">{contact.hours.weekends}</span>
            </div>
          </div>

          <div className="info-section">
            <h2>Follow Us</h2>
            <div className="social-media-links">
              <a href="#" className="social-link">
                Instagram: {contact.socialMedia.instagram}
              </a>
              <a href="#" className="social-link">
                Facebook: {contact.socialMedia.facebook}
              </a>
              <a href="#" className="social-link">
                Twitter: {contact.socialMedia.twitter}
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          {formSubmitted ? (
            <div className="form-success">
              <p>Thank you for your message! We'll get back to you soon.</p>
              <button onClick={() => setFormSubmitted(false)} className="btn">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="map-section">
        <h2>Find Us</h2>
        <div className="map-placeholder">
          {/* In a real application, you would integrate Google Maps or another mapping service */}
          <p>Map will be displayed here</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
