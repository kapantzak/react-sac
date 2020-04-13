import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./closeElement.css";

export interface ICloseElemetProps {
  closeElementClickHandler: Function;
}

const CloseElement: FunctionComponent<ICloseElemetProps> = (
  props: ICloseElemetProps
) => {
  return (
    <div
      className="close-element-holder"
      onClick={() => {
        props.closeElementClickHandler();
      }}
      title="Close modal">
      <FontAwesomeIcon icon={faTimes} />
    </div>
  );
};

export default CloseElement;
