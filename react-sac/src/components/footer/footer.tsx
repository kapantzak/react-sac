import React, { FunctionComponent } from "react";
import {
  ISacOptModal,
  ISacOptFooter,
  IFooterButtonsActions,
} from "../../index";
import SacButtonsSelection from "../sacButtonsSelection/sacButtonsSelection";
import Button from "../button/button";
import "./footer.css";

export interface IFooterProps {
  modalOptions: ISacOptModal;
  footerOptions: ISacOptFooter;
  footerButtonsActions: IFooterButtonsActions;
}

const Footer: FunctionComponent<IFooterProps> = (props: IFooterProps) => {
  const modalOptions = props.modalOptions || {};
  const isMultiselect = modalOptions.multiSelect === true;
  const footerOptions = props.footerOptions || {};
  const actions = props.footerButtonsActions;

  return (
    <footer>
      <div
        className={`sac-footer-buttons-holder ${
          isMultiselect ? "sac-footer-multiselect" : "sac-footer-singleselect"
        }`}>
        <SacButtonsSelection
          modalOptions={modalOptions}
          footerOptions={footerOptions}
          footerButtonsActions={
            props.footerButtonsActions
          }></SacButtonsSelection>
        <div className="sac-footer-buttons-actions">
          <Button
            buttonOptions={footerOptions.btnSelect || {}}
            clickHandler={actions.btnSelect_clickHandler}></Button>
          <Button
            buttonOptions={footerOptions.btnCancel || {}}
            clickHandler={actions.btnCancel_clickHandler}></Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
