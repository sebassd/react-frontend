import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RoomCard from './RoomCard';
import './SmallRoomsGrid.css';

const SmallRoomsGrid = () => {
  const navigate = useNavigate();
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

  const firstFourRooms = rooms.slice(0, 3);

  return (
    <div>
      <h2 className="rooms-h2">Explore our selection of rooms</h2>

      <div className="room-grid-container">
        {firstFourRooms.map((item, index) => (
          <RoomCard key={index} room={item} />
        ))}
      </div>
      <div className="rooms-btn">
        <button onClick={() => navigate('/rooms')}>All Rooms</button>
      </div>
    </div>
  );
};

export default SmallRoomsGrid;
