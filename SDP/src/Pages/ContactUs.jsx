import React, { useState } from 'react';
import './ContactUs.css';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    uname: '',
    uemail: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await axios.post('http://localhost:8182/feedback/add', formData);
      console.log(response.data);  

      
      setFormData({
        uname: '',
        uemail: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };
  return (
    <div className="contact-us-container">
      <h1 className="page-title">Contact Us</h1>
      <p className="contact-description">
        We'd love to hear from you! Get in touch with us using the contact details below.
      </p>

      <div className="contact-methods">
        <div className="contact-method">
          <EmailIcon className="contact-icon" />
          <p className="method-text">
            <strong>Email:</strong> contact@artisansalley.com
          </p>
        </div>
        <div className="contact-method">
          <PhoneIcon className="contact-icon" />
          <p className="method-text">
            <strong>Phone:</strong> +91 8667449744
          </p>
        </div>
        <div className="contact-method">
          <LocationOnIcon className="contact-icon" />
          <p className="method-text">
            <strong>Address:</strong> Kovaipudur, Kovaipudur Post, Coimbatore ,Coimbatore , Pincode:641042 
          </p>
        </div>
      </div>

      <div className="contact-form">
      <h2 className="form-title">Send Us a Message</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Your Name"
            className="form-input"
            name="uname"
            value={formData.uname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Your Email"
            className="form-input"
            name="uemail"
            value={formData.uemail}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Your Message"
            className="form-input form-textarea"
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;
