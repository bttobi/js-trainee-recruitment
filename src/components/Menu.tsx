import React from 'react'
import styles from "../styles/index.module.css";

type MenuProps = {
  species: string[];
}

const Menu : React.FunctionComponent<MenuProps> = ({species}) => {
  console.log(species)
  return (
    <div className={styles.menu}>
      <span className={styles.menu_title}>Your new gang</span>
      <ul className={styles.menu_list}>
        {
          species.map((specie:string)=><li className={styles.menu_item}>{specie}</li>) 
        }
      </ul>
    </div>
  )
}

export default Menu