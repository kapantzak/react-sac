import React, { FunctionComponent, useState } from "react";
import { ISacOptTools, ISacItemSearch } from "../../index";
import { SacItemTextSearchType } from "../../helpers/optionsHelper";
import {
  getSearchTypeEnum,
  getSearchTypeValue,
} from "../../helpers/searchItemsHelper";
import "./tooltip.css";

export interface ITooltipProps {
  toolsOptions: ISacOptTools;
  searchModeChangeHandler: (searchObj: ISacItemSearch) => any;
}

const Tooltip: FunctionComponent<ITooltipProps> = (props: ITooltipProps) => {
  const tools = props.toolsOptions || {};
  const searchModeObj = tools.defaultSearchItem || {
    text: "",
    type: SacItemTextSearchType.ExistsIn,
  };
  const [searchMode, setSearchMode] = useState<ISacItemSearch>(searchModeObj);

  const selectOnChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    const val: string = e.currentTarget.value;
    const type = getSearchTypeEnum(val);
    setSearchMode(
      Object.assign({}, searchMode, {
        type,
      })
    );
    props.searchModeChangeHandler({
      text: searchMode.text,
      type,
    });
  };

  const textOnOnInputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const val: string = e.currentTarget.value;
    setSearchMode(
      Object.assign({}, searchMode, {
        text: val,
      })
    );
    props.searchModeChangeHandler({
      text: val,
      type: searchMode.type,
    });
  };

  return (
    <div className="sac-modal-tooltip">
      <select
        value={getSearchTypeValue(searchMode.type)}
        onChange={selectOnChangeHandler}>
        <option value="exists">Exists in</option>
        <option value="starts">Starts with</option>
        <option value="ends">Ends with</option>
        <option value="regex">Regular expression</option>
      </select>
      <input type="text" onInput={textOnOnInputHandler} />
    </div>
  );
};

export default Tooltip;
