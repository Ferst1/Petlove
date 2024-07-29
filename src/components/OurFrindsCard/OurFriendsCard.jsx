import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/OurFriendsCard.scss";


// import AOS from "aos";
// import "aos/dist/aos.css";

const OurFriendsPage = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await axios.get(
          "https://petlove.b.goit.study/api/friends"
        );
        setFriends(response.data);
      } catch (error) {
        console.error("Error fetching friends:", error);
      }
    };

    fetchFriends();
  }, []);

  
  const getWorkTime = (workDays) => {
    if (!workDays || workDays.length === 0) return "Day and night";

    // Проверяем, равно ли время для всех дней
    const firstDay = workDays[0];
    const isSameTime = workDays.every(
      (day) =>
        day.isOpen === firstDay.isOpen &&
        day.from === firstDay.from &&
        day.to === firstDay.to
    );

  
    if (isSameTime) {
      return firstDay.isOpen ? `${firstDay.from} - ${firstDay.to}` : "Closed";
    } else {
      return "Day and night";
    }
  };


  return (
    <div className="our-friends-card">
      <div className="friends-container">
        {friends.map((friend) => (
          <div
          
          data-aos="fade-up"
        data-aos-delay="300"key={friend._id} className="friend-card">
            <img
              data-aos="zoom-in"
              data-aos-once="true"
              src={friend.imageUrl}
              className="friend-img"
              alt={friend.name}
            />

            <div>
              <h3
                data-aos="zoom-out"
                data-aos-duration="600"
                data-ous-once="true"
              >
                {friend.title}
              </h3>
              <p>Email: {friend.email}</p>
              <p>Address: {friend.address}</p>
              <p data-aus="zoom-out">Phone: {friend.phone}</p>
            </div>

            <p data-aus="fade-up" className="work-time">
              {getWorkTime(friend.workDays)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFriendsPage;
