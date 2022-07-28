import React, { useReducer} from 'react';
import ReactDOM from 'react-dom/client';


//example 1
/*
const initialTodos = [
    {
        id : 1,
        title: 'Todo 1',
        complete: false
    },
    {
        id : 2,
        title: 'Todo 2',
        complete: false
    }
];

const reducer = (state, action) => {
    switch(action.type){
        case "COMPLETE":
            return state.map((todo) => {
                if(todo.id === action.id){
                    return { ...todo, complete: !todo.complete};
                }else{
                    return todo;
                }
            });
        default:
            return state;    
    }
};


export default function LearnReducer(){
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id});
    };

    return(
        <>
            {
                todos.map((todo) => (
                    <div key={todo.id}>
                        <label>
                            <input type="checkbox"
                                   checked={todo.complete}
                                   onChange={() => handleComplete(todo)}  
                            />
                            {todo.title}
                        </label>
                    </div>
                ))
            }
        </>
    );
}

*/

//example 2
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;        
    }

    // if (action == 'increment') {
    //     return state + 1;
    // }else if(action == 'decrement'){
    //     return state - 1; 
    // }else{
    //     return state; 
    // }
}
export default function LearnReducer(){
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div>Count: {count}</div>
            <button type='button' onClick={() => dispatch('increment')}>Increment</button>
            <button type='button' onClick={ () => dispatch('decrement')}>Decrement</button>
        </>
    )
}