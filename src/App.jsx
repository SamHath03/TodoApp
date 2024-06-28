import { useReducer } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./css/App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

const itemsReducer = (currItems, action) => {
  let newItems = currItems;
  if (action.type === "NEW_ITEM") {
    newItems = [
      ...currItems,
      { name: action.payload.input, date: action.payload.date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newItems = currItems.filter((itemObj) => itemObj !== action.payload.item);
  }
  return newItems;
};

function App() {
  const [items, disptachItems] = useReducer(itemsReducer, []);

  const addNewItem = (input, date) => {
    const newAction = {
      type: "NEW_ITEM",
      payload: {
        input,
        date,
      },
    };
    disptachItems(newAction);
  };

  const deleteItem = ({ item }) => {
    const newAction = {
      type: "DELETE_ITEM",
      payload: {
        item,
      },
    };
    disptachItems(newAction);
  };

  return (
    <TodoItemsContext.Provider value={{ items, addNewItem, deleteItem }}>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <div className="container">
          <TodoItems></TodoItems>
        </div>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
