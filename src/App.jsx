import { useState } from "react";

import "./App.css";
import Choose from "./components/Choose";

function App() {
  const [selectedPage, setSelectedPage] = useState(0);

  const handleClickLink = (pageId) => {
    setSelectedPage(pageId);
  };

  return (
    <div className="app">
      <a onClick={() => handleClickLink(1)}>Válaszd ki!</a>
      <a onClick={() => handleClickLink(2)}>Egészítsd ki!</a>
      <a onClick={() => handleClickLink(3)}>Rakd sorba!</a>
    </div>

    {
      if (selectedPage == 1) {
        <Choose/>
      }
    }
  );
}

export default App;
