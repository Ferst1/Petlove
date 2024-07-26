


import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/Button.scss';

function Button(props) {
  const { text, isFavorite, className, style, children, ...otherProps } = props;

  return (
    <button 
      {...otherProps} 
      className={`button_elem ${isFavorite ? 'white' : 'primary'} ${className}`}
      style={style}
    >
      <span className="button-text">{text}</span>
      {!isFavorite && children}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default Button;
