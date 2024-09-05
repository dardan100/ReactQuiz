import React from "react";
import Option from "./Option";
import { useQuestion } from "../QuizContext/QuizContext";

export default function Question({ question }) {
  const { answer, dispatch } = useQuestion();
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}
