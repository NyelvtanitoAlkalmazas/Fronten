import { useContext } from "react";
import { ApiContext } from "../context/api-context-provider";
import CurrentChooseTask from "./CurrentChooseTask";

const Choose = () => {
  const { sentences } = useContext(ApiContext);

  return (
    <div>
      {sentences.length > 0 && (
        <>
          <h2>{sentences[0].sentence}</h2>
          <CurrentChooseTask />
        </>
      )}
    </div>
  );
};

export default Choose;
