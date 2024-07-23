

import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/UserBar.scss';
import Avatar from "/images/avatar.png"; 
import { NavLink } from 'react-router-dom';
import ButtonAuth from '../UI/Button/ButtonAuth';

const UserBar = ({ avatar, name, onLogout }) => {
  return (
    <div className="user-bar">
      <NavLink to="/profile" className="user_info">
        <img src={avatar || Avatar} alt={`${name}'s avatar`} className="user-avatar" />
        <span className="user-name">{name}</span>
      </NavLink>
      <ButtonAuth text="Logout" to="#" className="logout" onClick={onLogout} />
    </div>
  );
};

UserBar.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

UserBar.defaultProps = {
  avatar: Avatar, 
}

export default UserBar;
