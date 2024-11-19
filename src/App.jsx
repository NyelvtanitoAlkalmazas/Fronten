import { useState } from "react";

import "./App.css";
import Choose from "./components/Choose";
import Complete from "./components/Complete";
import Order from "./components/Order";
import Nav from "./components/Nav";

function App() {
  const [selectedPage, setSelectedPage] = useState(1);

  const handleClickLink = (pageId) => {
    setSelectedPage(pageId);
  };

  let page;
  if (selectedPage == 1) {
    page = <Choose />;
  } else if (selectedPage == 2) {
    page = <Complete />;
  } else {
    page = <Order />;
  }

  return (
    <div className="app">
      <Nav onClickLink={handleClickLink} />
      {page}
    </div>
  );
}

export default App;
