import React, { FunctionComponent } from "react";
import { SacItemTextSearchType } from "./src/helpers/optionsHelper";

export interface ISacProps {
  data: ISacItem[];
  options?: ISacOptions;
}

export interface ISacOptions {
  modal?: ISacOptModal;
  header?: ISacOptHeader;
  tools?: ISacOptTools;
  footer?: ISacOptFooter;
  events?: ISacOptEvents;
}

export interface ISacOptModal {
  opened?: boolean;
  multiSelect?: boolean;
  closeModalOnEscapeKey?: boolean;
}

export interface ISacOptHeader {
  modalTitle?: string;
}

export interface ISacOptTools {
  defaultSearchItem?: ISacItemSearch;
}

export interface ISacOptFooter {
  btnSelect?: ISacOptFooterButton;
  btnInvertSelection?: ISacOptFooterButton;
  btnSelectAll?: ISacOptFooterButton;
  btnDeselectAll?: ISacOptFooterButton;
  btnCancel?: ISacOptFooterButton;
}

export interface ISacOptFooterButton {
  text?: string;
  className?: string;
  visible?: boolean;
  callback?: (
    selectionItem: ISelectionItem,
    e: React.MouseEvent<HTMLButtonElement>
  ) => any;
}

export interface ISacOptEvents {
  selectionCallback?: (selectionItem: ISelectionItem) => any;
  modalOpenCallback?: (selectionItem: ISelectionItem) => any;
  modalCloseCallback?: (selectionItem: ISelectionItem) => any;
}

export interface IFooterButtonsActions {
  btnSelect_clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => any;
  btnCancel_clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => any;
  btnSelectAll_clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => any;
  btnInvertSelection_clickHandler: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => any;
  btnDeselectAll_clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => any;
}

export interface ISacItem {
  id: string;
  value: string;
  selected?: boolean;
  expanded?: boolean;
  hidden?: boolean;
  children?: ISacItem[];
}

export interface ISacItemSearch {
  text: string;
  type: SacItemTextSearchType;
}

export interface ISelectionItem {
  allSelected: boolean;
  selectedItems: ISacItem[];
}

declare interface ISac extends FunctionComponent<ISacProps> {}
const Sac: ISac = {};

export default Sac;
