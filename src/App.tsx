import React from "react";
import Sac, { ISacItem, ISacOptions } from "./components/sac/sac";
import "./App.css";

const data: ISacItem[] = [
  {
    id: "1",
    value: "One",
    children: [
      {
        id: "1.1",
        value: "One.One",
        children: [
          {
            id: "1.1.1",
            value: "One.One.One",
          },
        ],
      },
      {
        id: "1.2",
        value: "One.Two",
      },
    ],
  },
  {
    id: "2",
    value: "Two",
  },
];

const options: ISacOptions = {
  header: {
    modalTitle: "My title",
  },
  modal: {
    multiSelect: false,
    //closeModalOnEscapeKey: true,
  },
};

function App() {
  return (
    <div className="App">
      <Sac options={options} data={data}></Sac>
    </div>
  );
}

export default App;
