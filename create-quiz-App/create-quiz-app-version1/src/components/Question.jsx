//import "./components/QuestionBank.module.css"
import { useState } from "react";
import { QuestionBank } from "./QuestionBank";
import Score from "./Score";

function Questions() {
  const [Count, setCount] = useState(0);
  const[Scores,setScores] = useState(0);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [varCheck, setvarCheck] = useState(0);
  const [selectOption, setselectOption] = useState(0);
  const [showResult, setshowResult] = useState(false);

  const QuestionChanged = () => {
    UpdateScore();
    if (currentQuestion < QuestionBank.length - 1) {
      setcurrentQuestion(currentQuestion + 1);
    } else {
      setshowResult(true);
    }
  };

  const UpdateScore = ()=>{  
    if(QuestionBank[currentQuestion].Answer === String(selectOption)){
     setScores(Scores + 1)
    }
  }

  return (
    <>
      <div className="selectany">
        {showResult ? (
          <Score Scores={Scores} totalQuestion={QuestionBank.length}></Score>
        ) : (
          <>
            <div className="heading3">
              <span>{currentQuestion + 1}</span>
              <span> {QuestionBank[currentQuestion].Question} </span>
            </div>

            <div>
              {QuestionBank[currentQuestion].option.map((option, i) => {
                return (
                  <div key={i}>
                    <input
                      type="radio"
                      id={i}
                      name="question"
                      value={selectOption}
                      onClick={() => setselectOption(i)}
                    />
                    <label htmlFor={i}>{option}</label>
                    <br />
                  </div>
                );
              })}
            </div>

            <button className="submit" onClick={() => QuestionChanged()}>
              SUBMIT
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Questions;
