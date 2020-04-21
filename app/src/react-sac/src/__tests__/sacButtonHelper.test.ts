import { calculateSacButtonText } from "../helpers/sacButtonHelper";
import { ISacButton } from "../../types/index";

describe("calculateSacButtonText()", () => {
  const btnOptions: ISacButton = {
    text: "Items",
    textAll: "All",
    textNone: "None",
  };

  test.each([
    ["One", { allSelected: false, selectedItems: [{ id: "1", value: "One" }] }],
    [
      "Items (2)",
      {
        allSelected: false,
        selectedItems: [
          { id: "1", value: "One" },
          { id: "2", value: "Two" },
        ],
      },
    ],
    [
      "Items (All)",
      {
        allSelected: true,
        selectedItems: [
          { id: "1", value: "One" },
          { id: "2", value: "Two" },
        ],
      },
    ],
    ["Items (None)", { allSelected: true, selectedItems: [] }],
    ["Items (None)", { allSelected: true, selectedItems: [] }],
  ])("Returns %s for item %o", (expected, selItem) => {
    const actual = calculateSacButtonText(selItem, btnOptions);
    expect(actual).toBe(expected);
  });
});
