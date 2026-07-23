import React, { useEffect, useReducer } from "react";

const intialState = {
  loading: true,
  post: {},
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        loading: false,
        post: action.result,
        error: "",
      };
    case "error":
      return {
        loading: false,
        post: {},
        error: "This was error!",
      };
    default:
      return State;
  }
};

const UserPost = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  useEffect(() => {
    const fetchPost = async () => {
      fetch("https://jsonplaceholder.typicode.com/todos/2")
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "success", result: data });
          console.log(data);
        })
        .catch(() => {
          dispatch({ type: "error" });
        });
    };
    fetchPost();
  }, []);
  return (
    <div>
      <p>{state.loading && "Loading....."}</p>
      <h1>Post Title: {state.post.title}</h1>
      <p>Post body</p>
    </div>
  );
};

export default UserPost;
