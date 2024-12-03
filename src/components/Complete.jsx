import { useContext, useState } from "react";
import { ApiContext } from "../context/api-context-provider";

const Complete = () => {
  const { sentences, tasks } = useContext(ApiContext);
  const [currentTaskId, setCurrentTasksId] = useState(0);

  const [isCorrect, setIsCorrect] = useState(false);

  const handleInput = (event) => {
    if (event.target.value == tasks[currentTaskId].option_one) {
      setIsCorrect(true);
    }
  };

  const nextSentences = () => {
    setCurrentTasksId((prevId) => prevId + 1); // Előző ID-hoz hozzáad 1-et
  };

  return (
    <div>
      {sentences.length > 0 && ( //if elág
        <>
          <h2>{sentences[1].sentence}</h2>
          <h3>Gépeld be a megfelelő alakot!</h3>

          <form>
            <label>
              <p>{tasks.length > 0 && tasks[currentTaskId].sentence}</p>
              <p>({tasks.length > 0 && tasks[currentTaskId].basis})</p>
              <input type="text" onChange={handleInput} />
              <p>{isCorrect ? "✅" : "❌"}</p>
            </label>
          </form>

          <button onClick={nextSentences}>Következő</button>
        </>
      )}
    </div>
  );
};

export default Complete;
