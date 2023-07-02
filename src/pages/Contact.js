import React, { useState } from 'react';
import './Contact.css';
const Contact = () => {
  const initialData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  const [contact, setContact] = useState(initialData);

  function handleOnChange(e) {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(contact);
  }

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={contact.firstName}
          onChange={handleOnChange}
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={contact.lastName}
          onChange={handleOnChange}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleOnChange}
        />
        <br />
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={contact.phone}
          onChange={handleOnChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
