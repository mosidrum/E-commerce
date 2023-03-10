import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx"

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        E<span>buy</span>
      </h2>
    </Link>
  </div>
);
const cart = (
  <span className={styles.cart}>
    <Link to="/cart">
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
          <div className={styles["header-right"]}>
            <span className={styles.links}>
              <Link to="/login"> Login </Link>
              <Link to="/register"> Register </Link>
              <Link to="/orders-history"> My Orders </Link>
            </span>
            {cart}
          </div>
        </nav>

        <div className={styles["menu-icon"]}>
          {cart}
          <RxHamburgerMenu size={28}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
