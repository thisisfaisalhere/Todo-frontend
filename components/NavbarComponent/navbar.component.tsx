import styles from "./navbar.module.scss";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <div className={styles.branding} onClick={() => router.push("/")}>
        <span>MyTodoApp</span>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={() => router.push("/")}>
            Home
          </li>
          <li className={styles.navItem} onClick={() => router.push("/")}>
            Tasks
          </li>
          <li className={styles.navItem} onClick={() => router.push("/")}>
            Notes
          </li>
          <li className={styles.navItem} onClick={() => router.push("/")}>
            Login
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
