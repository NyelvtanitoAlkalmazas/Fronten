import { createContext, useEffect, useState } from "react";
import { fetchData } from "../http";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [sentences, setSentences] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchSentences = async () => {
      try {
        const data = await fetchData("/sentences");
        setSentences(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchTasks = async () => {
      try {
        const data = await fetchData("/tasks");
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
    fetchSentences();
  }, []);

  return (
    <ApiContext.Provider value={{ sentences, tasks }}>
      {children}
    </ApiContext.Provider>
  );
};
