
import { useState } from "react";

import styles from "./Projects.module.css";
import DrawingViewer from "./DrawingViewer";

// Import drawing images
import beaImage from "../assets/drawings/bea101-property-plan.png";
import crxImage from "../assets/drawings/crx342-plan-profile.png";

// Import original PDF files as URLs
import beaPdf from "../assets/drawings/bea101-property-plan.pdf?url";
import crxPdf from "../assets/drawings/crx342-plan-profile.pdf?url";

const Projects = () => {
  const [selectedDrawing, setSelectedDrawing] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Existing Property & Site Plan",
      image: beaImage,
      pdf: beaPdf,
      alt: "Existing Property & Site Plan",
      description:
        "A property plan illustrating the existing site layout, including building locations, parking spaces, access areas, property boundaries, fences, and other surveyed features, with measurements and survey information.",
    },
    {
      id: 2,
      title: "Red Earth Meadows – Subdivision Plan & Profile",
      image: crxImage,
      pdf: crxPdf,
      alt: "Red Earth Meadows Subdivision Plan and Profile",
      description:
        "This drawing presents the plan and profile views of a proposed subdivision. It illustrates the road layout, property divisions, manhole locations, storm and sanitary sewer networks, and the relationship between existing and proposed ground elevations.",
      lessons: [
        "Learned how to interpret engineering drawings and apply municipal drafting standards when developing a subdivision road layout.",
        "Gained practical experience creating road centre lines, edge of pavement, back of curb, sidewalks, and station labels using AutoCAD.",
        "Developed an understanding of how storm and sanitary sewer networks are arranged within a subdivision, including pipe connections through manholes.",
        "Learned how to use stations to identify specific locations along a road alignment and locate important points such as the Beginning of Curve (BC) and End of Curve (EC).",
        "Learned how to represent existing and proposed ground profiles using elevations and stations.",
        "Improved my understanding of plan and profile views and how they communicate different aspects of a civil engineering project.",
        "Improved my AutoCAD drafting skills, particularly with layers, offsets, blocks, annotations, viewports, and drawing presentation.",
        "Developed a better understanding of how road design, ground elevations, and underground services must work together to support a functional subdivision.",
      ],
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects & Drawings</h2>

      <p className={styles.intro}>
        A collection of my civil and structural CAD projects, technical
        drawings, and work developed throughout my Civil Engineering
        Technology journey.
      </p>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <article className={styles.projectCard} key={project.id}>
            <div className={styles.imagePlaceholder}>
              <img src={project.image} alt={project.alt} />
            </div>

            <div className={styles.projectContent}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <button
                type="button"
                className={styles.viewButton}
                onClick={() => setSelectedDrawing(project)}
              >
                View Drawing
              </button>

              {project.lessons && (
                <div className={styles.projectLessons}>
                  <h4>What I Learned:</h4>

                  <ul>
                    {project.lessons.map((lesson, index) => (
                      <li key={index}>{lesson}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {selectedDrawing && (
        <DrawingViewer
          title={selectedDrawing.title}
          imageSrc={selectedDrawing.image}
          pdfSrc={selectedDrawing.pdf}
          onClose={() => setSelectedDrawing(null)}
        />
      )}
    </section>
  );
};

export default Projects;
