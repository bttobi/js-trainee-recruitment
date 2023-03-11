import React from 'react'
import styles from "../styles/index.module.css";

type ArticleProps = {
  species: string;
  title: string;
  highlight: string;
  image: string;
  alt: string;
  id: number;
};

const Article : React.FunctionComponent<ArticleProps> = ({species, title, highlight, image, alt, id}) => {
  return (
    <div className={styles.article}>
      <span className={styles.species}>{species}</span>
      <div className={styles.title}>{title}<span className={styles.highlight}>{highlight}</span></div>
      <img className={styles.image} width="817px" height="431px" src={image} alt={alt}/>
    </div>
  )
}

export default Article