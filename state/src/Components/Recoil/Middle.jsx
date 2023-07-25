import React from "react";
import { useRecoilValue } from "recoil";
import { middleAtom } from "./Atom/Atom";

export default function Middle() {
  const middleValue = useRecoilValue(middleAtom);

  return <div>Middle : {middleValue}</div>;
}
