import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

import styles from "./Navbar.module.css";
export default function Navbar() {
  const { logout, error, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <NavLink to="/home"> myMoney</NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink to="/login"> Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup"> Sign-up</NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>Hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
