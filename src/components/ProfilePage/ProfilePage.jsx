import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserCard from '../../components/UserCard/UserCard';
import MyNotices from '../../components/MyNotices/MyNotices';
import '../../styles/ProfilePage.scss';
import ButtonAuth from '../../components/UI/Button/ButtonAuth';
import { logout } from '../../redux/slices/userSlice';
import ModalApproveAction from '../../components/ModalApproveAction/ModalApproveAction'; 

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const openModal = () => {
    console.log("Opening ModalApproveAction"); 
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="profile-page">
      <div className="user-card">
        <UserCard />
        <ButtonAuth text="Logout" to="#" className="logout-btn" onClick={openModal} />
      </div>
      <MyNotices />
      <ModalApproveAction
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleLogout}
      />
    </div>
  );
};

export default ProfilePage;
