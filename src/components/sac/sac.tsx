import React, { FunctionComponent, useState, useEffect } from "react";
import { calculateSelectedItems } from "../../helpers/selectedItemsHelper";
import SacButton from "../sacButton/sacButton";
import SacOverlay from "../sacOverlay/sacOverlay";
import "./sac.css";

export interface ISacProps {
  modalTitle: string;
  data: ISacItem[];
  opened?: boolean;
  multiSelect?: boolean;
  closeModalOnEscapeKey?: boolean;
  selectionCallback?: (selectionItem?: ISelectionItem) => any;
  modalBeforeCloseCallback?: (selectionItem?: ISelectionItem) => any;
  modalAfterCloseCallback?: (selectionItem?: ISelectionItem) => any;
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
  const [isOpened, setIsOpened] = useState<boolean>(props.opened || false);
  const [selectedItems, setSelectedItems] = useState<ISacItem[]>([]);

  const escKeyDownHandler = (e: KeyboardEvent): void => {
    if (e.key === "Escape") {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    if (props.closeModalOnEscapeKey) {
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

  const renderSacOverlay = (): JSX.Element | null => {
    if (isOpened) {
      return (
        <SacOverlay
          modalTitle={props.modalTitle}
          data={props.data}
          multiSelect={props.multiSelect || true}
          closeElementClickHandler={closeElementClickHandler}
          itemClickHandler={itemClickHandler}></SacOverlay>
      );
    }
    return null;
  };

  return (
    <React.Fragment>
      <SacButton mainButtonClickHanlder={mainButtonClickHanlder}></SacButton>
      {renderSacOverlay()}
    </React.Fragment>
  );
};

Sac.defaultProps = {
  opened: false,
  multiSelect: true,
  closeModalOnEscapeKey: true,
};

export default Sac;
