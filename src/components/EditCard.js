import React, { useState } from 'react';
import './EditCard.css';

const EditCard = ({ id, status, price, editRoom, getRooms }) => {
  const [newRoom, setNewRoom] = useState({
    status: status,
    price: price,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    const parsedValue = name === 'status' ? value === 'true' : value;
    setNewRoom((prevRoom) => ({
      ...prevRoom,
      [name]: parsedValue,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify(newRoom));

    fetch(`https://backend-react-p4nf.onrender.com/api/room/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRoom),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json();
      })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        editRoom();
        getRooms();
      });
  }

  return (
    <div className="edit-card-container">
      <div className="edit-card-inner-container">
        <label className="form-label">Is Available?</label>
        <div className="edit-card-radios">
          <label className="form-radio-label">
            <input
              className="form-radio-input"
              type="radio"
              name="status"
              value="true"
              checked={newRoom.status === true}
              onChange={handleChange}
            />
            True
          </label>

          <label className="form-radio-label">
            <input
              className="form-radio-input"
              type="radio"
              name="status"
              value="false"
              checked={newRoom.status === false}
              onChange={handleChange}
            />
            False
          </label>
        </div>

        <label className="form-label">Price</label>
        <input
          className="edit-input"
          type="text"
          name="price"
          value={newRoom.price}
          onChange={handleChange}
        />

        <div className="edit-button-btns">
          <button onClick={onSubmit}>Submit</button>
          <button onClick={editRoom}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditCard;
