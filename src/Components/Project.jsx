import React from 'react'
import ProjectCard from './ProjectCard'
import styles from './Project.module.css';
import ATC from '../assets/Images/TradingCradPic.png';
import TP from '../assets/Images/TributePagePic.png';
import site from '../assets/Images/Carrygosite.png';
import app from '../assets/Images/TrackingApp.png';

const Project = () => {
  return (
    <div className={styles.projectCtn}>
      <ProjectCard CardTitle={'Animal Trading Card'} CardDescript={'An animal trading card of a gold fish built with Html and css'} 
      CardImg={ATC} 
      />
      <ProjectCard CardTitle={'A Tribute Page'} CardDescript={'A tribute page of Adele built with html and css'}
      CardImg={TP} />
      <ProjectCard CardTitle={'CarryGo Logistics Website'} CardDescript={'A Logistics website , a collaborative project built with html,css, tailwind css, javascript and React.js'} 
      CardImg={site}/>
      <ProjectCard CardTitle={'Trackly Expense Tracking APP'} CardDescript={'An Expense Tracking APP. A fullstack project where react.js was used fror the frontend, the html and css use to create a visually appealing UI, the javascript for dynamic interaction of the site and Django for the backend for storing data.'}
      CardImg={app}/>

      <div className={styles.btnCTN}>
        <button> → All Projects</button>
        <button>  → Contact Me</button>
      </div>

    </div>
    
  )
}

export default Project