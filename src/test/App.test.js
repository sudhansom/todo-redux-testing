import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "../App";
import CustomButton from "../components/Button";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

// describe("increase button", () => {
//   test("increase by 1", () => {
//     const handleClick = jest.fn();
//     const { getByTestId } = render(
//       <CustomButton clicked={handleClick} increase="increase" />
//     );
//     const increaseBtn = getByTestId("increase");
//     fireEvent.click(increaseBtn);
//   });
// });

// Resource:
// https://localcoder.org/usedispatch-error-could-not-find-react-redux-context-value-please-ensure-the

describe("with react testing library", () => {
  const initialState = { count: 0 };
  const mockStore = configureStore();
  let store;
  test("h1 value exists", () => {
    store = mockStore(initialState);
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const increaseBtn = getByTestId("increase");
    const decreaseBtn = getByTestId("decrease");
    const value = getByTestId("currentValue");
    expect(value.textContent).toEqual("0");
    fireEvent.click(increaseBtn);
    const value1 = getByTestId("currentValue");
    expect(value1.textContent).toEqual("0");
    //expect(getByTestId("h1-tag").textContained).not.toEqual("Counter");
    //expect(getByTestId("currentValue").textContent).toEqual("0");
  });
});
