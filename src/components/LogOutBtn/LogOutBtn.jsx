// components/LogOutBtn/LogOutBtn.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/userSlice';
import '../../styles/LogOutBtn.scss';

const LogOutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogOutBtn;
