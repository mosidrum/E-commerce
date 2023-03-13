import React from 'react'
import ReactDOM from 'react-dom'
import loader from "../../assets/loader.gif";
import styles from "./Loader.module.scss";

const Loader = () => {
  return ReactDOM.createPortal (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={loader} alt='loading...'/>
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader
