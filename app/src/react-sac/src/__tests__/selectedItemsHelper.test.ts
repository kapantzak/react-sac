import {
  calculateSelectionItem,
  getItemById,
  setItemSelection,
  calculateDataSelection,
  setAllItemsSelection,
  invertItemsSelection,
  invertItemSelection,
} from "../helpers/selectedItemsHelper";
import { ISacItem, ISelectionItem } from "../../types/index";

describe("calculateSelectionItem()", () => {
  test("Returns all selected items", () => {
    const data: ISacItem[] = [
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
    const actual = calculateSelectionItem(data);
    const expected: ISelectionItem = {
      allSelected: true,
      selectedItems: [
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
      ],
    };
    expect(actual).toEqual(expected);
  });

  test("Returns only selected items", () => {
    const data: ISacItem[] = [
      {
        id: "1",
        value: "One",
        selected: false,
        children: [
          {
            id: "1.1",
            value: "One.one",
            selected: false,
          },
          {
            id: "1.2",
            value: "One.two",
            selected: true,
          },
        ],
      },
      {
        id: "2",
        value: "Two",
        selected: true,
      },
    ];
    const actual = calculateSelectionItem(data);
    const expected: ISelectionItem = {
      allSelected: false,
      selectedItems: [
        {
          id: "1.2",
          value: "One.two",
          selected: true,
        },
        {
          id: "2",
          value: "Two",
          selected: true,
        },
      ],
    };
    expect(actual).toEqual(expected);
  });

  test("Returns all selected nested items", () => {
    const data: ISacItem[] = [
      {
        id: "1",
        value: "One",
        selected: true,
        children: [
          {
            id: "1.1",
            value: "One.one",
            selected: true,
          },
          {
            id: "1.2",
            value: "One.two",
            selected: true,
          },
        ],
      },
      {
        id: "2",
        value: "Two",
        selected: true,
      },
    ];
    const actual = calculateSelectionItem(data);
    const expected: ISelectionItem = {
      allSelected: true,
      selectedItems: [
        {
          id: "1",
          value: "One",
          selected: true,
          children: [
            {
              id: "1.1",
              value: "One.one",
              selected: true,
            },
            {
              id: "1.2",
              value: "One.two",
              selected: true,
            },
          ],
        },
        {
          id: "2",
          value: "Two",
          selected: true,
        },
      ],
    };
    expect(actual).toEqual(expected);
  });

  test("Returns empty array", () => {
    const data: ISacItem[] = [
      {
        id: "1",
        value: "One",
        selected: false,
        children: [
          {
            id: "1.1",
            value: "One.one",
            selected: false,
          },
          {
            id: "1.2",
            value: "One.two",
            selected: false,
          },
        ],
      },
      {
        id: "2",
        value: "Two",
        selected: false,
      },
    ];
    const actual = calculateSelectionItem(data);
    const expected: ISelectionItem = {
      allSelected: false,
      selectedItems: [],
    };
    expect(actual).toEqual(expected);
  });
});

describe("getItemById()", () => {
  test("Returns the expected item", () => {
    const collection: ISacItem[] = [
      {
        id: "1",
        value: "One",
      },
      {
        id: "2",
        value: "Two",
      },
    ];
    const expected = {
      id: "1",
      value: "One",
    };
    const actual = getItemById("1", collection);
    expect(actual).toEqual(expected);
  });

  test("Returns the expected child item", () => {
    const collection: ISacItem[] = [
      {
        id: "1",
        value: "One",
        children: [
          {
            id: "1.1",
            value: "One.one",
            children: [
              {
                id: "1.1.1",
                value: "One.one.one",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        value: "Two",
      },
    ];
    const expected = {
      id: "1.1",
      value: "One.one",
      children: [
        {
          id: "1.1.1",
          value: "One.one.one",
        },
      ],
    };
    const actual = getItemById("1.1", collection);
    expect(actual).toEqual(expected);
  });

  test("Returns the second nested object", () => {
    const collection: ISacItem[] = [
      {
        id: "1",
        value: "One",
        children: [
          {
            id: "1.1",
            value: "One.one",
            children: [
              {
                id: "1.1.1",
                value: "One.one.one",
              },
            ],
          },
          {
            id: "1.2",
            value: "One.two",
          },
        ],
      },
      {
        id: "2",
        value: "Two",
      },
    ];
    const expected = {
      id: "1.2",
      value: "One.two",
    };
    const actual = getItemById("1.2", collection);
    expect(actual).toEqual(expected);
  });

  test("Returns the second object", () => {
    const collection: ISacItem[] = [
      {
        id: "1",
        value: "One",
        children: [
          {
            id: "1.1",
            value: "One.one",
            children: [
              {
                id: "1.1.1",
                value: "One.one.one",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        value: "Two",
      },
    ];
    const expected = {
      id: "2",
      value: "Two",
    };
    const actual = getItemById("2", collection);
    expect(actual).toEqual(expected);
  });

  test("Returns null", () => {
    const collection: ISacItem[] = [
      {
        id: "1",
        value: "One",
      },
      {
        id: "2",
        value: "Two",
      },
    ];
    const actual = getItemById("3", collection);
    expect(actual).toBeNull();
  });
});

describe("setItemSelection()", () => {
  test("Mutates the provided object as expected", () => {
    const collection: ISacItem[] = [
      {
        id: "1",
        value: "One",
        selected: false,
        children: [
          {
            id: "1.1",
            value: "One.one",
            selected: false,
          },
          {
            id: "1.2",
            value: "One.two",
            selected: false,
          },
        ],
      },
      {
        id: "2",
        value: "Two",
        selected: false,
      },
    ];
    const item = getItemById("1", collection);
    if (item) {
      setItemSelection(item, true);
    }
    const expected = [
      {
        id: "1",
        value: "One",
        selected: true,
        children: [
          {
            id: "1.1",
            value: "One.one",
            selected: true,
          },
          {
            id: "1.2",
            value: "One.two",
            selected: true,
          },
        ],
      },
      {
        id: "2",
        value: "Two",
        selected: false,
      },
    ];
    expect(collection).toEqual(expected);
  });
});

describe("calculateDataSelection()", () => {
  test("Sets object tree as selected", () => {
    const dataSelection: ISacItem[] = [
      {
        id: "1",
        value: "One",
        selected: false,
        children: [
          {
            id: "1.1",
            value: "One.one",
            selected: false,
          },
          {
            id: "1.2",
            value: "One.two",
            selected: false,
          },
        ],
      },
      {
        id: "2",
        value: "Two",
        selected: false,
      },
    ];
    const item: ISacItem = {
      id: "1",
      value: "One",
      selected: true,
    };
    const expected = [
      {
        id: "1",
        value: "One",
        selected: true,
        children: [
          {
            id: "1.1",
            value: "One.one",
            selected: true,
          },
          {
            id: "1.2",
            value: "One.two",
            selected: true,
          },
        ],
      },
      {
        id: "2",
        value: "Two",
        selected: false,
      },
    ];
    const actual = calculateDataSelection(item, dataSelection);
    expect(actual).toEqual(expected);
  });

  test("Deselects object tree", () => {
    const dataSelection: ISacItem[] = [
      {
        id: "1",
        value: "One",
        selected: true,
        children: [
          {
            id: "1.1",
            value: "One.one",
            selected: true,
          },
          {
            id: "1.2",
            value: "One.two",
            selected: true,
          },
        ],
      },
      {
        id: "2",
        value: "Two",
        selected: false,
      },
    ];
    const item: ISacItem = {
      id: "1",
      value: "One",
      selected: false,
    };
    const expected = [
      {
        id: "1",
        value: "One",
        selected: false,
        children: [
          {
            id: "1.1",
            value: "One.one",
            selected: false,
          },
          {
            id: "1.2",
            value: "One.two",
            selected: false,
          },
        ],
      },
      {
        id: "2",
        value: "Two",
        selected: false,
      },
    ];
    const actual = calculateDataSelection(item, dataSelection);
    expect(actual).toEqual(expected);
  });

  test("Deselects specific object", () => {
    const dataSelection: ISacItem[] = [
      {
        id: "1",
        value: "One",
        selected: true,
        children: [
          {
            id: "1.1",
            value: "One.one",
            selected: true,
          },
          {
            id: "1.2",
            value: "One.two",
            selected: true,
          },
        ],
      },
      {
        id: "2",
        value: "Two",
        selected: false,
      },
    ];
    const item: ISacItem = {
      id: "1.1",
      value: "One",
      selected: false,
    };
    const expected = [
      {
        id: "1",
        value: "One",
        selected: true,
        children: [
          {
            id: "1.1",
            value: "One.one",
            selected: false,
          },
          {
            id: "1.2",
            value: "One.two",
            selected: true,
          },
        ],
      },
      {
        id: "2",
        value: "Two",
        selected: false,
      },
    ];
    const actual = calculateDataSelection(item, dataSelection);
    expect(actual).toEqual(expected);
  });

  test("Deselects second object", () => {
    const dataSelection: ISacItem[] = [
      {
        id: "1",
        value: "One",
        selected: true,
        children: [
          {
            id: "1.1",
            value: "One.one",
            selected: true,
          },
          {
            id: "1.2",
            value: "One.two",
            selected: true,
          },
        ],
      },
      {
        id: "2",
        value: "Two",
        selected: true,
      },
    ];
    const item: ISacItem = {
      id: "2",
      value: "Two",
      selected: false,
    };
    const expected = [
      {
        id: "1",
        value: "One",
        selected: true,
        children: [
          {
            id: "1.1",
            value: "One.one",
            selected: true,
          },
          {
            id: "1.2",
            value: "One.two",
            selected: true,
          },
        ],
      },
      {
        id: "2",
        value: "Two",
        selected: false,
      },
    ];
    const actual = calculateDataSelection(item, dataSelection);
    expect(actual).toEqual(expected);
  });
});

describe("setAllItemsSelection()", () => {
  test("Selects all items", () => {
    const data: ISacItem[] = [
      {
        id: "1",
        value: "One",
        selected: false,
        children: [
          {
            id: "1.1",
            value: "One.one",
            selected: false,
          },
          {
            id: "1.2",
            value: "One.two",
            selected: true,
          },
        ],
      },
      {
        id: "2",
        value: "Two",
        selected: false,
      },
    ];
    const actual = setAllItemsSelection(data, true);
    const expected: ISacItem[] = [
      {
        id: "1",
        value: "One",
        selected: true,
        children: [
          {
            id: "1.1",
            value: "One.one",
            selected: true,
          },
          {
            id: "1.2",
            value: "One.two",
            selected: true,
          },
        ],
      },
      {
        id: "2",
        value: "Two",
        selected: true,
      },
    ];
    expect(actual).toEqual(expected);
  });

  test("Deselects all items", () => {
    const data: ISacItem[] = [
      {
        id: "1",
        value: "One",
        selected: true,
        children: [
          {
            id: "1.1",
            value: "One.one",
            selected: true,
          },
          {
            id: "1.2",
            value: "One.two",
            selected: true,
          },
        ],
      },
      {
        id: "2",
        value: "Two",
        selected: true,
      },
    ];
    const actual = setAllItemsSelection(data, false);
    const expected: ISacItem[] = [
      {
        id: "1",
        value: "One",
        selected: false,
        children: [
          {
            id: "1.1",
            value: "One.one",
            selected: false,
          },
          {
            id: "1.2",
            value: "One.two",
            selected: false,
          },
        ],
      },
      {
        id: "2",
        value: "Two",
        selected: false,
      },
    ];
    expect(actual).toEqual(expected);
  });
});

describe("invertItemsSelection()", () => {
  test("Inverts all items selcted state", () => {
    const data: ISacItem[] = [
      {
        id: "1",
        value: "One",
        selected: false,
        children: [
          {
            id: "1.1",
            value: "One.one",
            selected: true,
          },
          {
            id: "1.2",
            value: "One.two",
            selected: false,
          },
        ],
      },
      {
        id: "2",
        value: "Two",
        selected: true,
      },
    ];
    const actual = invertItemsSelection(data);
    const expected: ISacItem[] = [
      {
        id: "1",
        value: "One",
        selected: true,
        children: [
          {
            id: "1.1",
            value: "One.one",
            selected: false,
          },
          {
            id: "1.2",
            value: "One.two",
            selected: true,
          },
        ],
      },
      {
        id: "2",
        value: "Two",
        selected: false,
      },
    ];
    expect(actual).toEqual(expected);
  });
});

describe("invertItemSelection()", () => {
  test("Inverts item selection state", () => {
    const item: ISacItem = {
      id: "1",
      value: "One",
      selected: false,
      children: [
        {
          id: "1.1",
          value: "One.one",
          selected: true,
        },
        {
          id: "1.2",
          value: "One.two",
          selected: false,
        },
      ],
    };
    invertItemSelection(item);
    const expected = {
      id: "1",
      value: "One",
      selected: true,
      children: [
        {
          id: "1.1",
          value: "One.one",
          selected: false,
        },
        {
          id: "1.2",
          value: "One.two",
          selected: true,
        },
      ],
    };
    expect(item).toEqual(expected);
  });
});
