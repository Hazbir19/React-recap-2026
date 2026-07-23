import React from "react";
import Massage from "./components/Massage";
import "./App.css";
import Counter from "./components/Counter";
import UserDetails from "./components/UserDetails";
import Form from "./components/Form";
import Mounting from "./components/ComP_Life_Cycle/Mounting";
import HoverCounter from "./components/HoverCounter";
import UserPost from "./components/Hooks/UserPost";
import FunctionCounter from "./components/FunctionCounter";

function App() {
  return (
    <>
      <div>React practise</div>
      <Massage />
      {/* <Counter name="farhad" />
      <HoverCounter /> */}
      {/* <UserDetails></UserDetails> */}
      {/* <Form />
      <Mounting /> */}
      <UserPost />
      <FunctionCounter />
    </>
  );
}

export default App;
