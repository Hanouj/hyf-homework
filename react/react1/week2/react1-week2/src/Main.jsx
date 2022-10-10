import React from "react";
import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import './TodoListStyle.css'
import todoArray from "./data";
import Timer from "./Timer";

function Main(){
    const [todos, setTodos]=useState(todoArray)
    const buttonClick =()=>{
        const addTodoItem=[
            {
              id: Date.now(),
              description: `review Haile's PR` 
                        }            
                  ]
                              
        const nextTodoList=todos.concat(addTodoItem)
        setTodos(nextTodoList)
    }
    return(
        <div className="wrapper">
              <TodoHeader />
              <Timer />

           <button className="btn-add" onClick={buttonClick}>Add todo</button>
           
           {todos.length<=0 && (<p>No Items!</p>)}
                     <TodoList todos={todos} setTodos={setTodos} />
                    
        </div>
    )
}
export default Main