import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./sacItemSelectedIcon.css";

export interface ISacItemSelectedIconProps {
  isSelected: boolean;
}

const SacItemSelectedIcon: FunctionComponent<ISacItemSelectedIconProps> = (
  props: ISacItemSelectedIconProps
) => {
  if (props.isSelected) {
    return (
      <span className="sac-item-selected-icon">
        <FontAwesomeIcon icon={faCheck} />
      </span>
    );
  }
  return null;
};

export default SacItemSelectedIcon;
