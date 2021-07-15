import React, { useEffect, useState, Fragment } from 'react';
import axios from "axios";

import "./ToggleSwitch.css";


const ToggleSwitch = ({isToggled, onToggle}) => {


const ontoggle=(evt)=>{
   
}

   
    return (
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
     
    );
  };
export default ToggleSwitch;

