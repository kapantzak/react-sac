import React from "react";
// import Sac from "./react-sac/src/index";
// import { ISacItem, ISacOptions, ISelectionItem } from "./react-sac/types/index";
import Sac, { ISacItem, ISacOptions, ISelectionItem } from "react-sac";
import "./App.css";

const data: ISacItem[] = [
  {
    id: "1",
    value: "Animal",
    children: [
      {
        id: "1.1",
        value: "Reptile",
        children: [
          {
            id: "1.1.1",
            value: "Lizard",
          },
          {
            id: "1.1.2",
            value: "Snake",
          },
        ],
      },
      {
        id: "1.2",
        value: "Mammal",
        children: [
          {
            id: "1.2.1",
            value: "Equine",
          },
          {
            id: "1.2.1",
            value: "Bovine",
          },
          {
            id: "1.2.1",
            value: "Canine",
          },
        ],
      },
    ],
  },
];

const options: ISacOptions = {
  header: {
    modalTitle: "My title",
  },
  modal: {
    // opened: true,
    // multiSelect: false,
    //closeModalOnEscapeKey: true,
  },
  footer: {
    // btnSelect: {
    //   callback: (
    //     sel: ISelectionItem,
    //     e: React.MouseEvent<HTMLButtonElement>
    //   ) => {
    //     console.log(sel);
    //     console.log(e.currentTarget);
    //   },
    // },
  },
  events: {
    selectionCallback: (selItem: ISelectionItem) => {
      console.log(selItem);
    },
    modalCloseCallback: () => {
      console.log("Close");
    },
    modalOpenCallback: () => {
      console.log("Open");
    },
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
