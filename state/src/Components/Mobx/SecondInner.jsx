import { observer } from "mobx-react-lite";

export const SecondInner = ({ counter }) => {
  return (
    <div>
      <button onClick={() => counter.increase()}>seccondAdd</button>
    </div>
  );
};
