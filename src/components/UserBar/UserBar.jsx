
import React, { useState } from 'react';
import '../../styles/UserBar.scss';
import Avatar from "/images/avatar.png";
import { NavLink } from 'react-router-dom';
import ButtonAuth from '../UI/Button/ButtonAuth';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/userSlice';
import ModalApproveAction from '../../components/ModalApproveAction/ModalApproveAction';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const UserBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="user-bar">
      <NavLink to="/profile" className="user_info">
        <img src={user?.avatar || Avatar} alt={`${user?.name}'s avatar`} className="user-avatar" />
        <span className="user-name">{user ? capitalizeFirstLetter(user.name) : ''}</span>
      </NavLink>
      <ButtonAuth text="Logout" to="#" className="logout" onClick={openModal} />
      <ModalApproveAction
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleLogout}
      />
    </div>
  );
};

export default UserBar;
