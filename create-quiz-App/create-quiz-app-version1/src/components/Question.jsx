//import "./components/QuestionBank.module.css"
import { useState } from "react";
import { QuestionBank } from "./QuestionBank";

function Questions() {
  const [Count, setCount] = useState(0);
  const [varCheck, setvarCheck] = useState(0);
  const selectedAnswer = (event) => {
    let option = event.target.value;
    console.log(`${option}`);
  };
  const selectOption = () => {};

  return (
    <>
      <div className="selectany">
        <div className="heading3">What is the capital of Haryana?</div>
        <div>
          {QuestionBank[0].option.map((option, i) => {
            return (
              <div key={i}>
                <input
                  type="radio"
                  id={i}
                  name="question"
                  value={option}
                  onClick={selectedAnswer}
                />
                <label htmlFor={i} key={i}>
                  {option}
                </label>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Questions;
