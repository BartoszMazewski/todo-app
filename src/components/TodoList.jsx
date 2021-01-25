import { fetchTodos } from "../services/fetchTodos";
import { useEffect, useState } from 'react';
import { Todo } from "./Todo"

export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodos();
      setTodoList(data);
    }
    fetchData();
  }, [])

  const listItems = todoList.map((todo) => <Todo todo={todo} />); 

  return (
    <ul>
      {listItems}
    </ul>
  )
};
