import React, { FunctionComponent, useState } from "react";
import SacItemToggleIcon from "../sacItemToggleIcon/sacItemToggleIcon";
import { ISacItem } from "../sac/sac";
import SacItemSelectedIcon from "../sacItemSelectedIcon/sacItemSelectedIcon";
import "./sacItem.css";

export interface ISacItemProps {
  item: ISacItem;
  itemClickHandler: Function;
}

const SacItem: FunctionComponent<ISacItemProps> = (props: ISacItemProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(
    props.item.expanded || true
  );
  const [isSelected, setIsSelected] = useState<boolean>(
    props.item.selected || false
  );

  let children = null;
  if ((props.item.children || []).length > 0) {
    const childrenItems = (props.item.children || []).map((x) => (
      <SacItem
        key={x.id}
        item={x}
        itemClickHandler={props.itemClickHandler}></SacItem>
    ));
    children = (
      <div className={`sac-item-children ${isExpanded ? "" : "hidden"}`}>
        {childrenItems}
      </div>
    );
  }

  const labelTextClickHandler = () => {
    setIsSelected(!isSelected);
    const item = Object.assign({}, props.item, {
      selected: !isSelected,
    });
    props.itemClickHandler(item);
  };

  const iconClickHandler = (expanded: boolean) => {
    setIsExpanded(expanded);
  };

  return (
    <div
      key={props.item.id}
      className={`sac-item ${isSelected ? "sac-item-selected" : ""}`}>
      <div className="sac-item-label">
        <SacItemToggleIcon
          expanded={isExpanded}
          hasChildren={(props.item.children || []).length > 0}
          iconClickHandler={iconClickHandler}
        />
        <div className="sac-item-label-text" onClick={labelTextClickHandler}>
          <span>{props.item.value}</span>
          <SacItemSelectedIcon isSelected={isSelected}></SacItemSelectedIcon>
        </div>
      </div>
      {children}
    </div>
  );
};

export default SacItem;
