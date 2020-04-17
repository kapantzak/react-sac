import { ISacOptions } from "../components/sac/sac";

export enum SacItemTextSearchType {
  None,
  ExistsIn,
  StartsWith,
  EndsWith,
  Regex,
}

export const defaultOptions: ISacOptions = {
  modal: {
    multiSelect: true,
    opened: false,
    closeModalOnEscapeKey: true,
  },
  header: {
    modalTitle: "Title",
  },
  tools: {
    defaultSearchItem: {
      text: "",
      type: SacItemTextSearchType.ExistsIn,
    },
  },
  footer: {
    btnSelect: {
      text: "OK",
      visible: true,
    },
    btnCancel: {
      text: "Cancel",
      visible: true,
    },
    btnSelectAll: {
      text: "Select all",
      visible: true,
    },
    btnInvertSelection: {
      text: "Invert selection",
      visible: true,
    },
    btnDeselectAll: {
      text: "Deselect all",
      visible: true,
    },
  },
};
