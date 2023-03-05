import React from 'react';
import Light from "../Light";
import './style.css';

const Lights = ({lights}) => {
  return (
    <div className="lights">

      {lights.map((item) =>
        <Light name={item.name} state={item.state} key={item.name} />
      )}

    </div>
  )
};

export default Lights;