import React from "react";
import { useQuestion } from "../QuizContext/QuizContext";

export default function NextQuestion({ index, numQuestions }) {
  const { dispatch, answer } = useQuestion();

  if (answer === null) return null;

  return (
    <div>
      {index + 1 === numQuestions ? (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "appFinished" })}
        >
          Finish
        </button>
      ) : (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      )}
    </div>
  );
}
