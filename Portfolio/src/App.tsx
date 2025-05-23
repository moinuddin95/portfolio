import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import introAnimationHook from "./hooks/introAnimationHook";

function App() {

  introAnimationHook("header > *, main > *");

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
