import React from 'react';
import './firstcard.css';
import Buttons from './Buttons';
import Content from './Content';
import Submit from './Submit';
import { useState } from 'react';

const Firstcard = () => {
  const [buttonValue, setButtonValue] = useState(null);
  const [show, setShow] = useState(false);

  return (
    <div className="firstcard">
      <img src="public\Group 4 (1).png" alt="" className="star1" />

      <Content
        title={'How did we do?'}
        text={
          'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'
        }
      />
      <Buttons data={[1, 2, 3, 4, 5]} />
      <Submit />
    </div>
  );
};

export default Firstcard;
