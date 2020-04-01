import React, { FunctionComponent, useState } from "react";
import { ISacItem } from "../sac/sac";
import "./sacItem.css";

export interface ISacItemProps {
  item: ISacItem;
  itemClickHandler: Function;
}

const SacItem: FunctionComponent<ISacItemProps> = (props: ISacItemProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(
    props.item.selected || false
  );

  let children = null;
  if ((props.item.children || []).length > 0) {
    const childrenItems = (props.item.children || []).map(x =>
      SacItem({
        item: x,
        itemClickHandler: props.itemClickHandler
      })
    );
    children = <div className="sac-item-children">{childrenItems}</div>;
  }
  return (
    <div
      key={props.item.id}
      className={`sac-item ${isSelected ? "sac-item-selected" : ""}`}>
      <div
        className="sac-item-label"
        onClick={() => {
          setIsSelected(!isSelected);
          const item = Object.assign({}, props.item, {
            selected: isSelected
          });
          props.itemClickHandler(item);
        }}>
        icon
        <span className="sac-item-label-text">{props.item.value}</span>
      </div>
      {children}
    </div>
  );
};

export default SacItem;
