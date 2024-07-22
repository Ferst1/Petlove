import React from 'react';
import { useDispatch } from 'react-redux';
import UserCard from '../UserCard/UserCard';
import MyNotices from '../MyNotices/MyNotices';
import { logout } from '../../redux/slices/userSlice';
import '../../styles/ProfilePage.scss';
import ButtonAuth from '../UI/Button/ButtonAuth';

const ProfilePage = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="profile-page">
      <UserCard />
      <MyNotices />
      <ButtonAuth text="Logout" to="#" className="logout" onClick={handleLogout} />
    </div>
  );
};

export default ProfilePage;
