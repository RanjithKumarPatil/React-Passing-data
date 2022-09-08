import * as React from "react";
import Child from "./Child";
import { useState } from "react";

export default function Childtoparent() {
  const [data, setData] = useState(" ");

  const childToParent = (childdata) => {
    setData(childdata);
  };

  return (
    <div>
      {data}
      <div>
        <Child childToParent={childToParent} />
      </div>
    </div>
  );
}
