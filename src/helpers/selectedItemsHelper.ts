import { ISacItem, ISelectionItem } from "../components/sac/sac";

export const calculateDataSelection = (
  item: ISacItem,
  dataSelection: ISacItem[]
): ISacItem[] => {
  const copy = dataSelection.slice();
  const thisItem = getItemById(item.id, copy);
  if (thisItem) {
    setItemSelection(thisItem, item.selected || false);
  }
  return copy;
};

export const getItemById = (
  id: string,
  collection: ISacItem[]
): ISacItem | null => {
  while (collection.length > 0) {
    for (let item of collection) {
      if (item.id === id) return item;
      if (item.children) {
        const child = getItemById(id, item.children);
        if (child) return child;
      }
    }
    return getItemById(id, collection.slice(1));
  }
  return null;
};

export const setItemSelection = (item: ISacItem, isSelected: boolean): void => {
  item.selected = isSelected;
  if (item.children) {
    for (let child of item.children) {
      setItemSelection(child, isSelected);
    }
  }
};

export const calculateSelectionItem = (data: ISacItem[]): ISelectionItem => {
  const collection = data.slice();
  let allSelected = true;
  const selectedItems: ISacItem[] = [];

  while (collection.length > 0) {
    for (let item of collection) {
      collection.splice(0, 1);
      if (item.selected) {
        selectedItems.push(item);
      } else {
        allSelected = false;
        if (item.children) {
          const selItem = calculateSelectionItem(item.children);
          selItem.selectedItems.forEach((x) => {
            selectedItems.push(x);
          });
        }
      }
    }
  }

  return {
    allSelected,
    selectedItems,
  };
};
