import React, { FunctionComponent } from "react";

export interface IButtonProps {
  text?: string;
  className?: string;
  clickHandler: () => any;
}

const Button: FunctionComponent<IButtonProps> = (props: IButtonProps) => {
  return (
    <button
      className={`sac-footer-button ${props.className || ""}`}
      type="button"
      onClick={props.clickHandler}>
      {props.text || ""}
    </button>
  );
};

export default Button;
