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
          return (
          <li key={index} className={styles.menu_item}>
            <button className={styles.menu_button} onClick={()=>{clickFun(specie[1]); 
            const elements = [...document.getElementsByClassName(styles.menu_button)];
            elements.forEach((el) => {
              el.classList.remove(styles.menu_button_active);
            });
            elements[specie[1]-1].classList.add(styles.menu_button_active);
          }}>{specie[0]}
            </button>
          </li>);
        }
          ) 
        }
      </ul>
    </div>
  )
}

export default Menu