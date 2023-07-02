import React, { useState } from 'react';
import './AdminRoomCard.css';
import EditCard from './EditCard';
const AdminRoomCard = ({ room, deleteRoom, getRooms }) => {
  const { id, building, floor, services, price, status } = room;
  const [editing, setEditing] = useState(false);
  // async function editRoom() {
  //   try {
  //     await axios.patch(`http://localhost:3009/api/room/${id}`, item);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  function editRoom() {
    setEditing(!editing);
  }

  return (
    <div className="container">
      {editing && (
        <EditCard
          id={id}
          status={status}
          price={price}
          editRoom={editRoom}
          getRooms={getRooms}
        />
      )}
      <p className="status">
        {status === 'true' ? 'Available' : 'Unavailable'}
      </p>
      <img src="/image-2.jpg" alt="" width={250} />
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
      <div className="admin-rooms-card-btn">
        <button onClick={() => deleteRoom(id)}>delete</button>
        <button onClick={editRoom}>edit</button>
      </div>
    </div>
  );
};

export default AdminRoomCard;
