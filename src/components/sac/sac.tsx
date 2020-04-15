import React, { FunctionComponent, useState, useEffect } from "react";
import {
  calculateDataSelection,
  calculateSelectionItem,
} from "../../helpers/selectedItemsHelper";
import SacButton from "../sacButton/sacButton";
import SacOverlay from "../sacOverlay/sacOverlay";
import { defaultOptions } from "../../helpers/optionsHelper";
import defaultsDeep from "lodash.defaultsdeep";
import "./sac.css";

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
  defaultSearchType?: string;
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
  selectionCallback?: (selectionItem?: ISelectionItem) => any;
  modalBeforeCloseCallback?: (selectionItem?: ISelectionItem) => any;
  modalAfterCloseCallback?: (selectionItem?: ISelectionItem) => any;
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
  children?: ISacItem[];
}

export interface ISelectionItem {
  allSelected: boolean;
  selectedItems: ISacItem[];
}

const Sac: FunctionComponent<ISacProps> = (props: ISacProps) => {
  const options: ISacOptions = defaultsDeep({}, props.options, defaultOptions);
  const modal = options.modal || {};
  const footer = options.footer || {};

  const [isOpened, setIsOpened] = useState<boolean>(modal.opened || false);
  const [dataSelection, setDataSelection] = useState<ISacItem[]>(
    props.data.slice()
  );

  const escKeyDownHandler = (e: KeyboardEvent): void => {
    if (e.key === "Escape") {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    if (modal.closeModalOnEscapeKey) {
      document.addEventListener("keydown", escKeyDownHandler);

      return () => {
        document.removeEventListener("keydown", escKeyDownHandler);
      };
    }
  });

  const mainButtonClickHanlder = () => {
    setIsOpened(!isOpened);
  };

  const closeElementClickHandler = () => {
    setIsOpened(false);
  };

  const itemClickHandler = (item: ISacItem) => {
    const newDataSelection = calculateDataSelection(item, dataSelection);
    setDataSelection(newDataSelection);
  };

  const applyCallback = (
    e: React.MouseEvent<HTMLButtonElement>,
    callback?: (
      selItem: ISelectionItem,
      e: React.MouseEvent<HTMLButtonElement>
    ) => any
  ) => {
    if (callback) {
      const selItem = calculateSelectionItem(dataSelection);
      callback(selItem, e);
    }
  };

  const footerButtonsActions: IFooterButtonsActions = {
    btnSelect_clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsOpened(false);
      const callback = (footer.btnSelect || {}).callback;
      applyCallback(e, callback);
    },
    btnCancel_clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsOpened(false);
      const callback = (footer.btnCancel || {}).callback;
      applyCallback(e, callback);
    },
    btnSelectAll_clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => {
      const callback = (footer.btnSelectAll || {}).callback;
      applyCallback(e, callback);
    },
    btnInvertSelection_clickHandler: (
      e: React.MouseEvent<HTMLButtonElement>
    ) => {
      const callback = (footer.btnInvertSelection || {}).callback;
      applyCallback(e, callback);
    },
    btnDeselectAll_clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => {
      const callback = (footer.btnDeselectAll || {}).callback;
      applyCallback(e, callback);
    },
  };

  return (
    <React.Fragment>
      <SacButton mainButtonClickHanlder={mainButtonClickHanlder}></SacButton>
      <SacOverlay
        isOpened={isOpened}
        data={dataSelection}
        options={options}
        closeElementClickHandler={closeElementClickHandler}
        itemClickHandler={itemClickHandler}
        footerButtonsActions={footerButtonsActions}></SacOverlay>
    </React.Fragment>
  );
};

export default Sac;
