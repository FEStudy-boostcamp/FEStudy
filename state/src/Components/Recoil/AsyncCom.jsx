import React from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { asyncData } from "./Atom/Selector";

export default function AsyncCom() {
  const data = useRecoilValue(asyncData);
  return (
    <div>
      {data.map(({ body, id, userId, title }) => (
        <div key={id} style={{ margin: "10px", border: "2px solid gray" }}>
          <div>
            id:{id} userId: {userId}
          </div>
          <div> title: {title}</div>
          <div> body: {body}</div>
        </div>
      ))}
    </div>
  );
}
