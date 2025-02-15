import React from "react";
import './index.css';

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <button className="floating-button" onClick={onClick}>
      <p>Apply <br/> Now</p>
    </button>
  );
};

export default FloatingButton;
