import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import logo from "../assets/Images/Brandlogo";

const Footer = () => {
  return (
    <div className={styles.footerCTN}>
      <div className={styles.side1}>
        <img src={logo} className={styles.footlogo}/>
        <p>A full-stack developer with a focus on crafting intuitive and visually appealing frontends for websites and web applications, driving the success of the overall product.</p>
      </div>
      <div className={styles.side2}>
        <h1>SOCIAL</h1>
        <a href='https://twitter.com' target='blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faTwitter} className={styles.icon2}/>
        </a>
        <a href='https://www.linkedin.com' target='blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon2}/>
        </a>
        <a href='https://github.com/Haywhy217' target='blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faGithub} className={styles.icon2}/>
        </a>
      </div>
      <hr />
    <p>
      &copy; 2025. Made by <a href="/" className={styles.copyrightlink}>Olanipekun Ayomide</a>
    </p>
    </div>
  )
}

export default Footer