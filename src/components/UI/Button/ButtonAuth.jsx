
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../../../styles/ButtonAuth.scss';

const ButtonAuth = ({ text, to, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button className={`button_auth ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
};

ButtonAuth.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ButtonAuth;
