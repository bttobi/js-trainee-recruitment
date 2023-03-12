import React from 'react';
import styles from "../styles/index.module.css";

type MenuProps = {
  species: any;
}

const Menu : React.FunctionComponent<MenuProps> = ({species}) => {
  const setActive = (e:Event) => {
    console.log(e.target)
  };

  return (
    <div className={styles.menu}>
      <span className={styles.menu_title}>Your new gang</span>
      <ul className={styles.menu_list}>
        {
          species.map((specie:string)=>
          <li key={specie} className={styles.menu_item}><a className={styles.menu_item} href="#" onClick={setActive}>{specie}</a></li>
          ) 
        }
      </ul>
    </div>
  )
}

export default Menu