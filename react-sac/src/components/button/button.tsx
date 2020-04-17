import React, { FunctionComponent } from "react";
import { ISacOptFooterButton } from "../../index";

export interface IButtonProps {
  buttonOptions: ISacOptFooterButton;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => any;
}

const Button: FunctionComponent<IButtonProps> = (props: IButtonProps) => {
  const opt = props.buttonOptions || {};
  const className = opt.className || "";
  const text = opt.text || "";
  return (
    <button
      className={`sac-footer-button ${className}`}
      type="button"
      onClick={props.clickHandler}>
      {text}
    </button>
  );
};

export default Button;
