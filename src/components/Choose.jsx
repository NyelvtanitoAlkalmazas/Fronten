import { useContext, useState } from "react";
import { ApiContext } from "../context/ApiContext";

const Choose = () => {
  const { sentences } = useContext(ApiContext);
  console.log(sentences);

  const [currentTaskId, setCurrentTasksId] = useState(0);

  return (
    <div>
      <h2>{sentences[0].sentence}</h2>
      <button>Következő</button>
    </div>
  );
};

export default Choose;
