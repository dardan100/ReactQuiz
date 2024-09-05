// // import Header from "./components/Header";
// // import Main from "./components/Main";
// // import { useReducer } from "react";
// // import { useEffect } from "react";
// // import Error from "./components/Error";
// // import Loader from "./components/Loader";
// // import StartScreen from "./components/StartScreen";
// // import Question from "./components/Question";
// // import NextQuestion from "./components/NextQuestion";
// // import Progress from "./components/Progress";
// // import Footer from "./components/Footer";
// // import FinishScreen from "./components/FinishScreen";
// // import Timer from "./components/Timer";
// // // import DateCounter from "./components/DateCounter";

// // const SECONDS_PER_QUESTION = 30;

// // const initialState = {
// //   questions: [],

// //   //loading, error, ready, active, finished
// //   status: "loading",
// //   index: 0,
// //   answer: null,
// //   points: 0,
// //   highscore: 0,
// //   secondRemainings: null,
// // };

// // function reducer(state, action) {
// //   switch (action.type) {
// //     case "dataRecived":
// //       return {
// //         ...state,
// //         questions: action.payload,
// //         status: "ready",
// //       };
// //     case "dataFaild":
// //       return {
// //         ...state,
// //         status: "error",
// //       };
// //     case "start":
// //       return {
// //         ...state,
// //         status: "active",
// //         secondRemainings: state.questions.length * SECONDS_PER_QUESTION,
// //       };
// //     case "newAnswer":
// //       // eslint-disable-next-line no-case-declarations
// //       const question = state.questions.at(state.index);

// //       return {
// //         ...state,
// //         answer: action.payload,
// //         points:
// //           action.payload === question.correctOption
// //             ? state.points + question.points
// //             : state.points,
// //       };
// //     case "nextQuestion":
// //       return {
// //         ...state,
// //         index: state.index + 1,
// //         answer: null,
// //       };
// //     case "finish":
// //       return {
// //         ...state,
// //         status: "finished",
// //         highscore:
// //           state.points > state.highscore ? state.points : state.highscore,
// //       };
// //     case "restart":
// //       return { ...initialState, questions: state.questions, status: "ready" };
// //     case "tick":
// //       return {
// //         ...state,
// //         secondRemainings: state.secondRemainings - 1,
// //         status: state.secondRemainings === 0 ? "finished" : state.status,
// //       };
// //     default:
// //       throw new Error("Action unknown");
// //   }
// // }

// // export default function App() {
// //   const [
// //     { questions, status, index, answer, points, highscore, secondRemainings },
// //     dispatch,
// //   ] = useReducer(reducer, initialState);

// //   console.log(questions[index]);
// //   const numQuestions = questions.length;
// //   const maxPossiblePoints = questions.reduce(
// //     (prev, cur) => prev + cur.points,
// //     0
// //   );

// //   useEffect(function () {
// //     fetch("http://localhost:9000/questions")
// //       .then((res) => res.json())
// //       .then((data) => dispatch({ type: "dataRecived", payload: data }))
// //       // eslint-disable-next-line no-unused-vars
// //       .catch((err) => dispatch({ type: "dataFaild" }));
// //   }, []);
// //   return (
// //     <div className="app">
// //       <Header />

// //       <Main>
// //         {status === "loading" && <Loader />}
// //         {status === "error" && <Error />}
// //         {status === "ready" && (
// //           <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
// //         )}
// //         {status === "active" && (
// //           <>
// //             <Progress
// //               numQuestions={numQuestions}
// //               answer={answer}
// //               index={index}
// //               points={points}
// //               maxPossiblePoints={maxPossiblePoints}
// //             />
// //             <Question
// //               question={questions[index]}
// //               dispatch={dispatch}
// //               answer={answer}
// //             />
// //             <Footer>
// //               <Timer dispatch={dispatch} secondRemainings={secondRemainings} />
// //               <NextQuestion
// //                 dispatch={dispatch}
// //                 answer={answer}
// //                 index={index}
// //                 numQuestion={numQuestions}
// //               />
// //             </Footer>
// //           </>
// //         )}
// //         {status === "finished" && (
// //           <>
// //             <FinishScreen
// //               points={points}
// //               maxPossiblePoints={maxPossiblePoints}
// //               highscore={highscore}
// //               dispatch={dispatch}
// //             />
// //           </>
// //         )}
// //       </Main>
// //     </div>
// //   );
// //   // return <DateCounter />;
// // }

// // import React from 'react'

// // export default function App() {
// //   return <div>App</div>;
// // }

// // // export default App;

// // import React from "react";
// import { useReducer } from "react";
// import { useEffect } from "react";
// import Header from "./components/Header";
// import StartScreen from "./components/StartScreen";
// import Main from "./components/Main";
// import Question from "./components/Question";
// import NextQuestion from "./components/NextQuestion";
// import Progress from "./components/Progress";

// const initialState = {
//   questions: [],

//   // loading,error,ready,active,finished,
//   status: "loading",
//   index: 0,
//   answer: null,
//   points: 0,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "displayQuestions":
//       return { ...state, questions: action.payload, status: "ready" };
//     case "start":
//       return { ...state, status: "active" };
//     case "newAnswer":
//       // eslint-disable-next-line no-case-declarations
//       const question = state.questions.at(state.index);
//       return {
//         ...state,
//         answer: action.payload,
//         points:
//           action.payload === question.correctOption
//             ? state.points + question.points
//             : state.points,
//       };
//     case "nextQuestion":
//       return { ...state, index: state.index + 1, answer: null };
//   }
// }

// export default function App() {
//   const [{ questions, status, answer, index, points }, dispatch] = useReducer(
//     reducer,
//     initialState
//   );

//   const numQuestion = questions.length;
//   const maxPossiblePoints = questions.reduce(
//     (prev, cur) => prev + cur.points,
//     0
//   );

//   useEffect(function () {
//     fetch("http://localhost:5000/question")
//       .then((res) => res.json())
//       .then((data) => dispatch({ type: "displayQuestions", payload: data }));
//   }, []);

//   return (
//     <div className="app">
//       <Header />
//       <Main>
//         {status === "ready" && (
//           <StartScreen dispatch={dispatch} numQuestion={numQuestion} />
//         )}
//         {status === "active" && (
//           <>
//             <Progress
//               maxPossiblePoints={maxPossiblePoints}
//               numQuestion={numQuestion}
//               points={points}
//               index={index}
//               answer={answer}
//             />
//             <Question question={questions[index]} />
//             <NextQuestion
//               dispatch={dispatch}
//               answer={answer}
//               index={index}
//               numQuestion={numQuestion}
//             />
//           </>
//         )}
//       </Main>
//     </div>
//   );
// }

// import DateCounter from "./components/DateCounter";

// import React, { useEffect, useReducer } from "react";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Error from "./components/Error";
// import Loader from "./components/Loader";
// import StartScreen from "./components/StartScreen";
// import Question from "./components/Question";
// import NextQuestion from "./components/NextQuestion";
// import Progress from "./components/Progress";
// import FinishScreen from "./components/FinishScreen";
// import Timer from "./components/Timer";

// const initialState = {
//   questions: [],
//   filteredQuestion: [],
//   status: "loading",
//   index: 0,
//   answer: null,
//   points: 0,
//   highscore: 0,
//   secondsRemaining: null,
//   difficultyLevel: "",
// };
// const SECS_PER_QUESTION = 30;

// function reducer(state, action) {
//   switch (action.type) {
//     case "dataReceived":
//       return {
//         ...state,
//         questions: action.payload,
//         filteredQuestion: action.payload,
//         status: "ready",
//       };
//     case "dataFailed":
//       return { ...state, status: "error" };
//     case "start":
//       return {
//         ...state,
//         status: "active",
//         secondsRemaining: state.filteredQuestion.length * SECS_PER_QUESTION,
//       };
//     case "setLevel":
//       return {
//         ...state,
//         difficultyLevel: action.payload,
//         filteredQuestion:
//           action.payload === "100"
//             ? [...state.questions]
//             : state.questions.filter(
//                 (ques) => ques.question === Number(action.payload)
//               ),
//       };

//     case "newAnswer":
//       const question = state.filteredQuestion.at(state.index);
//       return {
//         ...state,
//         answer: action.payload,
//         points:
//           action.payload === question.correctOption
//             ? state.points + question.points
//             : state.points,
//       };

//     case "nextQuestion":
//       return { ...state, index: state.index + 1, answer: null };
//     case "appFinished":
//       return {
//         ...state,
//         status: "finished",
//         highscore:
//           state.points > state.highscore ? state.points : state.highscore,
//       };
//     case "reset":
//       return {
//         ...initialState,
//         status: "ready",
//         questions: state.questions,
//       };
//     case "tick":
//       return {
//         ...state,
//         secondsRemaining: state.secondsRemaining - 1,
//         status: state.secondsRemaining === 0 ? "finished" : state.status,
//       };

//     default:
//       throw new Error("Unknown action");
//   }
// }

// export default function App() {
//   const [
//     {
//       questions,
//       filteredQuestion,
//       status,
//       index,
//       answer,
//       points,
//       highscore,
//       secondsRemaining,
//       level,
//       difficultyLevel,
//     },
//     dispatch,
//   ] = useReducer(reducer, initialState);
//   const numQuestions = filteredQuestion.length;
//   const maxPossiblePoints = questions.reduce(
//     (prev, cur) => prev + cur.points,
//     0
//   );
//   console.log(difficultyLevel);

//   useEffect(function () {
//     fetch(`http://localhost:1000/questions`)
//       .then((res) => res.json())
//       .then((data) => dispatch({ type: "dataReceived", payload: data }))
//       .catch(dispatch({ type: "dataFailed" }));
//   }, []);

//   return (
//     <div className="app">
//       <Header />
//       <Main>
//         {status === "loading" && <Loader />}
//         {status === "error" && <Error />}
//         {status === "ready" && (
//           <StartScreen
//             numQuestions={numQuestions}
//             dispatch={dispatch}
//             level={level}
//             difficultyLevel={difficultyLevel}
//           />
//         )}
//         {status === "active" && (
//           <>
//             <Progress
//               index={index}
//               numQuestions={numQuestions}
//               points={points}
//               maxPossiblePoints={maxPossiblePoints}
//               answer={answer}
//             />
//             <Question
//               question={questions[index]}
//               answer={answer}
//               dispatch={dispatch}
//             />
//             {
//               <>
//                 <Timer
//                   dispatch={dispatch}
//                   secondsRemaining={secondsRemaining}
//                 />
//                 <NextQuestion
//                   dispatch={dispatch}
//                   answer={answer}
//                   index={index}
//                   numQuestions={numQuestions}
//                 />
//               </>
//             }
//           </>
//         )}
//         {status === "finished" && (
//           <FinishScreen
//             points={points}
//             maxPossiblePoints={maxPossiblePoints}
//             highscore={highscore}
//             dispatch={dispatch}
//           />
//         )}
//       </Main>
//     </div>
//   );
// }

import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Error from "./components/Error";
import Loader from "./components/Loader";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextQuestion from "./components/NextQuestion";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer";
import { useQuestion } from "./QuizContext/QuizContext";

export default function App() {
  const { filterQuestions, status, index } = useQuestion();

  console.log(filterQuestions);

  const numQuestions = filterQuestions.length;
  const maxPossiblePoints = filterQuestions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen numQuestions={numQuestions} />}
        {status === "active" && (
          <>
            <Progress
              numQuestions={numQuestions}
              maxPossiblePoints={maxPossiblePoints}
            />
            <Question question={filterQuestions[index]} />
            {
              <>
                <Timer />
                <NextQuestion index={index} numQuestions={numQuestions} />
              </>
            }
          </>
        )}
        {status === "finished" && (
          <FinishScreen maxPossiblePoints={maxPossiblePoints} />
        )}
      </Main>
    </div>
  );
}
