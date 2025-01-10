import { useState } from "react";
import Heading from "./components/heading";
import Question from "./components/Question";
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
        <div>
          <button className="submit">SUBMIT</button>
        </div>
      </div>
    </>
  );
}

export default App;
