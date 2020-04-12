import React, { FunctionComponent } from "react";
import "./sacButton.css";

export interface ISacButtonProps {
  mainButtonClickHanlder: Function;
}

const SacButton: FunctionComponent<ISacButtonProps> = (
  props: ISacButtonProps
) => {
  return (
    <button
      className="sac-btn"
      type="button"
      onClick={() => {
        props.mainButtonClickHanlder();
      }}>
      Click
    </button>
  );
};

export default SacButton;
