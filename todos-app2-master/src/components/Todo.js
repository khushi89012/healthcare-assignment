import React from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../redux/action/addTodo.action";

const Todo = ({ todo, idx, deleteTodo, editTodo, selected, text }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: "1px solid #ffffffa6",
        padding: "5px",
        cursor: "pointer"
      }}
    >
      <div onClick={() => editTodo(idx)}>{selected === idx ? text : todo}</div>
      <div style={{ cursor: "pointer" }} onClick={() => deleteTodo(idx)}>
      <img src = "https://cdn2.iconfinder.com/data/icons/squircle-ui/32/Trash-128.png" 
      width="20px"
      height="25px"/>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteTodo: key => dispatch(deleteTodo(key)),
  editTodo: key => dispatch(editTodo(key))
});

const mapStateToProps = ({ text, selected }) => ({
  text,
  selected
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
