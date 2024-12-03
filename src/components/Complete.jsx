import { useContext, useState } from "react";
import { ApiContext } from "../context/api-context-provider";

const Complete = () => {
  const { sentences, tasks } = useContext(ApiContext);

  const [currentTaskId, setCurrentTasksId] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
    if (event.target.value == tasks[currentTaskId].option_one) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const nextSentences = () => {
    setCurrentTasksId((prevId) => prevId + 1); // Előző ID-hoz hozzáad 1-et
    setInputValue("");
    setIsCorrect(false);
  };

  const handleReset = () => {
    setIsCorrect(false);
    setInputValue("");
    setCurrentTasksId(0);
  };

  return (
    <div>
      {sentences.length > 0 && currentTaskId < 13 ? ( //if elág
        <>
          <h2>{sentences[0].sentence}</h2>
          <h3>Gépeld be a megfelelő alakot!</h3>

          <form>
            <label>
              <p>{tasks.length > 0 && tasks[currentTaskId].sentence}</p>
              <p>({tasks.length > 0 && tasks[currentTaskId].basis})</p>
              <input type="text" onChange={handleInput} value={inputValue} />
              <p>{isCorrect ? "✅" : "❌"}</p>
            </label>
          </form>

          <button onClick={nextSentences} disabled={!isCorrect}>
            Következő
          </button>
        </>
      ) : (
        <button onClick={handleReset}>Újra</button>
      )}
    </div>
  );
};

export default Complete;
