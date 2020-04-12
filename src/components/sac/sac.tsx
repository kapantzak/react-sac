import React, { FunctionComponent, useState, useEffect } from "react";
import { calculateSelectedItems } from "../../helpers/selectedItemsHelper";
import SacItems from "../sacItems/sacItems";
import CloseElement from "../closeElement/closeElement";
import "./sac.css";

export interface ISacProps {
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
        <div className="sac-overlay">
          <div className="sac-modal">
            <CloseElement closeElementClickHandler={closeElementClickHandler} />
            <header>Modal title</header>
            <div className="sac-modal-body">
              <div className="sac-modal-tooltip">Tools</div>
              <SacItems
                data={props.data}
                itemClickHandler={itemClickHandler}></SacItems>
            </div>
            <footer>Footer</footer>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <React.Fragment>
      <button
        className="sac-btn"
        type="button"
        onClick={mainButtonClickHanlder}>
        Click
      </button>
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
