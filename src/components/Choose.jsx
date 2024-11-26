import { useContext, useState } from "react";
import { ApiContext } from "../context/api-context-provider";

const Choose = () => {
  const { sentences } = useContext(ApiContext);

  const [currentTaskId, setCurrentTasksId] = useState(0);

  return (
    <div>
      {sentences.length > 0 &&  ( //if elág
        <>
          <h2>{sentences[0].sentence}</h2>
          <button>Következő</button>
        </>
      )}
    </div>
  );
};

export default Choose;
