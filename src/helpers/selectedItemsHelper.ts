import { ISacItem } from "../components/sac/sac";

export const calculateSelectedItems = (
  item: ISacItem,
  selectedItems: ISacItem[]
): ISacItem[] => {
  if (item.selected) {
    // Add if not exists
  } else {
    return removeById(item.id, selectedItems);
  }
};

export const removeById = (
  id: string,
  selectedItems: ISacItem[]
): ISacItem[] => {
  if (selectedItems.length > 0) {
    const copy = selectedItems.slice();
    const i = copy.findIndex(x => x.id === id);
    copy.splice(i, 1);
    return copy;
  }
  return [];
};
