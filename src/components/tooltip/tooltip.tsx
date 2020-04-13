import React, { FunctionComponent } from "react";
import "./tooltip.css";

export interface ITooltipProps {}

const Tooltip: FunctionComponent<ITooltipProps> = (props: ITooltipProps) => {
  return (
    <div className="sac-modal-tooltip">
      <select>
        <option value="exists">Exists in</option>
        <option value="starts">Starts with</option>
        <option value="starts">Ends with</option>
        <option value="starts">Regular expression</option>
      </select>
      <input type="text" />
    </div>
  );
};

export default Tooltip;
