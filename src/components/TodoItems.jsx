import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  const { items } = useContext(TodoItemsContext);

  return (
    <>
      {items.map((item) => (
        <TodoItem item={item} key={item.name}></TodoItem>
      ))}
    </>
  );
};

export default TodoItems;
