import React, { FunctionComponent } from "react";
import {
  ISacOptModal,
  ISacOptFooter,
  IFooterButtonsActions,
} from "../../../index";
import Button from "../button/button";
import "./sacButtonsSelection.css";

export interface ISacButtonsSelectionProps {
  modalOptions: ISacOptModal;
  footerOptions: ISacOptFooter;
  footerButtonsActions: IFooterButtonsActions;
}

const SacButtonsSelection: FunctionComponent<ISacButtonsSelectionProps> = (
  props: ISacButtonsSelectionProps
) => {
  const isMultiselect = props.modalOptions.multiSelect === true;
  const footerOptions = props.footerOptions || {};
  const actions = props.footerButtonsActions;

  if (isMultiselect) {
    return (
      <div className="sac-footer-buttons-selection">
        <Button
          buttonOptions={footerOptions.btnSelectAll || {}}
          clickHandler={actions.btnSelectAll_clickHandler}></Button>
        <Button
          buttonOptions={footerOptions.btnInvertSelection || {}}
          clickHandler={actions.btnInvertSelection_clickHandler}></Button>
        <Button
          buttonOptions={footerOptions.btnDeselectAll || {}}
          clickHandler={actions.btnDeselectAll_clickHandler}></Button>
      </div>
    );
  }
  return null;
};

export default SacButtonsSelection;
