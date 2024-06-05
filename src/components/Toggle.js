import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../slices/themeSlice';
import '../css/Toggle.css';

const Toggle = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState(theme === 'dark');

  const handleToggle = () => {
    dispatch(toggleTheme());
    setIsToggled(!isToggled);
  };
  

  

  return (
    <div className="toggle-container">
      <label className="switch">
        <input type="checkbox" checked={isToggled} onChange={handleToggle} />
        <span className="slider" />
      </label>
    </div>
  );
};

export default Toggle;
