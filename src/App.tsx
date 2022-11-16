import React from "react";
import "./App.css";

import { AppProviders } from "./context";
import { Home } from "./home";

function App() {
  return (
    <div className="App">
      {/*<ProjectList />*/}
      {/*<TsReactTest />*/}
      <AppProviders>
        <Home />
      </AppProviders>
    </div>
  );
}

export default App;
