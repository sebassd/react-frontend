import React, { useState, useEffect } from 'react';
import RoomCard from './RoomCard';

import './LargeRoomsGrid.css';
const LargeRoomsGrid = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getRooms();
  }, []);

  function getRooms() {
    fetch('https://backend-react-p4nf.onrender.com/api/rooms')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setRooms(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <h2 className="rooms-h2">Explore our selection of rooms</h2>
      <div className="room-grid-container">
        {rooms.map((item, index) => (
          <RoomCard key={index} room={item} />
        ))}
      </div>
      <div className="rooms-btn"></div>
    </>
  );
};

export default LargeRoomsGrid;
