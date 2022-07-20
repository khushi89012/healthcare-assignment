import React, { useEffect } from "react";
import "./styles.css";
import InputField from "./components/InputField";
import TodosList from "./components/TodosList";
import { deleteAll, persistTodos } from "./redux/action/addTodo.action";
import { connect } from "react-redux";
const App = ({ deleteAll, persistTodos }) => {
  useEffect(() => {
    persistTodos();
  }, [persistTodos]);
  return (
    <div className="App">

      <div className="heading"> Todos App <span><img  src= "https://cdn0.iconfinder.com/data/icons/find-a-job-and-interview-flat/512/business_infographic_marketing_report_slide_corporate_presentation_graph_powerpoint-128.png"

width="70px"
height="70px"/>
        </span></div>
      <InputField />
      <TodosList />
      <div>
    
        <button
          className="dltAll"
          onClick={deleteAll}
        >
          {" "}
          Delete All
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos())
});
export default connect(
  null,
  mapDispatchToProps
)(App);
