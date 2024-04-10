import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, bgcolor, textcolor, link }) => {
  return (
    <div className="btn">
      <Link to={link}>
        <button
          style={{ backgroundColor: `${bgcolor}`, color: `${textcolor}` }}
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

export default Button;
