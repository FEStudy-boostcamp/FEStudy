import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";

export const FirstInner = observer(({ counter }) => {
  const [isFetch, setIsFetch] = useState(false);
  if (counter.state === "pending") {
    return <div>loading...</div>;
  }
  return (
    <div>
      <button onClick={() => counter.increase()}>add</button>
      <div>{counter.count}</div>
      <button
        onClick={() => {
          counter.fetchPosts();
          setIsFetch(!isFetch);
        }}
      >
        fetch Posts
      </button>
      {isFetch &&
        counter.list?.map(({ body, id, userId, title }) => (
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
});
