import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2>ChrisDev CAD</h2>

      <div className={styles.links}>
        <a href="/">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
};

export default Navbar;