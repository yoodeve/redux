import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";

const Home = ({todo, addTodo}) => {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit (e) {
      e.preventDefault();
      addTodo(text);
      setText("");
  }
  
  return (
    <>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
};

function getCurrentState(state) {
    return {todo:state}
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo:(text) =>dispatch(actionCreators.addTodo(text))
    };
}

export default connect(null, mapDispatchToProps) (Home);
