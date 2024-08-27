import React from 'react'
import styles from './Hero.module.css';

const Hero = () => {
  
  return (
    <>
    <div className={styles.heroctn}>
    <nav className={styles.navctn}>
      <h1>Haywhy</h1>
      <div className={styles.menuToggle} >
        ☰
      </div>
    </nav>
    <div className={styles.herotext}> 
      <h1>OLANIPEKUN AYOMIDE .A. </h1>
      <p>WEB-DEVELOPER</p>
    </div>
    </div>
    </>
  )
}

export default Hero