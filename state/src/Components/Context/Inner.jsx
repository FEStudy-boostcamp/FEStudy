import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MaiContext } from "./MainContext";
import MoreInner from "./MoreInner";

export default function Inner() {
  console.log("render inner");
  const mainCon = useContext(MaiContext);
  return (
    <div style={{ border: "2px solid red", padding: "5px" }}>
      <div>Inner : first:{mainCon.first}</div>
      <MoreInner></MoreInner>
    </div>
  );
}
