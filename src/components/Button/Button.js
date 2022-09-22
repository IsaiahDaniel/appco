import React from 'react';
import "./Button.css";

const Button = (props) => {
  return (
    <div className={`btn btn-inverse text-center border-5 ${props.classNames}`}>
        { props.buttonText }
    </div>
  )
}

export default Button;