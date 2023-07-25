import React from "react";
import Inner from "./Inner";

export default function Outer() {
  console.log("render Outer");

  return (
    <div
      style={{
        border: "2px solid black",
        width: "300px",
        padding: "5px",
        margin: "20px",
      }}
    >
      <div>Outer</div>
      <Inner></Inner>
    </div>
  );
}
