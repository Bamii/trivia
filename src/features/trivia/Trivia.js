import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectTrivia, fetchTrivia, answerCurrentQuestion, startNewGame } from "./triviaSlice";
import { GameCard } from "../../components";

export default function Trivia() {
  const { done, loading, questions, currentQuestion, answers } = useSelector(selectTrivia);
  const dispatch = useDispatch();

  useEffect(() => {
    if(done && questions.length === 0)
      dispatch(fetchTrivia())
  }, [done, questions])

  const answerQuestion = (answer) => {
    dispatch(answerCurrentQuestion(answer))
  }

  const _startNewGame = () => {
    dispatch(startNewGame())
    window.location.assign('/')
  }

  return (
    <div>
      {loading
        ? "please wait a second, we're loading your trivia questions"
        : done
          ? <>
              <span> your results are...</span> 
              <div>
                {answers.map(({ question, user_answer, correct_answer }) => (
                  <div>
                    <h3>{question}</h3>
                    <h4>your answer == {user_answer}</h4>
                    <h4>real answer == {correct_answer}</h4>
                  </div>
                ))}
              </div>
              <div onClick={_startNewGame}>reset game</div>
            </>
          : <GameCard
              index={currentQuestion+1}
              question={questions[currentQuestion]}
              answerQuestion={answerQuestion}
            />}
    <Link to="/">Go home.</Link>
    </div>
  )
}