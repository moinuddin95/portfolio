import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import introAnimationHook from "./hooks/introAnimationHook";
import { useEffect } from "react";

function App() {
  introAnimationHook("header > *, main > *");

  useEffect(() => {
    const circles = document.querySelectorAll(".circle");
    let delay = 1;
    circles.forEach((circle, index) => {
      const circleElem = circle as HTMLElement;
      circleElem.style.scale = `${(circles.length - index) / circles.length}`;
      circleElem.style.transition = `top ${delay}ms ease, left ${delay}ms ease`;
      delay += 15;
      const moveCircles = (event: MouseEvent) => {
        const pointerBorder = 10;
        if (
          event.clientX <= pointerBorder ||
          event.clientX >= window.innerWidth - pointerBorder ||
          event.clientY <= pointerBorder ||
          event.clientY >= window.innerHeight - pointerBorder
        ) {
          circleElem.style.display = "none";
          return;
        }
        circleElem.style.display = "block";
        circleElem.style.top = `${event.clientY}px`;
        circleElem.style.left = `${event.clientX}px`;
      };
      window.addEventListener("mousemove", moveCircles);
    });
  }, []);

  return (
    <>
      <div id="background">
        <Header />
        <Main />
      </div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </>
  );
}

export default App;
