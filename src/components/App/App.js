import React from "react";

import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import AppMain from "../AppMain/AppMain";
import AppFooter from "../AppFooter/AppFooter";

function App({ counter }) {
  return (
    <div className="body">
      <div className="page">
        <AppHeader />
        <AppMain counter={counter} />
        <AppFooter />
      </div>

      <div className="bg-body"></div>
    </div>
  );
}

export default App;
