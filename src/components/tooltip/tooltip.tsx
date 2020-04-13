import React, { FunctionComponent, useState } from "react";
import { ISacOptTools } from "../sac/sac";
import "./tooltip.css";

export interface ITooltipProps {
  toolsOptions: ISacOptTools;
}

const Tooltip: FunctionComponent<ITooltipProps> = (props: ITooltipProps) => {
  const tools = props.toolsOptions || {};
  const [searchType, setSearchType] = useState<string>(
    tools.defaultSearchType || "exists"
  );

  const selectOnChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    const val: string = e.currentTarget.value;
    setSearchType(val);
  };

  return (
    <div className="sac-modal-tooltip">
      <select value={searchType} onChange={selectOnChangeHandler}>
        <option value="exists">Exists in</option>
        <option value="starts">Starts with</option>
        <option value="ends">Ends with</option>
        <option value="regex">Regular expression</option>
      </select>
      <input type="text" />
    </div>
  );
};

export default Tooltip;
