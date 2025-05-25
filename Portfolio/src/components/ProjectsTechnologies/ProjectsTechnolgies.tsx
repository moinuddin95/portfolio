import "./ProjectsTechnologies.css";
import projectsData from "../../models/projects.json";
import technologiesData from "../../models/technologies.json";
import { useEffect, useRef, useState } from "react";
import ProjectsTechnologiesType from "../../interfaces/ProjectsTechnologies";

function ProjectsTechnologies() {
  const [selectedTab, setSelectedTab] = useState(
    ProjectsTechnologiesType.PROJECTS
  );

  const containerRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const technologiesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const height =
      selectedTab === ProjectsTechnologiesType.PROJECTS
        ? projectsRef.current?.clientHeight
        : technologiesRef.current?.clientHeight;
    if (containerRef.current && height !== undefined) {
      containerRef.current.style.height = `${height}px`;
    }
  }, [selectedTab]);

  return (
    <>
      <nav>
        <button
          className={
            selectedTab === ProjectsTechnologiesType.PROJECTS ? "selected" : ""
          }
          onClick={() => setSelectedTab(0)}
        >
          <h3>Projects</h3>
        </button>
        <button
          className={
            selectedTab === ProjectsTechnologiesType.TECHNOLOGIES
              ? "selected"
              : ""
          }
          onClick={() => setSelectedTab(1)}
        >
          <h3>Technologies</h3>
        </button>
      </nav>
      <div id="projects-technologies" ref={containerRef}>
        <div
          id="projects"
          ref={projectsRef}
          className={
            selectedTab === ProjectsTechnologiesType.PROJECTS ? " selected" : ""
          }
        >
          {projectsData.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.title}</h3>
              <div className="header">
                <h4>{item.role}</h4>
              </div>
              <ul>
                {item.description.map((descriptionPoint, index) => (
                  <li key={index}>
                    <p> {descriptionPoint} </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          id="technologies"
          ref={technologiesRef}
          className={
            selectedTab === ProjectsTechnologiesType.TECHNOLOGIES
              ? " selected"
              : ""
          }
        >
          {technologiesData.map((technologySection, index) => (
            <div key={index} className="card">
              <h3>{technologySection.title}</h3>
              <ul className="technology-list">
              {technologySection.list.map((technology, index) => (
                <li key={index}>{technology}</li>
              ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsTechnologies;
