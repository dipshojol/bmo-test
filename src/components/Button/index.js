import React, { useState } from 'react';
import './index.css';

const Button = ({ onClick, value, label, da, type = 'submit' }) => {
  return (
    <div className="button-conatiner">
      <button disabled={da} className="button" type={type} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Button;
