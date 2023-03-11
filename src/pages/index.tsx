import Article from "../components/Article";
import Menu from "../components/Menu";
import styles from "../styles/index.module.css";
import data from "../../public/articles.json";

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

  return (
    <div className={styles.wrapper}>
      <Menu species={articles.map((article:Article) =>  article.species)} />
      <div className={styles.wrapper_article}>
      {
        articles.map((article:Article) => <Article key={article.id} species={article.species.toUpperCase()} title={article.title} highlight={article.highlight} image={article.image} alt={article.alt} id={article.id}/>)
      }
      </div>
    </div>
  );
}
