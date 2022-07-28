import React, { useEffect, useState } from 'react';
import AddTodo from '../TodoList/AddTodo';
import TodoList from '../TodoList/TodoList';

export default function StateUp(){
    const [todos, setTodos] = React.useState(['item one', 'itemn two', 'item three'])
    return (
        <>
            <TodoCount todos={todos} />
            <TodoList todos={todos} />
            <AddTodo setTodos={setTodos} />
        </>
    )
}

function TodoCount({todos}){
    return(
        <>
            <div>Total Todos: {todos.length} </div>
        </>
    )
}

  