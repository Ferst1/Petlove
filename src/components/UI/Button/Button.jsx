
import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/Button.scss';

function Button(props) {
  const { text, isFavorite, className, style, type = 'button', color = 'primary', isActive, isClearable, onClear, children, ...otherProps } = props;

  const handleClearClick = (e) => {
    e.stopPropagation();
    if (onClear) {
      onClear();
    }
  };

  return (
    <button 
      {...otherProps} 
      className={`button_elem ${isFavorite ? 'white' : color} ${isActive ? 'active' : ''} ${className}`}
      style={style}
      type={type}
    >
      <span className="button-text">{text}</span>
      {children}
      {isClearable && <span className="clear_icon" onClick={handleClearClick}>✕</span>}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  isActive: PropTypes.bool,
  isClearable: PropTypes.bool,
  onClear: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
