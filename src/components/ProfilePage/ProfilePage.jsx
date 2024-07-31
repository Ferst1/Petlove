
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserCard from '../../components/UserCard/UserCard';
import MyNotices from '../../components/MyNotices/MyNotices';
import '../../styles/ProfilePage.scss';
import ButtonAuth from '../../components/UI/Button/ButtonAuth';
import { logout } from '../../redux/slices/userSlice';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
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
