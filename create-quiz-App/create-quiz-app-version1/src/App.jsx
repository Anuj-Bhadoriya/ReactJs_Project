import { useState } from "react";
import Heading from "./components/heading";
import Question from "./components/Question";
import Score from "./components/Score";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-container">
        <Heading></Heading>
        <Question></Question>
      </div>
    </>
  );
}

export default App;
