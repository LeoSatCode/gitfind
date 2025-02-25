import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';

const Button = () => {
  const { handleGetData } = useContext(AppContext);

  return (
    <button onClick={handleGetData}>
      Buscar
    </button>
  );
};

export default Button;
