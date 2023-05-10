import React from "react";
import "./Button.css";

const Button3D = ({ children, onClick, className }) => {
  return (
    <button
      className={`button ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button3D;
