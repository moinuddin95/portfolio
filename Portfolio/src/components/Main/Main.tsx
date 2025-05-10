import { useState } from "react";
import Work from "../Work/Work";
import "./Main.css";

function Main() {
  const [selectedTab, setSelectedTab] = useState(0);
  // 0 -> Work
  // 1 -> Education
  // 2 -> Projects
  return (
    <main>
      <nav>
        <button className={selectedTab === 0 ? "selected" : ""} 
          onClick={() => setSelectedTab(0)}>
          <h3>Work</h3>
        </button>
        <button className={selectedTab === 1 ? "selected" : ""} 
          onClick={() => setSelectedTab(1)}>
          <h3>Education</h3>
        </button>
        <button className={selectedTab === 2 ? "selected" : ""} 
          onClick={() => setSelectedTab(2)}>
          <h3>Projects</h3>
        </button>
      </nav>
      <Work />
    </main>
  );
}

export default Main;
