import React from 'react';
import './firstcard.css';
import Content from './Content';
import Submit from './Submit';
import { useState } from 'react';
import Secondcard from './Secondcard';

const Firstcard = () => {
  const [clicked, setClicked] = useState(null);
  const [value, setvalue] = useState(null);
  const [show, setShow] = useState(true);

  const changeValue = (index) => {
    setvalue(index + 1);
  };
  const handleButtonCLick = (index) => {
    setClicked(index);
  };
  if (show) {
    const data = [1, 2, 3, 4, 5];

    return (
      <div className="firstcard">
        <img src="Group 4 (1).png" alt="" className="star1" />

        <Content
          title={'How did we do?'}
          text={
            'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'
          }
        />

        <div className="buttonWrapper">
          {data.map((el, index) => (
            <div
              key={index}
              className={`button ${clicked === index ? 'selected' : ''}`}
              onClick={() => {
                handleButtonCLick(index);
                changeValue(index);
                console.log(value);
              }}
            >
              {el}
            </div>
          ))}
        </div>

        <Submit
          onClick={() => {
            setShow(!show);
          }}
        />
      </div>
    );
  } else {
    return <Secondcard value={value} />;
  }
};

export default Firstcard;
