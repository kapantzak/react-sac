import React, { FunctionComponent } from "react";
import SacItem from "../sacItem/sacItem";
import { ISacItem } from "../sac/sac";
import "./sacItems.css";

export interface ISacItemsProps {
  data: ISacItem[];
  itemClickHandler: Function;
}

const SacItems: FunctionComponent<ISacItemsProps> = (props: ISacItemsProps) => {
  const items = props.data.map((x) => (
    <SacItem
      key={x.id}
      item={x}
      itemClickHandler={props.itemClickHandler}></SacItem>
  ));

  return <div className="sac-modal-items">{items}</div>;
};

export default SacItems;
