import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectTrivia, fetchTrivia } from "../features/trivia/triviaSlice";
import { Link, Button } from "../components";

export default function Home() {
  const dispatch = useDispatch()
  const { done, questions } = useSelector(selectTrivia);
  const navigate = useNavigate()

  function startGame(e) {
    // e.preventDefault()
    dispatch(fetchTrivia())
    navigate('/game')
  }

  return (
    <div className="flex flex-col items-center justify-center text-center m-auto">
      <div className="text-5xl pb-4">let's trivia!</div>
      <div className="text-4xl py-4 cursive">
        10 questions shall be presented to you... <br/>
        you have 1 chance <br/> 
        how many can you vanquish?
      </div>
      <div className='pt-5 text-xl flex flex-col'>
        <Button onClick={startGame}>start new game!</Button>
        {!done
          ? <Link to='/game'> continue previous game </Link>
          : done && questions.length !== 0 && <Link to='/game'> view previous score </Link>}
      </div>
    </div>
  )
}