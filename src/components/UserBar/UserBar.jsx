

import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/UserBar.scss';
import Avatar from "/images/avatar.png"; 
import { NavLink } from 'react-router-dom';
import ButtonAuth from '../UI/Button/ButtonAuth';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/userSlice';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const UserBar = ({ avatar, name }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="user-bar">
      <NavLink to="/profile" className="user_info">
        <img src={avatar || Avatar} alt={`${name}'s avatar`} className="user-avatar" />
        <span className="user-name">{capitalizeFirstLetter(name)}</span>
      </NavLink>
      <ButtonAuth text="Logout" to="#" className="logout" onClick={handleLogout} />
    </div>
  );
};

UserBar.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

UserBar.defaultProps = {
  avatar: Avatar, 
}

export default UserBar;
