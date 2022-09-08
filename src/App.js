import React from "react";
import Parent from "./ParentToChild/parentToChild";
import Childtoparent from "./ChildToParent/childToParent";

export default function App() {
  return (
    <div>
      <Parent />
      <Childtoparent />
    </div>
  );
}
