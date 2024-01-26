import React from 'react';
import './button.css';
import { useState } from 'react';

const Buttons = ({ data }) => {
  const [clicked, setClicked] = useState(null);
  const handleButtonCLick = (index) => {
    setClicked(index);
  };
  return (
    <div className="buttonWrapper">
      {data.map((el, index) => (
        <div
          key={index}
          className={`button ${clicked === index ? 'selected' : ''}`}
          onClick={() => {
            handleButtonCLick(index);
            console.log(index);
            console.log('ilia');
          }}
        >
          {el}
        </div>
      ))}
    </div>
  );
};

export default Buttons;
