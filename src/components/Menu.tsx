import React from 'react';
import styles from "../styles/index.module.css";

type MenuProps = {
  species: Object[];
  id: number;
}

const Menu : React.FunctionComponent<MenuProps> = ({clickFun, species, id}) => {
  return (
    <div className={styles.menu}>
      <span className={styles.menu_title}>Your new gang</span>
      <ul className={styles.menu_list}>
        {
          species.map((specie, index)=>{
          return (<li key={specie[index]} className={styles.menu_item}><button className={styles.menu_item} onClick={()=>{clickFun(specie[1])}}>{specie[0]}</button></li>);
        }
          ) 
        }
      </ul>
    </div>
  )
}

export default Menu