import React from "react";
import { observer } from "mobx-react-lite";
import { firstStore } from "./Mobx/store";
import { FirstInner } from "./Mobx/FirstInner";
import { SecondInner } from "./Mobx/SecondInner";

const CountState = new firstStore();
export const MobX = () => {
  return (
    <div>
      <FirstInner counter={CountState}></FirstInner>
      <SecondInner counter={CountState}></SecondInner>
    </div>
  );
};
