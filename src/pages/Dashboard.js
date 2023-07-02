import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EditCard from '../components/EditCard';
import AdminRoomCard from '../components/AdminRoomCard';
import './Dashboard.css';
import Bookings from '../components/Bookings';
const Dashboard = () => {
  const initialValues = {
    id: uuidv4(),
    building: '',
    floor: '',
    roomNumber: '',
    services: '',
    status: '',
    price: '',
  };
  const [currentTab, setCurrentTab] = useState(1);
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState(initialValues);

  useEffect(() => {
    getRooms();
  }, []);

  function getRooms() {
    fetch('http://localhost:3009/api/rooms')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json();
      })
      .then((data) => {
        setRooms(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNewRoom((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function submitRoom(e) {
    e.preventDefault();

    console.log(newRoom);
    fetch('http://localhost:3009/api/room', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRoom),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        setNewRoom(initialValues);
        getRooms();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteRoom(id) {
    console.log(id);
    fetch(`http://localhost:3009/api/room/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        getRooms();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="dashboard-main-container">
      <div className="admin-tabs">
        <button
          className={`${currentTab === 1 ? 'active' : ''}`}
          onClick={() => setCurrentTab(1)}
        >
          Bookings
        </button>
        <button
          className={`${currentTab === 2 ? 'active' : ''}`}
          onClick={() => setCurrentTab(2)}
        >
          Rooms
        </button>
      </div>
      <div>
        {currentTab === 1 && <Bookings />}
        {currentTab === 2 && (
          <div>
            <form onSubmit={submitRoom} className="room-form">
              <label className="form-label">Building</label>
              <input
                className="form-input"
                type="text"
                name="building"
                value={newRoom.building}
                onChange={handleChange}
              />
              <label className="form-label">Floor</label>
              <input
                className="form-input"
                type="text"
                name="floor"
                value={newRoom.floor}
                onChange={handleChange}
              />
              <label className="form-label">Room #</label>
              <input
                className="form-input"
                type="text"
                name="roomNumber"
                value={newRoom.roomNumber}
                onChange={handleChange}
              />
              <label className="form-label">Services</label>
              <input
                className="form-input"
                type="text"
                name="services"
                value={newRoom.services}
                onChange={handleChange}
              />
              <label className="form-label">Price</label>
              <input
                className="form-input"
                type="text"
                name="price"
                value={newRoom.price}
                onChange={handleChange}
              />
              <label className="form-label">Is Available?</label>
              <label className="form-radio-label">
                <input
                  className="form-radio-input"
                  type="radio"
                  name="status"
                  value="true"
                  checked={newRoom.status === 'true'}
                  onChange={handleChange}
                />
                True
              </label>
              <br />
              <label className="form-radio-label">
                <input
                  className="form-radio-input"
                  type="radio"
                  name="status"
                  value="false"
                  checked={newRoom.status === 'false'}
                  onChange={handleChange}
                />
                False
              </label>
              <button className="form-submit" type="submit">
                Add New
              </button>
            </form>

            <div className="admin-room-grid">
              {rooms.map((room, index) => {
                return (
                  <AdminRoomCard
                    key={index}
                    room={room}
                    deleteRoom={deleteRoom}
                    getRooms={getRooms}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
