
import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/Button.scss';

function Button(props) {
  const { text, isFavorite, children, ...otherProps } = props;

  return (
    <button 
      {...otherProps} 
      className={`button_elem ${isFavorite ? 'white' : 'primary'}`}
    >
      <span className="button-text">{text}</span>
      {!isFavorite && children}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
