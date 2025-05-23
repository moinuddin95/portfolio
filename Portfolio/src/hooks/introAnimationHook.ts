import { useEffect } from "react";

function introAnimationHook(query: string){
  useEffect(() => {
    const childElem = document.querySelectorAll(query);
    for(let i = 0; i < childElem.length; i++){
      setTimeout(() => {childElem[i].classList.add("introAnimation");}, i * 400);
    }
  }, []);
}

export default introAnimationHook;