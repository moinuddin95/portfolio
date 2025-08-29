import "./ProjectsTechnologies.css";
import projectsData from "../../models/projects.json";
import technologiesData from "../../models/technologies.json";
import ProjectsTechnologiesType from "../../enums/ProjectsTechnologies";
import resizeContainerHook from "../../hooks/resizeContainerHook";


function ProjectsTechnologies() {
  const {
    selectedTab,
    setSelectedTab,
    containerRef,
    firstOptionRef: projectsRef,
    secondOptionRef: technologiesRef,
  } = resizeContainerHook(ProjectsTechnologiesType.PROJECTS);

  return (
    <>
      <nav>
        <button
          className={
            selectedTab === ProjectsTechnologiesType.PROJECTS ? "selected" : ""
          }
          onClick={() => setSelectedTab(0)}
        >
          <h3>Featured Projects</h3>
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
              <a href={item.link} target="_">
                <h3>
                  {item.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </h3>
              </a>

              <h4>{item.role}</h4>
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
