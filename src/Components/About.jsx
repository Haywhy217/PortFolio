import React from 'react'
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutctn}>
      <div className={styles.abouttxt}>
        <h3>About me</h3>
        <p>

        I’m a highly skilled full-stack developer with a strong focus on frontend technologies, including HTML, CSS, and JavaScript, and a solid foundation in React for building dynamic and interactive user interfaces. I also have expertise in Django and Python for robust backend development. Passionate about Web3 and creating scalable, efficient, and user-friendly web applications, I bring a deep interest in blockchain and decentralized technologies to my work. I consistently deliver high-quality solutions that meet and exceed expectations, and I’m committed to staying current with the latest technologies and trends. Continuously expanding my skill set, I aim to provide innovative and cutting-edge solutions.

</p>
      </div>
      <div className={styles.skills}>
        <h3>My Skills</h3>
        <ul>
          <li>Html</li>
          <li>Css</li>
          <li>Figma</li>
          <li>Tailwind Css</li>
          <li>React.js</li>
          <li>Git and Github</li>
          <li>Python</li>
          <li>Django</li>
        </ul>
      </div>
    </div>
  )
}

export default About