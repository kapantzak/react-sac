import { ISacItem, ISelectionItem } from "../../types/index";

export const calculateDataSelection = (
  item: ISacItem,
  dataSelection: ISacItem[]
): ISacItem[] => {
  const copy = JSON.parse(JSON.stringify(dataSelection));
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

export const invertItemSelection = (item: ISacItem): void => {
  item.selected = !item.selected;
  if (item.children) {
    for (let child of item.children) {
      invertItemSelection(child);
    }
  }
};

export const setAllItemsSelection = (
  data: ISacItem[],
  isSelected: boolean
): ISacItem[] => {
  const copy: ISacItem[] = JSON.parse(JSON.stringify(data));
  copy.forEach((item) => {
    setItemSelection(item, isSelected);
  });
  return copy;
};

export const invertItemsSelection = (data: ISacItem[]): ISacItem[] => {
  const copy: ISacItem[] = JSON.parse(JSON.stringify(data));
  copy.forEach((item) => {
    invertItemSelection(item);
  });
  return copy;
};

export const calculateSelectionItem = (data: ISacItem[]): ISelectionItem => {
  const collection = JSON.parse(JSON.stringify(data));
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
