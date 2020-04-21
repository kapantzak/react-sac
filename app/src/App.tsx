import React from "react";
// import Sac from "./react-sac/src/index";
// import { ISacItem, ISacOptions, ISelectionItem } from "./react-sac/types/index";
import Sac, { ISacItem, ISacOptions, ISelectionItem } from "react-sac";
import "./App.css";

const data: ISacItem[] = [
  {
    id: "1",
    value: "Europe",
    children: [
      {
        id: "1.1",
        value: "Greece",
        children: [
          {
            id: "1.1.1",
            value: "Athens",
          },
          {
            id: "1.1.2",
            value: "Thessaloniki",
          },
          {
            id: "1.1.3",
            value: "Heraklion",
          },
        ],
      },
      {
        id: "1.2",
        value: "Italy",
        children: [
          {
            id: "1.2.1",
            value: "Rome",
          },
          {
            id: "1.2.2",
            value: "Milan",
          },
          {
            id: "1.2.3",
            value: "Torino",
          },
        ],
      },
      {
        id: "1.3",
        value: "Spain",
        children: [
          {
            id: "1.3.1",
            value: "Madrid",
          },
          {
            id: "1.3.2",
            value: "Barcelona",
          },
          {
            id: "1.3.3",
            value: "Valencia",
          },
        ],
      },
      {
        id: "1.4",
        value: "France",
        children: [
          {
            id: "1.4.1",
            value: "Paris",
          },
          {
            id: "1.4.2",
            value: "Lyon",
          },
          {
            id: "1.4.3",
            value: "Marseille",
          },
        ],
      },
      {
        id: "1.5",
        value: "Germany",
        children: [
          {
            id: "1.5.1",
            value: "Munchen",
          },
          {
            id: "1.5.2",
            value: "Berlin",
          },
          {
            id: "1.5.3",
            value: "Frankfurt",
          },
        ],
      },
      {
        id: "1.6",
        value: "Portugal",
        children: [
          {
            id: "1.6.1",
            value: "Porto",
          },
          {
            id: "1.6.2",
            value: "Funchal",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    value: "America",
    children: [
      {
        id: "2.1",
        value: "USA",
        children: [
          {
            id: "2.1.1",
            value: "New York",
          },
          {
            id: "2.1.2",
            value: "Los Angeles",
          },
          {
            id: "2.1.3",
            value: "Chicago",
          },
        ],
      },
      {
        id: "2.2",
        value: "Brazil",
        children: [
          {
            id: "2.2.1",
            value: "Sao Paulo",
          },
          {
            id: "2.2.2",
            value: "Rio De Janeiro",
          },
          {
            id: "2.2.3",
            value: "Brazilia",
          },
        ],
      },
      {
        id: "2.3",
        value: "Argentina",
        children: [
          {
            id: "2.3.1",
            value: "Buenos Aires",
          },
          {
            id: "2.3.2",
            value: "Cordoba",
          },
          {
            id: "2.3.3",
            value: "Rosario",
          },
        ],
      },
      {
        id: "2.4",
        value: "Canada",
        children: [
          {
            id: "2.4.1",
            value: "Toronto",
          },
          {
            id: "2.4.2",
            value: "Montreal",
          },
          {
            id: "2.4.3",
            value: "Vancouver",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    value: "Africa",
    children: [
      {
        id: "3.1",
        value: "Egypt",
        children: [
          {
            id: "3.1.1",
            value: "Cairo",
          },
          {
            id: "3.1.2",
            value: "Alexandria",
          },
          {
            id: "3.1.3",
            value: "Giza",
          },
        ],
      },
      {
        id: "3.2",
        value: "Morocco",
        children: [
          {
            id: "3.2.1",
            value: "Casablanca",
          },
          {
            id: "3.2.2",
            value: "Rabat",
          },
        ],
      },
      {
        id: "3.3",
        value: "Nigeria",
        children: [
          {
            id: "3.3.1",
            value: "Lagos",
          },
          {
            id: "3.3.2",
            value: "Kano",
          },
        ],
      },
      {
        id: "3.4",
        value: "Ghana",
        children: [
          {
            id: "3.4.1",
            value: "Accra",
          },
          {
            id: "3.4.2",
            value: "Kumasi",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    value: "Asia",
    children: [
      {
        id: "4.1",
        value: "China",
        children: [
          {
            id: "4.1.1",
            value: "Shanghai",
          },
          {
            id: "4.1.2",
            value: "Beijing",
          },
          {
            id: "4.1.3",
            value: "Tianjin",
          },
        ],
      },
      {
        id: "4.2",
        value: "India",
        children: [
          {
            id: "4.2.1",
            value: "Mumbai",
          },
          {
            id: "4.2.2",
            value: "Delhi",
          },
          {
            id: "4.2.3",
            value: "Bangalore",
          },
        ],
      },
      {
        id: "4.3",
        value: "Japan",
        children: [
          {
            id: "4.3.1",
            value: "Tokyo",
          },
          {
            id: "4.3.2",
            value: "Yokohama",
          },
          {
            id: "4.3.3",
            value: "Osaka",
          },
        ],
      },
      {
        id: "4.4",
        value: "Indonesia",
        children: [
          {
            id: "4.4.1",
            value: "Jakarta",
          },
          {
            id: "4.4.2",
            value: "Surabaya",
          },
        ],
      },
    ],
  },
  {
    id: "5",
    value: "Australia",
    children: [
      {
        id: "5.1",
        value: "Australia",
        children: [
          {
            id: "5.1.1",
            value: "Sydney",
          },
          {
            id: "5.1.2",
            value: "Melbourne",
          },
          {
            id: "5.1.3",
            value: "Brisbane",
          },
          {
            id: "5.1.4",
            value: "Perth",
          },
        ],
      },
      {
        id: "5.2",
        value: "Fiji",
        children: [
          {
            id: "5.2.1",
            value: "Suva",
          },
          {
            id: "5.2.2",
            value: "Lautoka",
          },
        ],
      },
      {
        id: "5.3",
        value: "Vanuatu",
        children: [
          {
            id: "5.3.1",
            value: "Port Vila",
          },
        ],
      },
    ],
  },
  {
    id: "6",
    value: "Antarctica",
  },
];

const options: ISacOptions = {
  button: {
    text: "Cities",
  },
  header: {
    modalTitle: "Cities of the world",
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
