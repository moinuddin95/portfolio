import "./Work.css";
import data from "../../models/work.json";

function Work() {
  return (
    <div id="work">
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.organization}</h2>
          <h3>{item.position}</h3>
          <p>{item.start_date}</p>
          <p>{item.end_date}</p>
          <p>{item.responsibilities}</p>
        </div>
      ))}
    </div>
  );
}

export default Work;
