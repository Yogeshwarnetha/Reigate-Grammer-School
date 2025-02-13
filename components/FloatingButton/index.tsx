import React from "react";
import './index.css'

interface FloatingButtonProps {
  onClick: () => void; // Explicitly define the type for onClick
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <button className="floating-button" onClick={onClick}>
      Apply Now
    </button>
  );
};

export default FloatingButton;
