import sitePlan from "../assets/drawings/BEA Final Exam site plan.png";

import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects & Drawings</h2>

      <p className={styles.intro}>
        A collection of my civil and structural CAD projects, technical
        drawings, and work developed throughout my Civil Engineering
        Technology journey.
      </p>

      <div className={styles.projectGrid}>
        <article className={styles.projectCard}>
          <div className={styles.imagePlaceholder}>
            <img src={sitePlan} alt="BEA Final Exam site plan" />
          </div>

          <div className={styles.projectContent}>
            <h3>BEA Final Exam — Site Plan</h3>

            <p>
             A civil site plan showing the arrangement of a building, parking area, driveway/access, property boundaries, dimensions, storm and sanitary sewer information, and other site features.
            </p>

            <a href="#">View Drawing</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;