import "./WorkEducation.css";
import workData from "../../models/work.json";
import educationData from "../../models/education.json";
import resizeContainerHook from "../../hooks/resizeContainerHook";
import WorkEducationType from "../../enums/WorkEducation";

function WorkEducation() {
  const {
    selectedTab,
    setSelectedTab,
    containerRef,
    firstOptionRef:workRef,
    secondOptionRef:educationRef,
  } = resizeContainerHook(WorkEducationType.WORK);

  return (
    <>
      <nav>
        <button
          className={selectedTab === WorkEducationType.WORK ? "selected" : ""}
          onClick={() => setSelectedTab(0)}
        >
          <h3>Work</h3>
        </button>
        <button
          className={
            selectedTab === WorkEducationType.EDUCATION ? "selected" : ""
          }
          onClick={() => setSelectedTab(1)}
        >
          <h3>Education</h3>
        </button>
      </nav>
      <div id="work-education" ref={containerRef}>
        <div
          id="work"
          ref={workRef}
          className={selectedTab === WorkEducationType.WORK ? " selected" : ""}
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
            selectedTab === WorkEducationType.EDUCATION ? " selected" : ""
          }
        >
          {educationData.map((item, index) => (
            <div key={index} className="card">
              <div className="header">
                <h3>{item.degree}</h3>
                <p>{item.gpa ? `GPA: ${item.gpa}` : ""}</p>
              </div>
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

export default WorkEducation;
