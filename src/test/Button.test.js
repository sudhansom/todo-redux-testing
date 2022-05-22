import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import CustomButton from "../components/Button";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("check the button", () => {
  const myFunc = jest.fn();
  const { getByTestId } = render(
    <CustomButton clicked={myFunc} increase="increase" />,
    container
  );
  const btn = getByTestId("increase");
  expect(btn).toBeTruthy();
  expect(myFunc).toBeCalledTimes(0);
  fireEvent.click(btn);
  expect(myFunc).toBeCalledTimes(1);
});
