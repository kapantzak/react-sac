import React, { FunctionComponent } from "react";
import CloseElement from "../closeElement/closeElement";
import Header from "../header/header";
import Tooltip from "../tooltip/tooltip";
import SacItems from "../sacItems/sacItems";
import Footer from "../footer/footer";
import { ISacItem } from "../sac/sac";
import "./sacOverlay.css";

export interface ISacOverlayProps {
  modalTitle: string;
  data: ISacItem[];
  multiSelect: boolean;
  closeElementClickHandler: Function;
  itemClickHandler: Function;
}

const SacOverlay: FunctionComponent<ISacOverlayProps> = (
  props: ISacOverlayProps
) => {
  return (
    <div className="sac-overlay">
      <div className="sac-modal">
        <CloseElement
          closeElementClickHandler={props.closeElementClickHandler}
        />
        <Header title={props.modalTitle}></Header>
        <div className="sac-modal-body">
          <Tooltip></Tooltip>
          <SacItems
            data={props.data}
            itemClickHandler={props.itemClickHandler}></SacItems>
        </div>
        <Footer multiSelect={props.multiSelect}></Footer>
      </div>
    </div>
  );
};

export default SacOverlay;
