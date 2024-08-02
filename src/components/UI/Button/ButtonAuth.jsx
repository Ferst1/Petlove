
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../../../styles/ButtonAuth.scss';

const ButtonAuth = ({ text, to, className, onClick }) => {
  return (
    <NavLink to={to} className={`button-auth ${className}`} onClick={onClick}>
      {text}
    </NavLink>
  );
};

ButtonAuth.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonAuth.defaultProps = {
  className: '',
  onClick: null,
};

export default ButtonAuth;
