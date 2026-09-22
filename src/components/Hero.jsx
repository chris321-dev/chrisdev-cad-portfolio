import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>ChrisDev CAD Portfolio</h1>

      <p className={styles.subtitle}>
        Civil Engineering Technology — Civil & Structural CAD Drafting
      </p>

      <p className={styles.description}>
        A collection of selected civil and structural drafting work,
        projects, and skills developed throughout my studies.
      </p>

      <div className={styles.actions}>
        <a href="#projects" className={styles.primaryButton}>
          View My Work
        </a>

        <a href="#about" className={styles.secondaryButton}>
          About Me
        </a>
      </div>
    </section>
  );
};

export default Hero;