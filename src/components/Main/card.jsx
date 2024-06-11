import React from "react";
import { Link } from "react-router-dom";
import styles from './card.module.css';

const Card = ({ NavLink, Title }) => {
  return (
    <Link to={NavLink} className={styles.card_container}>
      <div className={styles.card_header}>
        <h2>{Title}</h2>
      </div >
    </Link>

  )
}

export default Card;
