import React, { FunctionComponent } from "react";
import { ISacOptModal, ISacOptFooter } from "../sac/sac";
import SacButtonsSelection from "../sacButtonsSelection/sacButtonsSelection";
import Button from "../button/button";
import "./footer.css";

export interface IFooterProps {
  modalOptions?: ISacOptModal;
  footerOptions?: ISacOptFooter;
}

const Footer: FunctionComponent<IFooterProps> = (props: IFooterProps) => {
  const modalOptions = props.modalOptions || {};
  const isMultiselect = modalOptions.multiSelect === true;
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

  return (
    <footer>
      <div
        className={`sac-footer-buttons-holder ${
          isMultiselect ? "sac-footer-multiselect" : "sac-footer-singleselect"
        }`}>
        <SacButtonsSelection
          modalOptions={modalOptions}
          footerOptions={footerOptions}></SacButtonsSelection>
        <div className="sac-footer-buttons-actions">
          <Button
            buttonOptions={footerOptions.btnSelect || {}}
            clickHandler={selectClickHanlder}></Button>
          <Button
            buttonOptions={footerOptions.btnCancel || {}}
            clickHandler={selectClickHanlder}></Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
