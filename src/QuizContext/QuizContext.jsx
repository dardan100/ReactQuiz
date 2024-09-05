import { createContext, useContext, useEffect, useReducer } from "react";

const QuestionContext = createContext();

export const LEVELS = {
  ALL: "ALL",
  EASY: "10",
  MEDIUM: "20",
  HARD: "30",
};

const initialState = {
  questions: [],
  filterQuestions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,

  level: LEVELS.ALL,
};
const SECS_PER_QUESTION = 30;

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        filterQuestions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return { ...state, status: "error" };

    case "setDifficulty":
      const filterQuestions =
        action.payload === LEVELS.ALL
          ? state.questions
          : state.questions.filter(
              (question) => question.points === Number(action.payload)
            );
      return {
        ...state,
        level: action.payload,
        filterQuestions: filterQuestions,
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.filterQuestions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.filterQuestions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "appFinished":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "reset":
      return {
        ...initialState,
        questions: state.questions,
        filterQuestions: state.questions,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Unknown action");
  }
}

function QuestionProvider({ children }) {
  const [
    {
      status,
      index,
      answer,
      points,
      highscore,
      secondsRemaining,

      filterQuestions,
      level,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch(`http://localhost:1000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <QuestionContext.Provider
      value={{
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        dispatch,
        filterQuestions,
        level,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

function useQuestion() {
  const context = useContext(QuestionContext);
  if (context === undefined) throw new Error("Outside the Provider");
  return context;
}

export { QuestionProvider, useQuestion };
