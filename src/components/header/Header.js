import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Header.module.scss"

const logo = (
  <div className={styles.logo}>
            <Link to='/'><h2>E<span>buy</span></h2></Link>
  </div>
)

const Header = () => {
  return (
    <header>
      <div className={styles.header}> 
        {logo}  
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
          </ul>
          <div className={styles["header-right"]}>

          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header
