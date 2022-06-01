import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <NavLink to="/home"> myMoney</NavLink>
        </li>
        <li>
          <NavLink to="/login"> Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup"> Sign-up</NavLink>
        </li>
      </ul>
    </nav>
  );
}
