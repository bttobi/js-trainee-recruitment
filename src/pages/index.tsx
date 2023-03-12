import Article from "../components/Article";
import Menu from "../components/Menu";
import styles from "../styles/index.module.css";
import data from "../../public/articles.json";
import React from "react";
import { useEffect } from "react";

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

  const refs = ids.reduce((id:any, index:number) => { //adding refs
    id[index] = React.createRef();
    return id;
  }, {});

  const handleClick = (id:number) =>{ //handling clicks
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

  const handleActive = () => {
    const articleElems = [...document.getElementsByClassName(styles.article)];
    const buttons = [...document.getElementsByClassName(styles.menu_button)];
    articleElems.forEach((el, index)=>{
      const bounding = el.getBoundingClientRect();
      buttons[index].classList.remove(styles.menu_button_active);
      if(bounding.top <= (window.innerHeight/2 || document.documentElement.clientHeight/2) && //checking if element is in view
        bounding.bottom >= (window.innerHeight/2 || document.documentElement.clientHeight/2)){
          buttons[index].classList.add(styles.menu_button_active);
      }

    });
  }

  useEffect(()=>{
    document.addEventListener("scroll", handleActive); //adding scrolling event
  },)

  useEffect(()=>{
    const button = [...document.getElementsByClassName(styles.menu_button)][0]; //adding active to the first element on page Render
    button.classList.add(styles.menu_button_active);
  },[])

  return (
    <div className={styles.wrapper}> 
      <Menu clickFun={handleClick} species={articles.map((article:Article) => [article.species, article.id])} />
      <div className={styles.wrapper_article}>
      {
        articles.map((article:Article, index:number) =>{ //mapping articles
          return (<Article ref={refs[index]} key={article.id} species={article.species.toUpperCase()} title={article.title} highlight={article.highlight} image={article.image} alt={article.alt} id={article.id}/>)
        })
      }
      </div>
    </div>
  );
}
