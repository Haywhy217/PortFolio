import React from 'react'
import styles from './Menu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/Images/Brandlogo.png';

const Menu = () => {
  const handleClose = () =>{
    window.close();
  };



  return (
  <>
  <div className={styles.container}>
  <div className={styles.closeicon} onClick={handleClose}>
    <FontAwesomeIcon icon={faTimes} className={styles.close} />
  </div>
  <div className={styles.logoContainer}>
        <img src={logo} className={styles.logo}/>
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
      <div className={styles.menusocials}>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} className= {styles.icons} />
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} className={styles.icons} />
    </a>
    <a href='https://github.com/Haywhy217' target='blank' rel='noopener noreferrer'>
    <FontAwesomeIcon icon={faGithub} className={styles.icons}/>
    </a>
      </div>
    </div>

    </div>
    </div>
    </>
  )
}

export default Menu