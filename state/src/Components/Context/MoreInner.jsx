import React from "react";
import MoreMoreInner from "./MoreMoreInner";

export default function MoreInner() {
  console.log("render MoreInner");

  return (
    <div style={{ border: "2px solid orange", padding: "5px" }}>
      <div>MoreInner</div>
      <MoreMoreInner></MoreMoreInner>
    </div>
  );
}
