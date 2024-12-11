import React, { useContext, useState } from 'react'
import { appcontext } from '../App'
import DeleteIcon from '@mui/icons-material/Delete';

import './CSS/Addtodo.css'
import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';


function AddTodo() {
  const [newtodo, setNewTodo] = useState('')
  const { error, setError, todo, setTodo } = useContext(appcontext)

  // add todo 
  function addTodos(e) {
    e.preventDefault()
    if (newtodo.trim() !== '') {
      const todos = [...todo, { task: newtodo, iscompleted: false }]
      setTodo(todos)
      setNewTodo('')
      setError('')
    }
    else {
      setError('Please Enter a Todo to Add')
    }
  }

  //delete item from todo
  function deleteTodo(index) {
    setTodo(todo.filter((_, i) => i !== index))
  }

  function toggleComplete(i) {
    const updatedtodo = todo.map((task, index) =>
      i === index ? { ...task, iscompleted: !task.iscompleted } : task
    )
    setTodo(updatedtodo)
  }




  return (
    <>
      <div className='add-todo'>
        <input placeholder='Add todos'
          name='todos-task' value={newtodo}
          onChange={(e) => (setNewTodo(e.target.value))} />

        <Button onClick={addTodos}
          sx={{ backgroundColor: ' #61dafb', color: '#ffffff' }}
          variant='contained'
          size='large'>
          ADD
        </Button>

      </div>
      {error && <p className='error'>{error}</p>}
      <div className='todo-list'>
        {todo.map((todo, index) =>
        (<div key={index} className='item-container' >
          <div className={todo.iscompleted ? 'warp-para' : 'incomplete-warp-para'}>
            <p className={todo.iscompleted ? 'todo-completed' : 'todo-incomplte'}>
              {todo.task}
            </p>
          </div>

          <Checkbox
            checked={todo.iscompleted}
            onClick={() => toggleComplete(index)}
            sx={{
              color: '#61dafb', '&.Mui-checked': {
                color: '#61dafb',
              },
            }}
          />
          <button className='delete-btn'
            onClick={() => deleteTodo(index)}>
            <DeleteIcon sx={{ color: ' #61dafb' }} />
          </button>
        </div>
        ))}
      </div>
    </>
  )
}

export default AddTodo;