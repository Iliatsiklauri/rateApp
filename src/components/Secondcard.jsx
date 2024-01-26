import React from 'react';
import './secondCard.css';
import Content from './Content';
const Secondcard = ({ value }) => {
  return (
    <div className="seccondCard">
      <img src="public\Online payment_Two Color(1) 2.png" alt="" className="img" />
      <div className="answer">
        <p>you selected {value} out of 5</p>
      </div>
      <Content
        title={'Thank you!'}
        text={
          'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'
        }
      />
    </div>
  );
};

export default Secondcard;
