import React, { useState } from "react";
const withFuctionHOC = (Component) => {
  const FuctionHOC = () => {
    const [count, setcount] = useState(0);
    const Increment = () => {
      setcount((prevCount) => prevCount + 1);
    };
    return (
      <Component count={count} Increment={Increment} name="Farhadul Hasan" />
    );
  };
  return FuctionHOC;
};
export default withFuctionHOC;
