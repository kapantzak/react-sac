import React, { FunctionComponent, useState } from "react";
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
    console.log(`Cliked id: ${item.id} (selected: ${item.selected})`);
  };

  const items = props.data.map(x =>
    SacItem({
      item: x,
      itemClickHandler
    })
  );

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
