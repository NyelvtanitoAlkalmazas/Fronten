import { useContext, useState } from "react";
import { ApiContext } from "../context/api-context-provider";

const Order = () => {
  const [currentTaskId, setCurrentTasksId] = useState(0);
  const [pickedWords, setPickedWords]= useState([]);

  const { sentences, tasks } = useContext(ApiContext);

  const currentTask = tasks[currentTaskId] || null;
  const correctAnswer = currentTask ? currentTask.option_one : null;

  const correctSentence = currentTask.sentence.replace("_", correctAnswer);
  const words = correctSentence.split(" ");
  const lastThreeWords = words.slice(-3);
  lastThreeWords.sort(() => Math.random() - 0.5);

  const halfSentence = words.slice(0, -3).join(" ");
 
  const addWord = (event) => {
    const word = event.target.value
    setPickedWords((prevPickedWord)=>
      ([...prevPickedWord, word])
  )
   }

  return (
    <div>
      <h2>{halfSentence}</h2>

      {lastThreeWords.map((word, i) => (
        <button key={i} onClick={addWord} value={word}>{word}</button>
      ))}
    </div>
  );
};

export default Order;
