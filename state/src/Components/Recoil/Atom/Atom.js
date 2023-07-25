import { atom } from "recoil";

export const leftAtom = atom({
  key: "atom/left",
  default: 0,
});

export const middleAtom = atom({
  key: "atom/middle",
  default: 0,
});

export const rightAtom = atom({
  key: "atom/right",
  default: 0,
});
