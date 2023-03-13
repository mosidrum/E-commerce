import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { auth } from "../../firebase/Config";
import Loader from "../loader/Loader";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_USER } from '../../redux/slice/authSlice';


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
  const [isLoading, setIsLoading] = useState(false);
  const [displayName, setDisplayName] = useState('');
  
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };

  const activeLink = ({isActive}) => (isActive ? `${styles.active}` : "")
  
  const navigate = useNavigate();

  const logoutUser = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      toast.success('Logout successfully!');
      setIsLoading(false);
      navigate('/');
    }).catch((error) => {
      toast.error(error.message)
    });
  };

    // Monitor the current signed in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        // const uid = user.uid;
        // console.log(user.displayName)

        if(user.displayName == null){
            user.displayName = user.email;
        }
        setDisplayName(user.displayName)

        dispatch(SET_ACTIVE_USER({
          email: user.email,
          userName: user.displayName,
          userID: user.uid,
        }))
      } else {
        setDisplayName('')
      }
    });
  }, [])

  return (
    <>
    {isLoading && <Loader />}
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
              <a href="#">
                <FaUserCircle size={16}/>
                Hi, {displayName}
              </a>
              <NavLink to="/register" className={activeLink}> Register </NavLink>
              <NavLink to="/orders-history" className={activeLink}> My Orders </NavLink>
              <NavLink to="/" onClick={logoutUser}> Log Out </NavLink>
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
    </>
  );
};

export default Header;
