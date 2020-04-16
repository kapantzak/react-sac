import React, { FunctionComponent, useState } from "react";
import SacItemToggleIcon from "../sacItemToggleIcon/sacItemToggleIcon";
import SacItemSelectedIcon from "../sacItemSelectedIcon/sacItemSelectedIcon";
import { ISacItem, ISacItemSearch } from "../sac/sac";
import { showSacItemBasedOnSearch } from "../../helpers/searchItemsHelper";
import "./sacItem.css";

export interface ISacItemProps {
  item: ISacItem;
  itemSearch: ISacItemSearch;
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
        itemSearch={props.itemSearch}
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

  const showItem = showSacItemBasedOnSearch(props.item, props.itemSearch);
  if (showItem && !props.item.hidden) {
    return (
      <div
        key={props.item.id}
        className={`sac-item ${
          props.item.selected ? "sac-item-selected" : ""
        }`}>
        <div className="sac-item-label">
          <SacItemToggleIcon
            expanded={isExpanded}
            hasChildren={(props.item.children || []).length > 0}
            iconClickHandler={iconClickHandler}
          />
          <div className="sac-item-label-text" onClick={labelTextClickHandler}>
            <span>{props.item.value}</span>
            <SacItemSelectedIcon
              isSelected={props.item.selected || false}></SacItemSelectedIcon>
          </div>
        </div>
        {children}
      </div>
    );
  }
  return null;
};

export default SacItem;
