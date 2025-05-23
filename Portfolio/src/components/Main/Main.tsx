import { useState } from "react";
import WorkEducation from "../WorkEducation/WorkEducation";
import "./Main.css";
import { WorkEducationType } from "../../interfaces/WorkEducation";
import introAnimationHook from "../../hooks/introAnimationHook";

function Main() {
  const [selectedTab, setSelectedTab] = useState(WorkEducationType.WORK);

  return (
    <main>
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
      <WorkEducation tab={selectedTab}/>
    </main>
  );
}

export default Main;
