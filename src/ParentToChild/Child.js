import React from "react";

export default function Child({ parentToChild }) {
  return (
    <div>
      {parentToChild}
      <h1>Parent to Child</h1>
    </div>
  );
}
