import "./Work.css";
import data from "../../models/work.json";

function Work() {
  return (
    <div id="work">
      {data.map((item, index) => (
        <div key={index} className="work card">
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
  );
}

export default Work;
