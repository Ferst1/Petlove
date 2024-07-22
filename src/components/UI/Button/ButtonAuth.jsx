import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/ButtonAuth.scss'; // Убедитесь, что путь к стилям правильный

const ButtonAuth = ({ text, to, className, onClick }) => {
  return (
    <button className={`button_auth ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

ButtonAuth.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonAuth;
