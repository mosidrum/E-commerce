import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

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
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };

  const activeLink = ({isActive}) => (isActive ? `${styles.active}` : "")

  return (
    <header>
      <div className={styles.header}>
        {logo}

        {/* if the navbar state (showMenu) is true the nav should have a className of "show-nav" else the nav bar should have a className of "hide-nav" */}
        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            }
            onClick={hideMenu}
           ></div>
          <ul onClick={hideMenu }>
            <li className={styles["logo-mobile"]}>
                {logo}
                <FaTimes size={22} color="#fff" onClick={hideMenu}/>
            </li>
            <li>
              <NavLink to="/" className={activeLink}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={activeLink}>Contact Us</NavLink>
            </li>
          </ul>
          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <NavLink to="/login" className={activeLink}> Login </NavLink>
              <NavLink to="/register" className={activeLink}> Register </NavLink>
              <NavLink to="/orders-history" className={activeLink}> My Orders </NavLink>
            </span>
            {cart}
          </div>
        </nav>

        {/* hamburger icon */}
        <div className={styles["menu-icon"]}>
          {cart}
          <RxHamburgerMenu size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
