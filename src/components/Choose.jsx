import { useContext, useState } from "react";
import { ApiContext } from "../context/api-context-provider";

const Choose = () => {
  const defaultSelectValue = "--válassz--";

  const { sentences, tasks } = useContext(ApiContext);

  const [currentTaskId, setCurrentTaskId] = useState(0);
  const [taskState, setTaskState] = useState({
    feedBack: "❔",
    selectValue: defaultSelectValue,
    isDisabled: true,
  });

  const currentTask = tasks[currentTaskId] || null;

  const correctAnswer = currentTask ? currentTask.option_one : null;

  const options = currentTask
    ? [
        currentTask.option_one,
        currentTask.option_two,
        currentTask.option_three,
        currentTask.option_four,
      ].filter(Boolean)
    : [];

  options.sort(() => Math.random() - 0.5);

  const handleClickNext = () => {
    setCurrentTaskId((prevId) => ++prevId);

    setTaskState((prevTask) => ({
      ...prevTask,
      feedBack: "❔",
      isDisabled: true,
    }));
  };

  const handleSelectAnswer = (event) => {
    const selectedValue = event.target.value;

    let feedBack;
    let isDisabled = true;

    if (selectedValue === defaultSelectValue) {
      feedBack = "❔";
    } else if (selectedValue === correctAnswer) {
      feedBack = "✅";
      isDisabled = false;
    } else {
      feedBack = "❌";
    }

    setTaskState({
      feedBack,
      selectValue: selectedValue,
      isDisabled,
    });
  };

  const handleReset = () => {
    setCurrentTaskId(0);
    setTaskState((prevState) => ({ ...prevState, isDisabled: true }));
  };

  return (
    <div>
      {sentences.length > 0 && (
        <>
          <h2>{sentences[0].sentence}</h2>
          <div>
            {tasks.length && currentTaskId < 7 ? (
              <>
                <p>{currentTask.sentence}</p>
                <select
                  onChange={handleSelectAnswer}
                  value={taskState.selectValue}
                >
                  <option>{defaultSelectValue}</option>
                  {options.map((option, i) => (
                    <option key={i}>{option}</option>
                  ))}
                </select>
                <span>{taskState.feedBack}</span>
                <button
                  onClick={handleClickNext}
                  disabled={taskState.isDisabled}
                >
                  Következő!
                </button>
              </>
            ) : (
              <button onClick={handleReset}>Újra</button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Choose;
