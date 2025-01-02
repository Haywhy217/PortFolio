import React from 'react'
import styles from './ProjectCard.module.css';
import PropTypes from 'prop-types';

const ProjectCard = ({CardTitle, CardDescript, CardImg}) => {
  return (
    <div className={styles.cardCTN}>
      <div className={styles.para}>
      <h3>{CardTitle}</h3>
      <p>{CardDescript}</p>
      </div>
      <img src={CardImg} className={styles.pcardImg}></img>
    </div>
  )
}

ProjectCard.propTypes = {
  CardTitle: PropTypes.string.isRequired,
  CardDescript: PropTypes.string.isRequired,
  CardImg: PropTypes.string.isRequired
};

export default ProjectCard