import React from "react";
import withFuctionHOC from "./HOC/withFuctionHOC";

const FunctionCounter = ({ count, Increment, name }) => {
  return (
    <div>
      <div className="counterDiv">
        <h1>
          {name} Counter - {count}
        </h1>
        <button type="button" onClick={() => Increment()}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default withFuctionHOC(FunctionCounter);
