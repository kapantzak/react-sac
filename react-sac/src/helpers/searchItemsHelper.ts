import { SacItemTextSearchType } from "./optionsHelper";
import { ISacItem, ISacItemSearch } from "../../types/index";

export const getSearchTypeValue = (type: SacItemTextSearchType): string => {
  switch (type) {
    case SacItemTextSearchType.ExistsIn:
      return "exists";
    case SacItemTextSearchType.StartsWith:
      return "starts";
    case SacItemTextSearchType.EndsWith:
      return "ends";
    case SacItemTextSearchType.Regex:
      return "regex";
    default:
      return "";
  }
};

export const getSearchTypeEnum = (value: string): SacItemTextSearchType => {
  switch (value) {
    case "exists":
      return SacItemTextSearchType.ExistsIn;
    case "starts":
      return SacItemTextSearchType.StartsWith;
    case "ends":
      return SacItemTextSearchType.EndsWith;
    case "regex":
      return SacItemTextSearchType.Regex;
    default:
      return SacItemTextSearchType.None;
  }
};

export const showSacItemBasedOnSearch = (
  item: ISacItem,
  obj: ISacItemSearch
): boolean => {
  const valueVisible = applyRegex(item.value, obj);
  if (valueVisible) return true;
  let matchFound = false;
  if (item.children) {
    for (let child of item.children) {
      if (showSacItemBasedOnSearch(child, obj)) {
        matchFound = true;
        break;
      }
    }
  }
  return matchFound;
};

const applyRegex = (value: string, obj: ISacItemSearch): boolean => {
  if ((obj.text || "").length > 0) {
    switch (obj.type) {
      case SacItemTextSearchType.ExistsIn:
        return RegExp(obj.text, "gi").test(value);
      case SacItemTextSearchType.StartsWith:
        return RegExp(`^${obj.text}`, "gi").test(value);
      case SacItemTextSearchType.EndsWith:
        return RegExp(`${obj.text}$`, "gi").test(value);
      case SacItemTextSearchType.Regex:
        return RegExp(obj.text, "gi").test(value);
      default:
        return true;
    }
  }
  return true;
};
