import {
  calculateSelectedItems,
  addUnique,
  removeById,
  calculateSelectionItem,
} from "./selectedItemsHelper";
import { ISacItem, ISelectionItem } from "../components/sac/sac";

describe("addUnique()", () => {
  test("Adds the provided element to empty array", () => {
    const item: ISacItem = {
      id: "1",
      value: "One",
    };
    const selectedItems: ISacItem[] = [];
    const actual = addUnique(item, selectedItems);
    const expectedItems = [
      {
        id: "1",
        value: "One",
      },
    ];
    expect(actual).toEqual(expectedItems);
  });

  test("Adds another element to a non empty array", () => {
    const item: ISacItem = {
      id: "1",
      value: "One",
    };
    const selectedItems: ISacItem[] = [
      {
        id: "2",
        value: "Two",
      },
    ];
    const actual = addUnique(item, selectedItems);
    const expectedItems = [
      {
        id: "2",
        value: "Two",
      },
      {
        id: "1",
        value: "One",
      },
    ];
    expect(actual).toEqual(expectedItems);
  });

  test("Doen not add an item with the same id with an existing item", () => {
    const item: ISacItem = {
      id: "1",
      value: "One",
    };
    const selectedItems: ISacItem[] = [
      {
        id: "1",
        value: "One existing",
      },
    ];
    const actual = addUnique(item, selectedItems);
    const expectedItems = [
      {
        id: "1",
        value: "One existing",
      },
    ];
    expect(actual).toEqual(expectedItems);
  });
});

describe("removeById()", () => {
  test.each([
    {
      id: "1",
      selectedItems: [
        {
          id: "1",
          value: "One",
        },
        {
          id: "2",
          value: "Two",
        },
      ],
      expectedItems: [
        {
          id: "2",
          value: "Two",
        },
      ],
    },
    {
      id: "2",
      selectedItems: [
        {
          id: "1",
          value: "One",
        },
        {
          id: "2",
          value: "Two",
        },
      ],
      expectedItems: [
        {
          id: "1",
          value: "One",
        },
      ],
    },
    {
      id: "3",
      selectedItems: [
        {
          id: "1",
          value: "One",
        },
        {
          id: "2",
          value: "Two",
        },
      ],
      expectedItems: [
        {
          id: "1",
          value: "One",
        },
        {
          id: "2",
          value: "Two",
        },
      ],
    },
    {
      id: "1",
      selectedItems: [],
      expectedItems: [],
    },
  ])("Remove id %o", (x) => {
    const actual = removeById(x.id, x.selectedItems);
    expect(actual).toEqual(x.expectedItems);
  });
});

describe("calculateSelectedItems()", () => {
  test("Adds a newly selected item", () => {
    const selectedItems: ISacItem[] = [];
    const item: ISacItem = {
      id: "1",
      value: "One",
      selected: true,
    };
    const expected: ISacItem[] = [
      {
        id: "1",
        value: "One",
        selected: true,
      },
    ];
    const actual = calculateSelectedItems(item, selectedItems);
    expect(actual).toEqual(expected);
  });

  test("Removes a deselected item", () => {
    const selectedItems: ISacItem[] = [
      {
        id: "1",
        value: "One",
        selected: true,
      },
      {
        id: "2",
        value: "Two",
        selected: true,
      },
    ];
    const item: ISacItem = {
      id: "1",
      value: "One",
      selected: false,
    };
    const expected: ISacItem[] = [
      {
        id: "2",
        value: "Two",
        selected: true,
      },
    ];
    const actual = calculateSelectedItems(item, selectedItems);
    expect(actual).toEqual(expected);
  });
});

describe("calculateSelectionItem()", () => {
  test("Returns all selected item", () => {
    const data: ISacItem[] = [
      {
        id: "1",
        value: "One",
      },
      {
        id: "2",
        value: "Two",
      },
    ];
    const selectedItems: ISacItem[] = [
      {
        id: "1",
        value: "One",
      },
      {
        id: "2",
        value: "Two",
      },
    ];
    const actual = calculateSelectionItem(data, selectedItems);
    const expected: ISelectionItem = {
      allSelected: true,
      selectedItems: [
        {
          id: "1",
          value: "One",
        },
        {
          id: "2",
          value: "Two",
        },
      ],
    };
    expect(actual).toEqual(expected);
  });

  test("Returns one selected item", () => {
    const data: ISacItem[] = [
      {
        id: "1",
        value: "One",
      },
      {
        id: "2",
        value: "Two",
      },
    ];
    const selectedItems: ISacItem[] = [
      {
        id: "2",
        value: "Two",
      },
    ];
    const actual = calculateSelectionItem(data, selectedItems);
    const expected: ISelectionItem = {
      allSelected: false,
      selectedItems: [
        {
          id: "2",
          value: "Two",
        },
      ],
    };
    expect(actual).toEqual(expected);
  });
});
