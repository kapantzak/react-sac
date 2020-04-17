import React, { FunctionComponent } from "react";
import CloseElement from "../closeElement/closeElement";
import Header from "../header/header";
import Tooltip from "../tooltip/tooltip";
import SacItems from "../sacItems/sacItems";
import Footer from "../footer/footer";
import {
  ISacItem,
  ISacItemSearch,
  ISacOptions,
  IFooterButtonsActions,
} from "../../index";
import "./sacOverlay.css";

export interface ISacOverlayProps {
  isOpened: boolean;
  data: ISacItem[];
  options: ISacOptions;
  closeElementClickHandler: Function;
  itemSearch: ISacItemSearch;
  itemClickHandler: Function;
  searchModeChangeHandler: (searchObj: ISacItemSearch) => any;
  footerButtonsActions: IFooterButtonsActions;
}

const SacOverlay: FunctionComponent<ISacOverlayProps> = (
  props: ISacOverlayProps
) => {
  const options = props.options;

  if (props.isOpened) {
    return (
      <div className="sac-overlay">
        <div className="sac-modal">
          <CloseElement
            closeElementClickHandler={props.closeElementClickHandler}
          />
          <Header headerOptions={options.header || {}}></Header>
          <div className="sac-modal-body">
            <Tooltip
              toolsOptions={options.tools || {}}
              searchModeChangeHandler={props.searchModeChangeHandler}></Tooltip>
            <SacItems
              data={props.data}
              itemSearch={props.itemSearch}
              itemClickHandler={props.itemClickHandler}></SacItems>
          </div>
          <Footer
            modalOptions={options.modal || {}}
            footerOptions={options.footer || {}}
            footerButtonsActions={props.footerButtonsActions}></Footer>
        </div>
      </div>
    );
  }
  return null;
};

export default SacOverlay;
