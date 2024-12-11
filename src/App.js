import { createContext, useState, useEffect } from 'react';
import './App.css';
import AddTodo from './components/AddTodo.js';


export const appcontext = createContext();

function App() {
  const [todo, setTodo] = useState(Initalstate)
  const [error, setError] = useState('')

  //loading todo from local storage

  function Initalstate() {
    const data = localStorage.getItem('todos')
    return (
      data ? JSON.parse(data) : []
    )
  }

  //save todo to the localstorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo))
  }, [todo]);


  return (
    <>
      <div className='App'>
        <div className='app-warp'>
          <h1 className='heading'>TO-DO</h1>
          <appcontext.Provider value={{ todo, setTodo, error, setError }}>
            <AddTodo />
          </appcontext.Provider >
        </div>
      </div>
    </>
  );
}

export default App;
