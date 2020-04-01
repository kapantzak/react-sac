import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "./sacItemToggleIcon.css";

export interface ISacItemToggleIcon {
  expanded: boolean;
  hasChildren: boolean;
  iconClickHandler: Function;
}

const SacItemToggleIcon: FunctionComponent<ISacItemToggleIcon> = (
  props: ISacItemToggleIcon
) => {
  if (props.hasChildren) {
    const iconClass = props.expanded ? faCaretRight : faCaretDown;
    return (
      <div
        className="sac-item-toggle-icon"
        onClick={() => {
          props.iconClickHandler(!props.expanded);
        }}>
        <FontAwesomeIcon icon={iconClass} />
      </div>
    );
  }
  return null;
};

export default SacItemToggleIcon;
