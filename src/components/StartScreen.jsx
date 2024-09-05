// import React from "react";

// export default function StartScreen({
//   numQuestions,
//   dispatch,
//   difficultyLevel,
// }) {
//   return (
//     <div>
//       <div className="filter">
//         <select
//           value={difficultyLevel}
//           onChange={(e) =>
//             dispatch({ type: "setLevel", payload: e.target.value })
//           }
//         >
//           <option value="" disabled>
//             Select difficulty
//           </option>
//           <option value="100">All</option>
//           <option value="10">Easy</option>
//           <option value="20">Medium</option>
//           <option value="30">Hard</option>
//         </select>
//       </div>
//       <h3>{numQuestions} questions to test your React mastery</h3>
//       <button
//         className="btn btn-ui"
//         onClick={() => dispatch({ type: "start" })}
//       >
//         Let's start
//       </button>
//     </div>
//   );
// }

import React from "react";
import { LEVELS } from "../QuizContext/QuizContext";
import { useQuestion } from "../QuizContext/QuizContext";

export default function StartScreen({ numQuestions }) {
  // const handleSelectChange = (event) => {
  //    const selectedLevel = event.target.value;
  //    dispatch({ type: "setDifficulty", payload: selectedLevel });
  // };

  const { dispatch, level } = useQuestion();

  return (
    <div className="start">
      <h2>Welcome To The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <div className="filter">
        <label htmlFor="difficulty">Choose difficulty level: </label>
        <select
          id="difficulty"
          value={level}
          onChange={(e) =>
            dispatch({ type: "setDifficulty", payload: e.target.value })
          }
          className="select-input"
        >
          <option value={LEVELS.ALL}>ALL</option>
          <option value={LEVELS.EASY}>Easy</option>
          <option value={LEVELS.MEDIUM}>Medium</option>
          <option value={LEVELS.HARD}>Hard</option>
        </select>
      </div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}
