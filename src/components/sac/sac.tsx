import React, { FunctionComponent, useState, useEffect } from "react";
import { calculateSelectedItems } from "../../helpers/selectedItemsHelper";
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
  const [selectedItems, setSelectedItems] = useState<ISacItem[]>([]);

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
    const newSelectedItems = calculateSelectedItems(item, selectedItems);
    setSelectedItems(newSelectedItems);
  };

  const footerButtonsActions: IFooterButtonsActions = {
    btnSelect_clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => {
      const callback = (footer.btnSelect || {}).callback;
      if (callback) {
        callback(
          {
            allSelected: false,
            selectedItems: [],
          },
          e
        );
      }
    },
    btnCancel_clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => {
      const callback = (footer.btnCancel || {}).callback;
      if (callback) {
        callback(
          {
            allSelected: false,
            selectedItems: [],
          },
          e
        );
      }
    },
    btnSelectAll_clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => {
      const callback = (footer.btnSelectAll || {}).callback;
      if (callback) {
        callback(
          {
            allSelected: false,
            selectedItems: [],
          },
          e
        );
      }
    },
    btnInvertSelection_clickHandler: (
      e: React.MouseEvent<HTMLButtonElement>
    ) => {
      const callback = (footer.btnInvertSelection || {}).callback;
      if (callback) {
        callback(
          {
            allSelected: false,
            selectedItems: [],
          },
          e
        );
      }
    },
    btnDeselectAll_clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => {
      const callback = (footer.btnDeselectAll || {}).callback;
      if (callback) {
        callback(
          {
            allSelected: false,
            selectedItems: [],
          },
          e
        );
      }
    },
  };

  return (
    <React.Fragment>
      <SacButton mainButtonClickHanlder={mainButtonClickHanlder}></SacButton>
      <SacOverlay
        isOpened={isOpened}
        data={props.data}
        options={options}
        closeElementClickHandler={closeElementClickHandler}
        itemClickHandler={itemClickHandler}></SacOverlay>
    </React.Fragment>
  );
};

export default Sac;
