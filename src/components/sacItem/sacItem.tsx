import React, { FunctionComponent, useState } from "react";
import SacItemToggleIcon from "../sacItemToggleIcon/sacItemToggleIcon";
import { ISacItem } from "../sac/sac";
import "./sacItem.css";

export interface ISacItemProps {
  item: ISacItem;
  itemClickHandler: Function;
}

const SacItem: FunctionComponent<ISacItemProps> = (props: ISacItemProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(
    props.item.expanded || false
  );
  const [isSelected, setIsSelected] = useState<boolean>(
    props.item.selected || false
  );

  let children = null;
  if ((props.item.children || []).length > 0 && isExpanded) {
    const childrenItems = (props.item.children || []).map(x =>
      SacItem({
        item: x,
        itemClickHandler: props.itemClickHandler
      })
    );
    children = <div className="sac-item-children">{childrenItems}</div>;
  }

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
        <div
          className="sac-item-label-text"
          onClick={() => {
            setIsSelected(!isSelected);
            const item = Object.assign({}, props.item, {
              selected: isSelected
            });
            props.itemClickHandler(item);
          }}>
          {props.item.value}
        </div>
      </div>
      {children}
    </div>
  );
};

export default SacItem;
