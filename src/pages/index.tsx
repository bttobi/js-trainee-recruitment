import Article from "../components/Article";
import Menu from "../components/Menu";
import styles from "../styles/index.module.css";
import data from "../../public/articles.json";
import React from "react";
import { useEffect, useState } from "react";

export default function Home() {
  interface Article{
    species: string; 
    title: string; 
    highlight: string; 
    image: string;
    alt: string;
    id: number;
  };

  const articles : Article[] = data;

  const ids : any = data.map((entry) => entry.id);

  const refs = ids.reduce((id:any, index:number) => {
    id[index] = React.createRef();
    return id;
  }, {});

  const handleClick = (id:number) =>{
    if(id === 1){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'});
    }
    else{
      refs[id-1].current?.scrollIntoView({behavior: "smooth"});
    }
  }

  return (
    <div className={styles.wrapper}>
      <Menu clickFun={handleClick} species={articles.map((article:Article) => [article.species, article.id])} />
      <div className={styles.wrapper_article}>
      {
        articles.map((article:Article, index:number) =>{
          return (<Article ref={refs[index]} key={article.id} species={article.species.toUpperCase()} title={article.title} highlight={article.highlight} image={article.image} alt={article.alt} id={article.id}/>)
        })
      }
      </div>
    </div>
  );
}
