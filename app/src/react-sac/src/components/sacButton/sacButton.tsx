import React, { FunctionComponent } from "react";
import { ISacButton } from "../../../types/index";
import "./sacButton.css";

export interface ISacButtonProps {
  text: string;
  buttonOptions: ISacButton;
  mainButtonClickHanlder: Function;
}

const SacButton: FunctionComponent<ISacButtonProps> = (
  props: ISacButtonProps
) => {
  return (
    <button
      className={`sac-btn ${props.buttonOptions.className || ""}`}
      type="button"
      onClick={() => {
        props.mainButtonClickHanlder();
      }}>
      {props.text}
    </button>
  );
};

export default SacButton;
