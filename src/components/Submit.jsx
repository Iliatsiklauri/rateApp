import React from 'react';
import './submit.css';
const Submit = ({ onClick }) => {
  return (
    <div className="sbmt" onClick={onClick}>
      <h1>Submit</h1>
    </div>
  );
};

export default Submit;
