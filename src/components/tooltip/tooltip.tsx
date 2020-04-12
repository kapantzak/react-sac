import React, { FunctionComponent } from "react";
import "./tooltip.css";

export interface ITooltipProps {}

const Tooltip: FunctionComponent<ITooltipProps> = (props: ITooltipProps) => {
  return <div className="sac-modal-tooltip">Tools</div>;
};

export default Tooltip;
