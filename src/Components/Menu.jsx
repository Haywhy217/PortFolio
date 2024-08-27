import React from 'react'
import styles from './Menu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  const handleClose = () =>{
    window.close();
  };



  return (
  <>
  <div className={styles.closeicon} onClick={handleClose}>
    <FontAwesomeIcon icon={faTimes} className={styles.close} />
  </div>
  <div className={styles.menuctn}>
  <div className={styles.content}>
    <div>
    <h3 className={styles.menutext}>MENU</h3>
    </div>
      <div className={styles.textcontent}>
        <h1>HOME</h1>
        <h1>PROJECTS</h1>
        <h1>ABOUT</h1>
        <h1>CONTACT</h1>
    </div>
    </div>
    <div className={styles.details}>
      <p>olanipekunayomide217@gmail.com</p>
      <p>+2349058405456,+2348063417132</p>
      <div className={styles.menusocials}>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} className= {styles.icons} />
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} className={styles.icons} />
    </a>
  
      </div>
    </div>

    </div>
    </>
  )
}

export default Menu