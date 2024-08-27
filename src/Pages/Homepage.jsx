import React from 'react'
import Hero from '../Components/Hero';
import About from '../Components/About';
// import styles from '../Components/Homepage.module.css';

const Homepage = () => {
  return (
    <div className={StyleSheet.Hpagectn}>
      <Hero/>
      <About/>
    </div>
  )
}

export default Homepage