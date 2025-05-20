import "./WorkEducation.css";
import workData from "../../models/work.json";
import educationData from "../../models/education.json";
import { useEffect, useRef } from "react";
import {
  WorkEducationProps,
  WorkEducationType,
} from "../../interfaces/WorkEducation";

function WorkEducation({ tab }: WorkEducationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const workRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {

    const height = tab === WorkEducationType.WORK ? workRef.current?.clientHeight : educationRef.current?.clientHeight;
    if (containerRef.current && height !== undefined) {
      containerRef.current.style.height = `${height}px`;
    }
  }, [tab]);

  return (
    <div id="work-education" ref={containerRef}>
      <div
        id="work"
        ref={workRef}
        className={tab === WorkEducationType.WORK ? " selected" : ""}
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
        id="education" ref={educationRef}
        className={tab === WorkEducationType.EDUCATION ? " selected" : ""}
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
  );
}

export default WorkEducation;
