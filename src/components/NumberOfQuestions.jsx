function NumberOfQuestions({ maxNumQuestions, numQuestions, dispatch }) {
  return (
    <div>
      <label htmlFor="numQuestions" className="form-label">
        Choose number of questions to test your React mastery:
      </label>
      <input
        type="number"
        id="numQuestions"
        min={0}
        max={maxNumQuestions}
        value={numQuestions}
        onChange={(e) =>
          dispatch({ type: "setNumQuestions", payload: e.target.value })
        }
      />
    </div>
  );
}

export default NumberOfQuestions;
