import React from 'react'
import Menu from '../Components/Menu'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <>
      <Menu onHomeClick={handleHomeClick} />
    </>
  );
};
export default HomePage