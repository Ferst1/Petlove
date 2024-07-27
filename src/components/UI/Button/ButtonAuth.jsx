

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../../../styles/ButtonAuth.scss';


const ButtonAuth = ({ text, to, className, onClick }) => {
  return (
    <button className={`button-auth ${className}`} onClick={onClick}>
      {to ? <NavLink to={to}>{text}</NavLink> : text}
    </button>
  );
};

ButtonAuth.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonAuth.defaultProps = {
  to: null,
  className: '',
  onClick: null,
};

export default ButtonAuth;
