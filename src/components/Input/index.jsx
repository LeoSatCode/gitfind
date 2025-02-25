import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';

const Input = () => {
  const { user, setUser, placeholder, handleGetData } = useContext(AppContext);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleGetData();
    }
  }

  return (
    <input 
      value={user}
      onChange={event => setUser(event.target.value)}
      onKeyUp={handleKeyPress}
      placeholder={placeholder}
      name="username"
    />
  );
};

export default Input;
