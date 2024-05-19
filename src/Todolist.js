import React, { useState } from 'react';

const TodoList = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [todos, setTodos] = useState([]); // State to manage multiple todos

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleAddTodo = () => {
    // Create a new todo object and add it to the todos array
    const newTodo = { title, content };
    setTodos([...todos, newTodo]);
    // Clear the input fields after adding a todo
    setTitle('');
    setContent('');
  };
  const handleDeleteTodo = (index) => {
    // Filter out the todo item at the specified index
    const updatedTodos = todos.filter((todo, i) => i !== index);
    // Update the todos array with the filtered array
    setTodos(updatedTodos);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Enter content"
        value={content}
        onChange={handleContentChange}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {todos.map((todo, index) => (
        <div key={index}>
          <h1>{todo.title}</h1>
          <p>{todo.content}</p>
          <button onClick={()=>handleDeleteTodo(index)}>Delete</button>
        </div>
      ))}
      <br /><br />
    </div>
  );
};

export default TodoList;
