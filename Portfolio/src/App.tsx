import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import introAnimationHook from "./hooks/introAnimationHook";
import { useEffect } from "react";

function App() {
  introAnimationHook("header > *, main > *");

  useEffect(() => {
    if (window.innerWidth < 1000) return;
    const circles = document.querySelectorAll(".circle");
    let delay = 1;
    circles.forEach((circle, index) => {
      const circleElem = circle as HTMLElement;
      circleElem.style.transform = `translateX(-50%) translateY(-50%) scale(${
        (circles.length - index) / circles.length
      })`;
      circleElem.style.transition = `top ${delay}ms ease, left ${delay}ms ease`;
      delay += 15;
      const moveCircles = (event: MouseEvent) => {
        circleElem.style.display = "block";
        circleElem.style.top = `${event.clientY}px`;
        circleElem.style.left = `${event.clientX}px`;
      };
      window.addEventListener("mousemove", moveCircles);
      window.addEventListener("mouseout", () => {
        circleElem.style.display = "none";
      });
    });
  }, []);

  return (
    <>
      <div id="background"></div>
      <Header />
      <Main />

      <div id="pointer">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </>
  );
}

export default App;
