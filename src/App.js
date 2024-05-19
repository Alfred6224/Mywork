import './App.css';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingContent, setEditingContent] = useState('');

  const addTodo = () => {
    if (newTitle.trim() !== '' && newContent.trim() !== '') {
      setTodos([...todos, { id: Date.now(), title: newTitle, content: newContent }]);
      setNewTitle('');
      setNewContent('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditing = (id, title, content) => {
    setEditingId(id);
    setEditingTitle(title);
    setEditingContent(content);
  };

  const editTodo = () => {
    setTodos(todos.map(todo => 
      todo.id === editingId ? { ...todo, title: editingTitle, content: editingContent } : todo
    ));
    setEditingId(null);
    setEditingTitle('');
    setEditingContent('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <div className="Cont">
          <div className="form">
            <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} className='btn' type="text" placeholder='Title' />

            <input onChange={(e) => setNewContent(e.target.value)} value={newContent} className='btn' type="text" placeholder='Content'/>

            <button onClick={addTodo} className='btn-i'>Add</button>
          </div>
        </div>

        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {editingId === todo.id ? (
                <>
                  <div className='sav'>
                    <input 
                      className='editt'
                      type="text" 
                      value={editingTitle} 
                      onChange={(e) => setEditingTitle(e.target.   value)} 
                      placeholder="Title"
                    /> 
                    <input 
                      className='editt'
                      type="text" 
                      value={editingContent} 
                      onChange={(e) => setEditingContent(e.target.   value)} 
                      placeholder="Content"
                    />
                    <button className='editt-i' onClick={editTodo}>Save</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="family">

                    <div className='value'>
                      <strong>{todo.title}</strong>
                      <p>{todo.content}</p>
                    </div>

                    <div className="but">
                      <button className='but-i' onClick={() => startEditing(todo.id,  todo.   title, todo.content)}>Edit</button>

                      <button className='but-i' onClick={() => deleteTodo(todo.id)}   >Delete</button>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>


      </header>
    </div>
  );
}

export default App;
