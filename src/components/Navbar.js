import { NavLink } from "react-router-dom";

import { useLogout } from "../hooks/useLogout";

import styles from "./Navbar.module.css";
export default function Navbar() {
  const { logout, error, isPending } = useLogout();

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
        <li>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
