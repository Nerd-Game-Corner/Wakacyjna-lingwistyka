import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className={styles.navbar}>
        <button className={styles.hamburger} onClick={() => setDrawerOpen(!drawerOpen)}>
          ☰
        </button>

        <div className={styles.logo}>
           <NavLink to="/" onClick={() => setDrawerOpen(false)}>
             Lingus
           </NavLink>
        </div>

        <div className={styles.User}>
          <button className={styles.loginBtn}>Login</button>
        </div>
      </header>

      {/* Vertical Drawer */}
      <div className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}>
        <nav className={styles.drawerNav}>
          <NavLink to="/" onClick={() => setDrawerOpen(false)}>Home</NavLink>
          <NavLink to="/mock" onClick={() => setDrawerOpen(false)}>Mock Exercise</NavLink>
          <NavLink to="/about" onClick={() => setDrawerOpen(false)}>About</NavLink>
        </nav>
      </div>

      {/* Overlay */}
      {drawerOpen && <div className={styles.overlay} onClick={() => setDrawerOpen(false)}></div>}
    </>
  );
}
