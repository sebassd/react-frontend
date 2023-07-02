import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import SmallRoomsGrid from '../components/SmallRoomsGrid';
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Hotel</h1>
          <h2>Experience Luxury and Comfort</h2>
          <div className="hero-buttons">
            <button onClick={() => navigate('/rooms')}>Get a room</button>
            <button onClick={() => navigate('/contact')}>Contact us</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/image-1.jpg" alt="" width={500} />
        </div>
      </div>

      <SmallRoomsGrid />

      <div className="about-container">
        <h2>About us</h2>
        <p>
          Welcome to our hotel, where luxury meets comfort. We take pride in
          providing exceptional hospitality and ensuring our guests have a
          memorable experience during their stay.
        </p>
        <p>
          With our prime location in the heart of the city, we offer convenience
          and easy access to popular attractions, shopping centers, and dining
          establishments.
        </p>
        <p>
          Our dedicated team of professionals is committed to delivering
          top-notch service and personalized attention to every guest. From our
          well-appointed rooms to our state-of-the-art facilities, we strive to
          create a welcoming and relaxing environment for all visitors.
        </p>
        <p>
          Whether you are traveling for business or leisure, our hotel offers a
          range of amenities, including complimentary Wi-Fi, a fitness center,
          spa services, and exquisite dining options. We cater to the unique
          needs and preferences of each guest to ensure a delightful and
          comfortable stay.
        </p>
        <p>
          We look forward to hosting you at our hotel and making your visit
          truly exceptional. Come and experience the perfect blend of luxury,
          comfort, and warm hospitality at our establishment.
        </p>
      </div>
    </>
  );
};

export default Home;
