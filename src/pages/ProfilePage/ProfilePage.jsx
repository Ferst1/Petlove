import React from 'react';
import { useDispatch } from 'react-redux';
import UserCard from '../../components/UserCard/UserCard';
import MyNotices from '../../components/MyNotices/MyNotices';
import '../../styles/ProfilePage.scss';
import ButtonAuth from '../../components/UI/Button/ButtonAuth';
import { logout } from '../../redux/slices/userSlice';

const ProfilePage = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="profile-page">
    <div className="user-card">
    
      <UserCard />
      
      <ButtonAuth text="Logout" to="#" className="logout-btn" onClick={handleLogout} />
    </div>
    <MyNotices />
    </div>
  );
};

export default ProfilePage;
