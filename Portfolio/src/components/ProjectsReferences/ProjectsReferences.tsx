import "./ProjectsReferences.css";
import workData from "../../models/work.json";
import educationData from "../../models/education.json";
import { useEffect, useRef, useState } from "react";
import ProjectsReferencesType from "../../interfaces/ProjectsReferences";

function ProjectsReferences() {
  const [selectedTab, setSelectedTab] = useState(
    ProjectsReferencesType.PROJECTS
  );

  const containerRef = useRef<HTMLDivElement | null>(null);
  const workRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const height =
      selectedTab === ProjectsReferencesType.PROJECTS
        ? workRef.current?.clientHeight
        : educationRef.current?.clientHeight;
    if (containerRef.current && height !== undefined) {
      containerRef.current.style.height = `${height}px`;
    }
  }, [selectedTab]);

  return (
    <>
      <nav>
        <button
          className={
            selectedTab === ProjectsReferencesType.PROJECTS ? "selected" : ""
          }
          onClick={() => setSelectedTab(0)}
        >
          <h3>Projects</h3>
        </button>
        <button
          className={
            selectedTab === ProjectsReferencesType.REFERENCES ? "selected" : ""
          }
          onClick={() => setSelectedTab(1)}
        >
          <h3>References</h3>
        </button>
      </nav>
      <div id="work-education" ref={containerRef}>
        <div
          id="work"
          ref={workRef}
          className={
            selectedTab === ProjectsReferencesType.PROJECTS ? " selected" : ""
          }
        >
          {workData.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.position}</h3>
              <div className="header">
                <h4>{item.organization}</h4>
                <p>
                  {item.start_date} - {item.end_date}
                </p>
              </div>
              <ul>
                {item.responsibilities.map((responsibility, index) => (
                  <li key={index}>
                    <p> {responsibility} </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          id="education"
          ref={educationRef}
          className={
            selectedTab === ProjectsReferencesType.REFERENCES ? " selected" : ""
          }
        >
          {educationData.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.degree}</h3>
              <div className="header">
                <h4>{item.institution}</h4>
                <p>{item.graduation_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsReferences;
