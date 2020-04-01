import { ISacItem } from "../components/sac/sac";

export const calculateSelectedItems = (
  item: ISacItem,
  selectedItems: ISacItem[]
): ISacItem[] => {
  if (item.selected) {
    return addUnique(item, selectedItems);
  }
  return removeById(item.id, selectedItems);
};

export const addUnique = (
  item: ISacItem,
  selectedItems: ISacItem[]
): ISacItem[] => {
  const copy = selectedItems.slice();
  const i = copy.findIndex(x => x.id === item.id);
  if (i === -1) {
    copy.push(item);
  }
  return copy;
};

export const removeById = (
  id: string,
  selectedItems: ISacItem[]
): ISacItem[] => {
  if (selectedItems.length > 0) {
    const copy = selectedItems.slice();
    const i = copy.findIndex(x => x.id === id);
    if (i !== -1) {
      copy.splice(i, 1);
      return copy;
    }
  }
  return selectedItems;
};
