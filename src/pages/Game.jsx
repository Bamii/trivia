import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTrivia, answerCurrentQuestion } from "../features/trivia/triviaSlice";
import { GameCard, AnswersCard, PageLoaderWrapper, Link } from "../components";

export default function Game() {
  const dispatch = useDispatch();
  const { done, loading, questions, currentQuestion, answers, error } = useSelector(selectTrivia);

  const answerQuestion = (answer) => {
    dispatch(answerCurrentQuestion(answer))
  }

  return (
    <div className="mx-auto">
      <PageLoaderWrapper
        error={error}
        loading={loading}
        errorText="error fetching your trivia questions..."
        loadingText="please wait a second, we're loading your trivia questions..."
      >
        {done
          ? <AnswersCard answers={answers} />
          : <GameCard
              index={currentQuestion+1}
              question={questions[currentQuestion]}
              answerQuestion={answerQuestion}
            />}
      </PageLoaderWrapper>

      {!loading &&
        <div className="mx-auto pb-10 text-center">
          <Link className="bg-black-100 text-2xl" to="/">
            {done ? 'play again!' :'go home!'}
          </Link> 
        </div>}
    </div>
  )
}
