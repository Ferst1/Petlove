
import React from 'react';
import '../../../styles/Button.scss'; 

function Button(props) {
  const { text, color, isActive, ...otherProps } = props;

  return (
    <button 
      {...otherProps} 
      className={`button_elem ${color || 'primary'} ${isActive ? 'active' : ''}`}
    >
      {text}
    </button>
  );
}

export default Button;
