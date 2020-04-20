import React, { FunctionComponent, useState, useEffect, useRef } from "react";
import {
  calculateDataSelection,
  calculateSelectionItem,
  setAllItemsSelection,
  invertItemsSelection,
} from "./helpers/selectedItemsHelper";
import { calculateSacButtonText } from "./helpers/sacButtonHelper";
import SacButton from "./components/sacButton/sacButton";
import SacOverlay from "./components/sacOverlay/sacOverlay";
import { defaultOptions, SacItemTextSearchType } from "./helpers/optionsHelper";
import { defaultsDeep } from "lodash";
import * as types from "../types/index";
import "./index.css";
import "./css/defaultTheme/style.css";

const Sac: FunctionComponent<types.ISacProps> = (props: types.ISacProps) => {
  const options: types.ISacOptions = defaultsDeep(
    {},
    props.options,
    defaultOptions
  );
  const button = options.button || {};
  const modal = options.modal || {};
  const footer = options.footer || {};

  const [buttonText, setButtonText] = useState<string>(button.text || "");
  const [isOpened, setIsOpened] = useState<boolean>(modal.opened || false);

  let initData = JSON.parse(JSON.stringify(props.data));
  const [dataSelection, setDataSelection] = useState<types.ISacItem[]>(
    initData
  );
  const [initialData, setInitialData] = useState<types.ISacItem[]>(initData);
  const [itemSearch, setItemSearch] = useState<types.ISacItemSearch>(
    ((options || {}).tools || {}).defaultSearchItem || {
      text: "",
      type: SacItemTextSearchType.ExistsIn,
    }
  );

  const escKeyDownHandler = (e: KeyboardEvent): void => {
    if (e.key === "Escape") {
      setIsOpened(false);
    }
  };

  const firstLoad = useRef(true);
  useEffect(() => {
    if (firstLoad.current) {
      updateButtonText();
    }

    if (isOpened) {
      if (
        firstLoad.current === false &&
        options &&
        options.events &&
        options.events.modalOpenCallback
      ) {
        options.events.modalOpenCallback(calculateSelectionItem(dataSelection));
      }

      if (modal.closeModalOnEscapeKey) {
        document.addEventListener("keydown", escKeyDownHandler);

        return () => {
          document.removeEventListener("keydown", escKeyDownHandler);
        };
      }
    } else {
      if (
        firstLoad.current === false &&
        options &&
        options.events &&
        options.events.modalCloseCallback
      ) {
        options.events.modalCloseCallback(
          calculateSelectionItem(dataSelection)
        );
      }
    }
    firstLoad.current = false;
  });

  const mainButtonClickHanlder = () => {
    setIsOpened(!isOpened);
  };

  const closeElementClickHandler = () => {
    setIsOpened(false);
  };

  const searchModeChangeHandler = (searchItem: types.ISacItemSearch) => {
    setItemSearch(searchItem);
  };

  const itemClickHandler = (item: types.ISacItem) => {
    const newDataSelection = calculateDataSelection(item, dataSelection);
    setDataSelection(newDataSelection);
  };

  const applyCallback = (
    e: React.MouseEvent<HTMLButtonElement>,
    callback?: (
      selItem: types.ISelectionItem,
      e: React.MouseEvent<HTMLButtonElement>
    ) => any
  ) => {
    if (callback) {
      const selItem = calculateSelectionItem(dataSelection);
      callback(selItem, e);
    }
  };

  const updateButtonText = () => {
    const selItem = calculateSelectionItem(dataSelection);
    const sacButtonText = calculateSacButtonText(selItem, button);
    setButtonText(sacButtonText);
  };

  const applySelectionCallback = () => {
    updateButtonText();
    if (options && options.events && options.events.selectionCallback) {
      options.events.selectionCallback(calculateSelectionItem(dataSelection));
    }
  };

  const footerButtonsActions: types.IFooterButtonsActions = {
    btnSelect_clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => {
      setInitialData(dataSelection);
      setIsOpened(false);
      applySelectionCallback();
      const callback = (footer.btnSelect || {}).callback;
      applyCallback(e, callback);
    },
    btnCancel_clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => {
      setDataSelection(initialData);
      setIsOpened(false);
      const callback = (footer.btnCancel || {}).callback;
      applyCallback(e, callback);
    },
    btnSelectAll_clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => {
      const newDataSelection = setAllItemsSelection(dataSelection, true);
      setDataSelection(newDataSelection);
      const callback = (footer.btnSelectAll || {}).callback;
      applyCallback(e, callback);
    },
    btnInvertSelection_clickHandler: (
      e: React.MouseEvent<HTMLButtonElement>
    ) => {
      const newDataSelection = invertItemsSelection(dataSelection);
      setDataSelection(newDataSelection);
      const callback = (footer.btnInvertSelection || {}).callback;
      applyCallback(e, callback);
    },
    btnDeselectAll_clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => {
      const newDataSelection = setAllItemsSelection(dataSelection, false);
      setDataSelection(newDataSelection);
      const callback = (footer.btnDeselectAll || {}).callback;
      applyCallback(e, callback);
    },
  };

  return (
    <React.Fragment>
      <SacButton
        text={buttonText}
        buttonOptions={button}
        mainButtonClickHanlder={mainButtonClickHanlder}></SacButton>
      <SacOverlay
        isOpened={isOpened}
        data={dataSelection}
        options={options}
        closeElementClickHandler={closeElementClickHandler}
        itemSearch={itemSearch}
        itemClickHandler={itemClickHandler}
        searchModeChangeHandler={searchModeChangeHandler}
        footerButtonsActions={footerButtonsActions}></SacOverlay>
    </React.Fragment>
  );
};

export default Sac;
