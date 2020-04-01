import React from "react";
import Sac, { ISacItem } from "./components/sac/sac";
import "./App.css";

const data: ISacItem[] = [
  {
    id: "1",
    value: "One",
    children: [
      {
        id: "1.1",
        value: "One.One"
      },
      {
        id: "1.2",
        value: "One.Two"
      }
    ]
  },
  {
    id: "2",
    value: "Two"
  }
];

function App() {
  return (
    <div className="App">
      <Sac data={data}></Sac>
    </div>
  );
}

export default App;
