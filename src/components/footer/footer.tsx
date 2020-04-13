import React, { FunctionComponent } from "react";
import "./footer.css";

export interface IFooterProps {
  multiSelect: boolean;
}

const Footer: FunctionComponent<IFooterProps> = (props: IFooterProps) => {
  return (
    <footer>
      <div className="sac-footer-buttons-holder">
        <button className="sac-footer-button" type="button">
          Select
        </button>
        <button className="sac-footer-button" type="button">
          Invert selection
        </button>
        <button className="sac-footer-button" type="button">
          Select all
        </button>
        <button className="sac-footer-button" type="button">
          Deselect all
        </button>
        <button className="sac-footer-button" type="button">
          Cancel
        </button>
      </div>
    </footer>
  );
};

export default Footer;
