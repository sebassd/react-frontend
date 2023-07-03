import React, { useState, useEffect } from 'react';
import './Bookings.css';
const Bookings = () => {
  const [bookings, setBookings] = useState({});

  useEffect(() => {
    getBookings();
  }, []);

  function getBookings() {
    fetch('https://backend-react-p4nf.onrender.com/api/bookings')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json();
      })
      .then((data) => {
  
        setBookings(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Building</th>
            <th>Room #</th>
            <th>Price</th>
            <th>In</th>
            <th>Out</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(bookings).map((booking, index) => (
            <tr key={index}>
              <td>{booking.firstName}</td>
              <td>{booking.lastName}</td>
              <td>{booking.building}</td>
              <td>{booking.roomNumber}</td>
              <td>${booking.price}</td>
              <td>{booking.in}</td>
              <td>{booking.out}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
