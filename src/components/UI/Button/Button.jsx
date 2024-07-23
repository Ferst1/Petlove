
import React from 'react';
import '../../../styles/Button.scss'; 

function Button(props) {
  const { text, color, ...otherProps } = props;

  return (
    <button {...otherProps} className={`button_elem ${color}`}>
      {text}
    </button>
  );
}

export default Button;
