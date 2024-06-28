import { useContext, useRef } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

const AddTodo = () => {
  const inputRef = useRef();
  const dateRef = useRef();
  const context = useContext(TodoItemsContext);
  const addNewItem = context.addNewItem;

  const onChange = (event) => {
    event.preventDefault();
    const input = inputRef.current.value;
    const date = dateRef.current.value;
    if (!input.trim() || !date) {
      alert("Please enter the input.");
    } else {
      addNewItem(input, date);
      inputRef.current.value = "";
      dateRef.current.value = "";
    }
  };

  return (
    <>
      <div className="container text-center">
        <form onSubmit={onChange} className="row kg-row">
          <div className="col-6">
            <input type="text" placeholder="Enter the chore" ref={inputRef} />
          </div>
          <div className="col-4">
            <input type="date" ref={dateRef} />
          </div>
          <div className="col-2">
            <button className="btn btn-success kg-button">
              <MdOutlineAddBox />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
