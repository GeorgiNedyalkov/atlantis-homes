import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation_list}>
        <li>
          <a href="/project">Project</a>
        </li>
        <li>
          <a href="/location">Houses</a>
        </li>
        <li>
          <a href="/location">Design</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/location">Location</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
