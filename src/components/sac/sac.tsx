import React, { FunctionComponent, useState, useEffect } from "react";
import { calculateSelectedItems } from "../../helpers/selectedItemsHelper";
import CloseElement from "../closeElement/closeElement";
import Header from "../header/header";
import Tooltip from "../tooltip/tooltip";
import SacItems from "../sacItems/sacItems";
import Footer from "../footer/footer";
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
        <div className="sac-overlay">
          <div className="sac-modal">
            <CloseElement closeElementClickHandler={closeElementClickHandler} />
            <Header title={props.modalTitle}></Header>
            <div className="sac-modal-body">
              <Tooltip></Tooltip>
              <SacItems
                data={props.data}
                itemClickHandler={itemClickHandler}></SacItems>
            </div>
            <Footer></Footer>
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
