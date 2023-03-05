import React, {useState} from 'react';
import './style.css';
import lightOn from './light-on.svg';
import lightOff from './light-off.svg';

const Light = ({name, state}) => {

  const [lights, setLights] = useState(state);

  return (
    <div className="light" onClick={() => {
      lights === 'off' ? setLights('on') : setLights('off');
      }}
    >
      <div className="light__icon">
        <img src={ lights === 'on' ? lightOn : lightOff } />
      </div>
      <div className="light__name">
        {name}
      </div>
    </div>
  )
};

export default Light;