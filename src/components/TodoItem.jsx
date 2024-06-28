import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem({ item }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="items-container text-center">
      <div className="row kg-row">
        <div className="col-6">{item.name}</div>
        <div className="col-4">{item.date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItem({ item })}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
