import * as React from "react";

export default function Child({ childToParent }) {
  const heading = "Child to Parent";

  const data = "This data is from Child to Parent";

  return (
    <div>
      <h1> {heading} </h1>
      <button
        type="button"
        onClick={() => {
          childToParent(data);
        }}
      >
        Click Child
      </button>
    </div>
  );
}
