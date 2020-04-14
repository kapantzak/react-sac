import React, { FunctionComponent } from "react";
import { ISacOptModal, ISacOptFooter } from "../sac/sac";
import Button from "../button/button";
import "./footer.css";

export interface IFooterProps {
  modalOptions?: ISacOptModal;
  footerOptions?: ISacOptFooter;
}

const Footer: FunctionComponent<IFooterProps> = (props: IFooterProps) => {
  const isMultiselect = (props.modalOptions || {}).multiSelect === true;

  const selectClickHanlder = () => {
    alert("Select");
  };

  const renderSelectionButtons = () => {
    if (isMultiselect) {
      return (
        <div className="sac-footer-buttons-selection">
          <Button text="Select all" clickHandler={selectClickHanlder}></Button>
          <Button
            text="Invert selection"
            clickHandler={selectClickHanlder}></Button>
          <Button
            text="Deselect all"
            clickHandler={selectClickHanlder}></Button>
        </div>
      );
    }
    return null;
  };

  return (
    <footer>
      <div
        className={`sac-footer-buttons-holder ${
          isMultiselect ? "sac-footer-multiselect" : "sac-footer-singleselect"
        }`}>
        {renderSelectionButtons()}
        <div className="sac-footer-buttons-actions">
          <Button text="OK" clickHandler={selectClickHanlder}></Button>
          <Button text="Cancel" clickHandler={selectClickHanlder}></Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
