// import React from "react";
import * as React from "react";
// import { Button } from "react-native";
import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [data, setData] = useState(" ");

  const parentToChild = () => {
    setData("This data is from Parent to Child component");
  };

  return (
    <div>
      <Child parentToChild={data} />
      <div>
        <button
          type="button"
          primary
          onClick={() => {
            parentToChild();
          }}
        >
          Click Parent
        </button>
      </div>
    </div>
  );
}
