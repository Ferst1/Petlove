
import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/Button.scss';
import XWhite from "/images/x-white.svg";

function Button(props) {
  const { text, color, isActive, isClearable, onClear, ...otherProps } = props;

  const handleClearClick = (e) => {
    e.stopPropagation();
    if (onClear) {
      onClear();
    }
  };

  return (
    <button 
      {...otherProps} 
      className={`button_elem ${color || 'primary'} ${isActive ? 'active' : ''}`}
    >
      {text}
      {isClearable && (
        <img src={XWhite} alt="Clear" className="clear_icon" onClick={handleClearClick} />
      )}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  isActive: PropTypes.bool,
  isClearable: PropTypes.bool,
  onClear: PropTypes.func,
};

export default Button;
