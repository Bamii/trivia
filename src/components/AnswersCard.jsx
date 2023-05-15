import React from 'react';

export default function AnswersCard({ answers }) {
  return (
    <div className="flex flex-col my-5">
      <div className="text-2xl text-center pb-5">
        you got
        <span className="px-1 text-3xl">
          {answers.filter(({ user_answer, correct_answer }) => user_answer === correct_answer).length}
        </span>
        answers right!
      </div>

      <div>
        {answers.map(({ question, user_answer, correct_answer }) => {
          const border = user_answer === correct_answer ? 'border-green-400 bg-green-100': "border-red-400 bg-red-100";
          return (
            <div className={`text-gray-900 my-7 p-6 rounded border-2 ${border}`}>
              <h3 className="text-2xl pb-3">{question}</h3>
              <h4 className="text-xl">your answer: {user_answer}</h4>
              <h4 className="text-xl">real answer: {correct_answer}</h4>
            </div>
          )})}
      </div>
    </div>
  )
}
