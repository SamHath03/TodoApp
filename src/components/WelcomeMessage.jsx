import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
const WelcomeMessage = () => {
  const { items } = useContext(TodoItemsContext);

  return items.length === 0 && <p className={styles.welcome}>No Results</p>;
};

export default WelcomeMessage;
