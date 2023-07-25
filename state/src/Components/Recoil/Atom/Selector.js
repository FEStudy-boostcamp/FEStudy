import { selector } from "recoil";
import { leftAtom } from "./Atom";

export const calFromLeft = selector({
  key: "selector/left",
  get: ({ get }) => {
    const originLeft = get(leftAtom);
    const twice = originLeft * 2;
    return twice;
  },
});

export const asyncData = selector({
  key: "selector/asyncData",
  get: async ({ get }) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = res.json();
    return result;
  },
});
