import React, { FunctionComponent } from "react";
import { ISacOptModal, ISacOptFooter } from "../sac/sac";
import Button from "../button/button";
import "./sacButtonsSelection.css";

export interface ISacButtonsSelectionProps {
  modalOptions?: ISacOptModal;
  footerOptions?: ISacOptFooter;
}

const SacButtonsSelection: FunctionComponent<ISacButtonsSelectionProps> = (
  props: ISacButtonsSelectionProps
) => {
  const isMultiselect = (props.modalOptions || {}).multiSelect === true;
  const footerOptions = props.footerOptions || {};

  const selectClickHanlder = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Select");
    const callback = (footerOptions.btnSelect || {}).callback;
    if (callback) {
      callback(
        {
          allSelected: false,
          selectedItems: [],
        },
        e
      );
    }
  };

  if (isMultiselect) {
    return (
      <div className="sac-footer-buttons-selection">
        <Button
          buttonOptions={footerOptions.btnSelectAll || {}}
          clickHandler={selectClickHanlder}></Button>
        <Button
          buttonOptions={footerOptions.btnInvertSelection || {}}
          clickHandler={selectClickHanlder}></Button>
        <Button
          buttonOptions={footerOptions.btnDeselectAll || {}}
          clickHandler={selectClickHanlder}></Button>
      </div>
    );
  }
  return null;
};

export default SacButtonsSelection;
