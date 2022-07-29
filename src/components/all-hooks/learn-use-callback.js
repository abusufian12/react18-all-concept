import React, { useState, useCallback} from 'react';
import Todos from '../TodoList/Todos';
export default function LearnCallback(){
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    }

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, 'New Todo']);
    }, [todos]);
    return(
        <>
            <div>
                <h2>This is Callback Hooks</h2>
            </div>
            <Todos todos={todos} addTodo={addTodo}/>
            <hr />
            <div>
                Count: {count}
                <button type='button' onClick={increment}>+</button>
            </div>
        </>
        
    );
}