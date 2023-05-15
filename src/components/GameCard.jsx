import React from 'react';
import { Button } from "../components";

export default function GameCard({
  index, answerQuestion, question: { question, possible_answers }
}) {
  return (
    <div className="flex flex-col min-w-prose">
      <div className="py-2 text-3xl cursive"> question {index} of 10! </div>
      <div className="py-12 text-3xl">{question}</div>
      <div className="max-w-max mx-auto py-3">
        {possible_answers.map(text => (
          <Button
            key={text}
            className="px-3 text-xl" 
            onClick={() => { answerQuestion(text) }}
          >
            {text}
          </Button>
        ))}
      </div>
    </div>
  )
}
