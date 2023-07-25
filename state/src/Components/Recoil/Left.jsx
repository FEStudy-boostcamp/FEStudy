import React from "react";
import { useRecoilValue } from "recoil";
import { leftAtom } from "./Atom/Atom";
import { calFromLeft } from "./Atom/Selector";

export default function Left() {
  const leftValue = useRecoilValue(leftAtom);
  const calLeft = useRecoilValue(calFromLeft);
  return (
    <div>
      Left : {leftValue} CalLeft :{calLeft}
    </div>
  );
}
