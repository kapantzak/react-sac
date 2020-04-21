# react-sac
Search area component for React. Display **hierarchically structured data**, search specific term and select one or more items.

![Component functionality](https://github.com/kapantzak/react-sac/blob/develop/resources/ui.gif)

## Installation

With npm

	> npm i react-sac --save

Or with yarn

	> yarn add react-sac

## Usage

Here's a simple example using Typescript

	import React from "react";
	import Sac, { ISacItem, ISacOptions } from "react-sac";

	const data: ISacItem[] = [...];
	const options: ISacOptions = {...};

	function App() {
	  return (
	    <div className="App">
	      <Sac options={options} data={data}></Sac>
	    </div>
	  );
	}

## Properties

### Options `ISacOptions`

Provide an options object to customize the appearance and functionality.

	ISacProps {
	  data: ISacItem[];
	  options?: ISacOptions;
	}
	
	ISacOptions {
	  button?: ISacButton;
	  modal?: ISacOptModal;
	  header?: ISacOptHeader;
	  tools?: ISacOptTools;
	  footer?: ISacOptFooter;
	  events?: ISacOptEvents;
	}
	
	ISacButton {
	  text?: string;
	  className?: string;
	  textAll?: string;
	  textNone?: string;
	}
	
	ISacOptModal {
	  opened?: boolean;
	  multiSelect?: boolean;
	  closeModalOnEscapeKey?: boolean;
	}
	
	ISacOptHeader {
	  modalTitle?: string;
	}
	
	ISacOptTools {
	  defaultSearchItem?: ISacItemSearch;
	}
	
	ISacOptFooter {
	  btnSelect?: ISacOptFooterButton;
	  btnInvertSelection?: ISacOptFooterButton;
	  btnSelectAll?: ISacOptFooterButton;
	  btnDeselectAll?: ISacOptFooterButton;
	  btnCancel?: ISacOptFooterButton;
	}
	
	ISacOptFooterButton {
	  text?: string;
	  className?: string;
	  visible?: boolean;
	  callback?: (
	    selectionItem: ISelectionItem,
	    e: React.MouseEvent<HTMLButtonElement>
	  ) => any;
	}
	
	ISacOptEvents {
	  selectionCallback?: (selectionItem: ISelectionItem) => any;
	  modalOpenCallback?: (selectionItem: ISelectionItem) => any;
	  modalCloseCallback?: (selectionItem: ISelectionItem) => any;
	}

### Data `ISacItem[]`

The data to be displayed.

	ISacItem {
	  id: string;
	  value: string;
	  selected?: boolean;
	  expanded?: boolean;
	  hidden?: boolean;
	  children?: ISacItem[];
	}

## Development

Install dependencies

`yarn`

Start a development server

`yarn start`

### Build package

Inside directory `./react-sac/`

	> yarn build

## NPM Link

Inside directory `./react-sac/`

	> npm link
	> npm ../app/node_modules/react`

Inside directory `./app/`

	> npm link react-sac

### Unlink

Inside directory `./react-sac/`

	> npm unlink

Inside directory `./app/`

	> npm unlink react-sac



