import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { MaiContext } from "./MainContext";

export default function MoreMoreInner() {
  console.log("render MoreMoreInner");
  const mainCon = useContext(MaiContext);
  return (
    <div style={{ border: "2px solid green", padding: "4px" }}>
      MoreMoreInner
      <div>Second: {mainCon.second}</div>
    </div>
  );
}
