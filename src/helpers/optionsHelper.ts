import { ISacOptions } from "../components/sac/sac";

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
    defaultSearchType: "exists",
  },
};
