import React from "react";
import { Link } from "react-router-dom";

export default function StateBtns() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to={"/recoil"}>recoil</Link>
      <Link to={"/mobx"}>mobx</Link>
      <Link to={"/context"}>contextapi</Link>
    </div>
  );
}
