import React from "react";
import { ISacItem, ISacOptions, ISelectionItem } from "react-sac"; //"./components/sac/sac";
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
            children: [
              {
                id: "1.1.1.1",
                value: "One.one.one.one",
              },
            ],
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
      <div>test</div>
      {/* <Sac options={options} data={data}></Sac> */}
    </div>
  );
}

export default App;
