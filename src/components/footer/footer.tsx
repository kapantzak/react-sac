import React, { FunctionComponent } from "react";
import { ISacOptModal, ISacOptFooter } from "../sac/sac";
import Button from "../button/button";
import "./footer.css";

export interface IFooterProps {
  modalOptions?: ISacOptModal;
  footerOptions?: ISacOptFooter;
}

const Footer: FunctionComponent<IFooterProps> = (props: IFooterProps) => {
  const selectClickHanlder = () => {
    alert("Select");
  };

  const renderSelectionButtons = () => {
    if ((props.modalOptions || {}).multiSelect === true) {
      return (
        <React.Fragment>
          <Button
            text="Invert selection"
            clickHandler={selectClickHanlder}></Button>
          <Button text="Select all" clickHandler={selectClickHanlder}></Button>
          <Button
            text="Deselect all"
            clickHandler={selectClickHanlder}></Button>
        </React.Fragment>
      );
    }
    return null;
  };

  return (
    <footer>
      <div className="sac-footer-buttons-holder">
        <Button text="Select" clickHandler={selectClickHanlder}></Button>
        {renderSelectionButtons()}
        <Button text="Cancel" clickHandler={selectClickHanlder}></Button>
      </div>
    </footer>
  );
};

export default Footer;
