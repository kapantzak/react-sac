import React, { FunctionComponent } from "react";
import SacItem from "../sacItem/sacItem";
import { ISacItem, ISacItemSearch } from "../../../types/index";
import "./sacItems.css";

export interface ISacItemsProps {
  data: ISacItem[];
  itemSearch: ISacItemSearch;
  itemClickHandler: Function;
}

const SacItems: FunctionComponent<ISacItemsProps> = (props: ISacItemsProps) => {
  const items = props.data.map((x) => (
    <SacItem
      key={x.id}
      level={0}
      item={x}
      itemSearch={props.itemSearch}
      itemClickHandler={props.itemClickHandler}></SacItem>
  ));

  return <div className="sac-modal-items">{items}</div>;
};

export default SacItems;
