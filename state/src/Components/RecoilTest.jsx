import React, { useState } from "react";
import { useRecoilState } from "recoil";
import AsyncCom from "./Recoil/AsyncCom";
import { leftAtom, middleAtom, rightAtom } from "./Recoil/Atom/Atom";
import Left from "./Recoil/Left";
import Middle from "./Recoil/Middle";
import Right from "./Recoil/Right";

export default function RecoilTest() {
  const [left, setLeft] = useRecoilState(leftAtom);
  const [middle, setMiddle] = useRecoilState(middleAtom);
  const [right, setRight] = useRecoilState(rightAtom);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setLeft(left + 1)}>add left</button>
      <button onClick={() => setMiddle(middle + 1)}>add middle</button>
      <button onClick={() => setRight(right + 1)}>add right</button>
      <button onClick={() => setOpen(!open)}>open Aysnc</button>
      <Left />
      <Middle />
      <Right />
      {open && (
        <React.Suspense fallback={<div>loading...</div>}>
          <AsyncCom />
        </React.Suspense>
      )}
    </div>
  );
}
