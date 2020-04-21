import { SacItemTextSearchType } from "../helpers/optionsHelper";
import {
  getSearchTypeEnum,
  getSearchTypeValue,
  showSacItemBasedOnSearch,
} from "../helpers/searchItemsHelper";

describe("getSearchTypeEnum()", () => {
  test.each([
    ["exists", SacItemTextSearchType.ExistsIn],
    ["starts", SacItemTextSearchType.StartsWith],
    ["ends", SacItemTextSearchType.EndsWith],
    ["regex", SacItemTextSearchType.Regex],
    ["invalid", SacItemTextSearchType.None],
    ["", SacItemTextSearchType.None],
  ])("Returns the expected type for %s", (value, expected) => {
    const actual = getSearchTypeEnum(value);
    expect(expected).toBe(actual);
  });
});

describe("getSearchTypeValue()", () => {
  test.each([
    ["exists", SacItemTextSearchType.ExistsIn],
    ["starts", SacItemTextSearchType.StartsWith],
    ["ends", SacItemTextSearchType.EndsWith],
    ["regex", SacItemTextSearchType.Regex],
    ["", SacItemTextSearchType.None],
  ])("Returns %s for type %s", (expected, value) => {
    const actual = getSearchTypeValue(value);
    expect(expected).toBe(actual);
  });
});

describe("showSacItemBasedOnSearch()", () => {
  test.each([
    [
      true,
      { id: "1", value: "One" },
      { text: "O", type: SacItemTextSearchType.StartsWith },
    ],
    [
      true,
      { id: "1", value: "One" },
      { text: "o", type: SacItemTextSearchType.StartsWith },
    ],
    [
      false,
      { id: "1", value: "One" },
      { text: "n", type: SacItemTextSearchType.StartsWith },
    ],
    [
      true,
      { id: "1", value: "One", children: [{ id: "1.1", value: "New" }] },
      { text: "n", type: SacItemTextSearchType.StartsWith },
    ],
    [
      true,
      { id: "1", value: "One" },
      { text: "", type: SacItemTextSearchType.StartsWith },
    ],
    [
      true,
      { id: "1", value: "One" },
      { text: "e", type: SacItemTextSearchType.EndsWith },
    ],
    [
      true,
      { id: "1", value: "One" },
      { text: "E", type: SacItemTextSearchType.EndsWith },
    ],
    [
      false,
      { id: "1", value: "One" },
      { text: "o", type: SacItemTextSearchType.EndsWith },
    ],
    [
      true,
      { id: "1", value: "One" },
      { text: "n", type: SacItemTextSearchType.ExistsIn },
    ],
    [
      true,
      { id: "1", value: "One" },
      { text: "N", type: SacItemTextSearchType.ExistsIn },
    ],
    [
      true,
      { id: "1", value: "A sample text" },
      { text: "sample", type: SacItemTextSearchType.ExistsIn },
    ],
    [
      true,
      { id: "1", value: "A sample text" },
      { text: "Sample", type: SacItemTextSearchType.ExistsIn },
    ],
    [
      true,
      { id: "1", value: "A sample text" },
      { text: "^A s", type: SacItemTextSearchType.Regex },
    ],
    [
      true,
      { id: "1", value: "A sample text" },
      { text: "^A s.*t$", type: SacItemTextSearchType.Regex },
    ],
    [
      true,
      { id: "1", value: "A sample text" },
      { text: "^a s", type: SacItemTextSearchType.Regex },
    ],
    [
      false,
      { id: "1", value: "A sample text" },
      { text: "^A s.*tt$", type: SacItemTextSearchType.Regex },
    ],
  ])("Returns %s for item %o and search object %o", (expected, item, obj) => {
    const actual = showSacItemBasedOnSearch(item, obj);
    expect(actual).toBe(expected);
  });
});
