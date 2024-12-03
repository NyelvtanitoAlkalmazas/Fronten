import { useContext, useState } from "react";
import { ApiContext } from "../context/api-context-provider";

const Order = () => {
  const [currentTaskId, setCurrentTasksId] = useState(0);
  const { sentences, tasks } = useContext(ApiContext);

  const currentTask = tasks[currentTaskId] || null;
  const correctAnswer = currentTask ? currentTask.option_one : null;

  const correctSentence = currentTask.sentence.replace("_", correctAnswer);
  const derrivedWords = correctSentence.split(" ");

  const lastThreeWords = derrivedWords.slice(-3);
  const halfSentence = derrivedWords.slice(0, -3).join(" ");

  const [words, setWords] = useState({
    pickedWords: [],
    correctWords: [...lastThreeWords],
  });

  const [randomWords] = useState(
    lastThreeWords.sort(() => Math.random() - 0.5)
  );

  const addWord = (event) => {
    const word = event.target.value;

    if (words.pickedWords.length < 3) {
      setWords((prevState) => ({
        ...prevState,
        pickedWords: [...prevState.pickedWords, word],
      }));
    }
  };

  console.log(words);

  return (
    <div>
      <h2>{halfSentence}</h2>

      {randomWords.map((word, i) => (
        <button key={i} onClick={addWord} value={word}>
          {word}
        </button>
      ))}
    </div>
  );
};

export default Order;
