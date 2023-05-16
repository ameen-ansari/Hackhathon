import React from "react";
import { useSelector } from "react-redux";

function entries() {
  let store = useSelector((store: any) => store.reducers);
  return (
    <div>
      {store?.entries.map((entry: any, i: number) => {
        return <p key={i}>{entry}</p>;
      })}
    </div>
  );
}

export default entries;
