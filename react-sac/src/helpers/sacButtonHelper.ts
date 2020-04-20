import { ISelectionItem, ISacButton } from "../../types/index";

export const calculateSacButtonText = (
  selItem: ISelectionItem,
  options: ISacButton
): string => {
  const items = selItem.selectedItems || [];
  if (items.length === 0) {
    return `${options.text} (${options.textNone})`;
  }
  if (items.length === 1) {
    return items[0].value;
  }
  if (selItem.allSelected) {
    return `${options.text} (${options.textAll})`;
  }
  return `${options.text} (${items.length})`;
};
