import { useState, useRef, useEffect } from "react";
import ProjectsTechnologiesType from "../enums/ProjectsTechnologies";
import WorkEducationType from "../enums/WorkEducation";

function resizeContainerHook(
  containerType: ProjectsTechnologiesType | WorkEducationType
) {
  const [selectedTab, setSelectedTab] = useState(
    containerType === ProjectsTechnologiesType.PROJECTS
      ? ProjectsTechnologiesType.PROJECTS
      : WorkEducationType.WORK
  );

  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstOptionRef = useRef<HTMLDivElement | null>(null);
  const secondOptionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      const newHeight =
        selectedTab === ProjectsTechnologiesType.PROJECTS
          ? firstOptionRef.current?.clientHeight
          : secondOptionRef.current?.clientHeight;
      if (containerRef.current && newHeight !== undefined) {
        containerRef.current.style.height = `${newHeight}px`;
      }
    };
    const activeRef =
      selectedTab === ProjectsTechnologiesType.PROJECTS
        ? firstOptionRef.current
        : secondOptionRef.current;

    if (!activeRef) return;

    // ResizeObserver will trigger when the element's size changes (including initial render)
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });
    resizeObserver.observe(activeRef);

    window.addEventListener("resize", updateHeight);

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      window.removeEventListener("resize", updateHeight);
    };
  }, [selectedTab]);

  return {
    selectedTab,
    setSelectedTab,
    containerRef,
    firstOptionRef,
    secondOptionRef,
  };
}

export default resizeContainerHook;
