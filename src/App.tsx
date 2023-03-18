import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

type TodosType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

function App() {
    const [todos, setTodos] = useState<TodosType[]>([])
    const fetchFoo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }
    
    useEffect(() => {
        fetchFoo()
    }, []);

    const showMeTodos = () => {
        fetchFoo()
    };

    const deleteTodos = () => {
        setTodos([])
    };
  
    return (
        <div className="App">
            <button onClick={showMeTodos}>Show me...</button>
            <button onClick={deleteTodos}>DeleteTodos</button>
            <ul>
                {todos.map((el) => {
                    return (
                        <li>
                            <span>{el.id}</span>
                            <input type={'checkbox'} checked={el.completed}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}


            </ul>
        </div>
    );
}

export default App;