import React, { FunctionComponent, useState } from "react";
import { calculateSelectedItems } from "../../helpers/selectedItemsHelper";
import SacItem from "../sacItem/sacItem";
import "./sac.css";

export interface ISacProps {
  data: ISacItem[];
  multiSelect?: boolean;
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
  const [selectedItems, setSelectedItems] = useState<ISacItem[]>([]);

  const itemClickHandler = (item: ISacItem) => {
    const newSelectedItems = calculateSelectedItems(item, selectedItems);
    setSelectedItems(newSelectedItems);
  };

  const items = props.data.map(x => (
    <SacItem key={x.id} item={x} itemClickHandler={itemClickHandler}></SacItem>
  ));

  return (
    <div className="sac-wrapper">
      <button className="sac-btn" type="button">
        Click
      </button>
      <div className="sac-overlay">
        <div className="sac-modal">
          <header>Modal title</header>
          <div className="sac-modal-body">
            <div className="sac-modal-tooltip">Tools</div>
            <div className="sac-modal-items">{items}</div>
          </div>
          <footer>Footer</footer>
        </div>
      </div>
    </div>
  );
};

export default Sac;
