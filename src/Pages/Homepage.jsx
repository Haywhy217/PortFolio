import React from 'react'
import Menu from '../Components/Menu'
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer';

const Homepage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <>
      <Menu onHomeClick={handleHomeClick} />
      <Footer/>
    </>
  );
};
export default Homepage