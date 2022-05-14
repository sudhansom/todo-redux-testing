import React from "react";
import Button from "@mui/material/Button";

export default function CustomButton({ clicked, increase }) {
  return (
    <Button
      data-testid={increase}
      className="mButton"
      onClick={clicked}
      variant="contained"
    >
      {increase}
    </Button>
  );
}
