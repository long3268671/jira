import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ProjectList } from "./sereens/project-list";
import { TsReactTest } from "./try-use-array";
import { ProjectLogin } from "./sereens/login/login";

function App() {
  return (
    <div className="App">
      {/*<ProjectList />*/}
      {/*<TsReactTest />*/}
      <ProjectLogin />
    </div>
  );
}

export default App;
