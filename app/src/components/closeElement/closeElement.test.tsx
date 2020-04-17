import React from "react";
import { render } from "@testing-library/react";
import CloseElement from "./closeElement";

describe("CloseElement component", () => {
  test("renders close icon", () => {
    const closeElementClickHandler = () => {};
    const { container } = render(
      <CloseElement closeElementClickHandler={closeElementClickHandler} />
    );
    expect(container.tagName).toBe("DIV");
  });
});
