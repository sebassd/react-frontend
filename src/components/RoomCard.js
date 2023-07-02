import React, { useState } from 'react';
import ReserveForm from './ReserveForm';
import './RoomCard.css';
const RoomCard = ({ room }) => {
  const { id, building, floor, services, price, status } = room;

  const [reserveRoom, setReserveRoom] = useState(false);
  function closeForm() {
    setReserveRoom(false);
  }
  return (
    <div className="container">
      <div className="reservation-form">
        {reserveRoom && <ReserveForm room={room} closeForm={closeForm} />}
      </div>
      <p className="status">
        {status === 'true' ? 'Available' : 'Unavailable'}
      </p>
      <img className="room-image" src="/image-2.jpg" alt="" width="250" />
      <div className="room-details">
        <p>Building: {building}</p>
        <p>Floor: {floor}</p>
        <ul className="services-list">
          {services.map((service, index) => {
            return <li key={index}>{service}</li>;
          })}
        </ul>
        <p className="price">${price}</p>
      </div>
      <button
        className="reserve-button"
        onClick={() => {
          setReserveRoom(!reserveRoom);
        }}
      >
        Reserve
      </button>
    </div>
  );
};

export default RoomCard;
