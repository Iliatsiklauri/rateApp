import React from 'react';
import './content.css';

const Content = ({ title, text }) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <p className="text">{text}</p>
    </div>
  );
};

export default Content;
