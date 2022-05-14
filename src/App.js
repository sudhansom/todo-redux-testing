import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import Button from "./components/Button";
import { increment, decrement } from "./redux/action";

function App() {
  const value = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleClicked = (value) => {
    if (value === "increase") {
      dispatch(increment(1));
    } else {
      dispatch(decrement(1));
    }
  };
  return (
    <div className="App">
      <h1 data-testid="h1-tag">Counter</h1>
      <h5 data-testid="currentValue">{value}</h5>
      <Button
        increase="increase"
        clicked={() => {
          handleClicked("increase");
        }}
      />
      <Button
        increase={"decrease"}
        clicked={() => {
          handleClicked("decrease");
        }}
      />
    </div>
  );
}

export default App;
