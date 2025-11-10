import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [task, setTask] = useState('')

  const increment = () => {
    setCount1(count1 + 1)
  }

  const decrement = () => {
    setCount2(count2 - 1)
  }
  const addTodo = () => {

    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
    const addTodo = () => {
      if (task.trim() !== "") setTodos([...todos, task]);
      setTask("");
    };
  
  }


//je suis le meilleur 
  return (
    <>
      <div className='test'>
     <h1>compteur1:{count2} </h1>
     <button onClick={decrement}> decremneter </button>
      </div>

      <div className='voiture'>
     <h2>compteur2:{count1} </h2>
     <button onClick={increment}>incrementer</button>
      </div>
      <div className='moto'>
        <input type='text'
          value={task} 
          onChange={(e) => setTask(e.target.value)}
          placeholder="Nouvelle tâche"></input>
          <button onClick={addTodo}> Ajouter  </button>

          <li key={task}> 
          <ul>  {task}</ul>  
          </li>

     
      </div>

      
    </>
  )
}

export default App
