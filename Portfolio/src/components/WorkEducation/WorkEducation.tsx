import "./WorkEducation.css";
import workData from "../../models/work.json";
import educationData from "../../models/education.json";
import {
  WorkEducationProps,
  WorkEducationType,
} from "../../interfaces/WorkEducation";

function WorkEducation({ tab }: WorkEducationProps) {
  return (
    <div id="work-education" key={tab}>
      {tab === WorkEducationType.WORK
        ? workData.map((item, index) => (
            <div key={index} className="work-education card">
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
          ))
        : educationData.map((item, index) => (
            <div key={index} className="work-education card">
              <h3>{item.degree}</h3>
              <div className="header">
                <h4>{item.institution}</h4>
                <p>{item.graduation_date}</p>
              </div>
            </div>
          ))}
    </div>
  );
}

export default WorkEducation;
