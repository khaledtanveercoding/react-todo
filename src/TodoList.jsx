import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todoList = [
    { id: 1, title: "woke up one morning" },
    { id: 2, title: "papa always told me" },
    { id: 3, title: "I was the chosen one" },
    { id: 4, title: "one in a million" }
  ];

  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;