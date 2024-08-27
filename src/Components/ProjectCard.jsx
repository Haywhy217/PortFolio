import React from 'react'
import styles from './About.module.css';
import PropTypes from 'prop-types';

ProjectCard.propTypes={
  title:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  image: PropTypes.element.isRequired
};


const ProjectCard = ({CardTitle, CardDescript, CardImg}) => {
  return (
    <div className={styles.projectctn}>
      <div className={styles.para}>
      <h3>{CardTitle}</h3>
      <p>{CardDescript}</p>
      </div>
      <div className={styles.imgctn}>
        <img src={CardImg}></img>
      </div>
    </div>
  )
}

export default ProjectCard