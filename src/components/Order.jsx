import { useContext, useState, useEffect, useMemo } from "react";
import { ApiContext } from "../context/api-context-provider";

const Order = () => {
  const [currentTaskId, setCurrentTasksId] = useState(0);
  const { tasks } = useContext(ApiContext);

  const currentTask = useMemo(
    () => tasks[currentTaskId] || null,
    [tasks, currentTaskId]
  );
  const correctAnswer = useMemo(
    () => currentTask?.option_one || null,
    [currentTask]
  );
  const correctSentence = useMemo(
    () => (currentTask ? currentTask.sentence.replace("_", correctAnswer) : ""),
    [currentTask, correctAnswer]
  );
  const derivedWords = useMemo(
    () => correctSentence.split(" "),
    [correctSentence]
  );
  const lastThreeWords = useMemo(() => derivedWords.slice(-3), [derivedWords]);
  const halfSentence = useMemo(
    () => derivedWords.slice(0, -3).join(" "),
    [derivedWords]
  );

  const [words, setWords] = useState({
    pickedWords: [],
    correctWords: [],
    isCorrect: false,
  });

  const [randomWords, setRandomWords] = useState([]);

  useEffect(() => {
    if (lastThreeWords.length) {
      const shuffledWords = [...lastThreeWords].sort(() => Math.random() - 0.5);
      setRandomWords(shuffledWords);

      setWords({
        pickedWords: [],
        correctWords: lastThreeWords,
        isCorrect: false,
      });
    }
  }, [lastThreeWords]);

  const addWord = (event) => {
    const word = event.target.value;

    setWords((prevState) => {
      const pickedWords = [...prevState.pickedWords, word];

      const isCorrect = pickedWords.join() === prevState.correctWords.join();

      if (isCorrect) {
        setCurrentTasksId((prevId) => prevId + 1);
      }

      return {
        ...prevState,
        pickedWords,
        isCorrect,
      };
    });
  };

  return (
    <div>
      {currentTask ? (
        <>
          <h2>{halfSentence}</h2>
          <div>
            {randomWords.map((word, i) => (
              <button key={i} onClick={addWord} value={word}>
                {word}
              </button>
            ))}
          </div>
          <div>
            <p>Kiválasztott szavak: {words.pickedWords.join(" ")}</p>
          </div>
        </>
      ) : (
        <button>újra</button>
      )}
    </div>
  );
};

export default Order;
