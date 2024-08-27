import React from 'react'
import ProjectCard from './ProjectCard'
import styles from './Project.module.css';
import ATC from '../assets/Images/animalTradingcardimg.png';
import TP from '../assets/Images/tributePage.png'

const Project = () => {
  return (
    <div className={styles.Pctn}>
      <ProjectCard CardTitle={'Animal Trading Card'} CardDescript={'An animal trading card of a gold fish built with Html and css'} 
      CardImg={ATC} 
      />
      <ProjectCard CardTitle={'A Tribute Page'} CardDescript={'A tribute page of Adele built with html and css'}
      CardImg={TP} />
    </div>
  )
}

export default Project