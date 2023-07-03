import React, { useState } from 'react';
import './ReserveForm.css';
const ReserveForm = ({ room, closeForm }) => {
  const { id, building, floor, services, price, status, roomNumber } = room;

  const initialData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    in: '',
    out: '',
    building,
    floor,
    price,
    roomNumber,
    id,
  };

  console.log(room);

  const [contact, setContact] = useState(initialData);

  function handleOnChange(e) {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch('https://backend-react-p4nf.onrender.com/api/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
      })
      .then((data) => {
        closeForm();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="reserve-container">
      <div className="reserve-inner-container">
        <div className="reserve-information">
          <p>Building: {building}</p>
          <p>Floor: {floor}</p>
          <p>Room #: {roomNumber}</p>
          <p>Services:</p>

          <ul className="services-list">
            {services.map((service, index) => {
              return <li key={index}>{service}</li>;
            })}
          </ul>
          <p>Price: {price}</p>
          <p>Status: {status}</p>
        </div>
        <form onSubmit={handleSubmit}>
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
          <label>In</label>
          <input
            type="date"
            name="in"
            value={contact.in}
            onChange={handleOnChange}
          />
          <label>Out</label>
          <input
            type="date"
            name="out"
            value={contact.out}
            onChange={handleOnChange}
          />
          <div className="reserve-inner-container-btn">
            <button onClick={() => closeForm()} type="submit">
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReserveForm;
