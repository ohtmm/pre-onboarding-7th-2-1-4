import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import Router from "./routes/Router";

function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}

export default App;
