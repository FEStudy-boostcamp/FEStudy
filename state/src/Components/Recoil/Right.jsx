import React from "react";
import { useRecoilValue } from "recoil";
import { rightAtom } from "./Atom/Atom";

export default function Right() {
  const rightValue = useRecoilValue(rightAtom);
  return <div>Right: {rightValue}</div>;
}
