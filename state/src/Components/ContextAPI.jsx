import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MaiContext } from "./Context/MainContext";
import Outer from "./Context/Outer";

export default function ContextAPI() {
  const [temp, setTemp] = useState({ first: 0, second: 1 });

  return (
    <MaiContext.Provider value={temp}>
      <Outer />
      <button
        onClick={() => {
          setTemp({ ...temp, first: temp.first + 1 });
        }}
      >
        add first
      </button>
      <button
        onClick={() => {
          setTemp({ ...temp, second: temp.second + 1 });
        }}
      >
        add second
      </button>
    </MaiContext.Provider>
  );
}
