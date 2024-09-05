import { useReducer } from "react";
import { useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "defineCount":
      return { ...state, count: action.payLoad };
    case "defineStep":
      return { ...state, step: action.payLoad };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}
const initialState = { count: 0, step: 1 };

function DateCounter() {
  const [{ count, step }, dispatch] = useReducer(reducer, initialState);

  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  console.log(count, step);

  function inc() {
    // setCount((c) => c + step);
    dispatch({ type: "inc" });
  }
  function dec() {
    // setCount((c) => c - step);
    dispatch({ type: "dec" });
  }

  function defineCount(e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "defineCount", payLoad: Number(e.target.value) });
  }

  function defineStep(e) {
    // setStep(Number(e.target.value));
    dispatch({ type: "defineStep", payLoad: Number(e.target.value) });
  }

  function reset() {
    dispatch({ type: "reset" });
  }

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min={0}
          max="10"
          onChange={defineStep}
          value={step}
        />

        <span style={{ fontSize: 24, marginLeft: 10 }}>{step}</span>
      </div>

      <div>
        <button style={{ width: 25 }} onClick={dec}>
          -
        </button>
        <input type="text" value={count} onChange={defineCount} />
        <button style={{ width: 25 }} onClick={inc}>
          +
        </button>
      </div>

      <p style={{ fontSize: 25 }}>{date.toDateString()}</p>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
