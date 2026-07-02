import React from "react";
import Massage from "./components/Massage";
import "./App.css";
import Counter from "./components/Counter";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <>
      <div>React practise</div>
      <Massage />
      <Counter />
      <UserDetails></UserDetails>
    </>
  );
}

export default App;
