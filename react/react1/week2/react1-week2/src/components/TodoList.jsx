import TodoListRow from "./TodoListRow";
const TodoList =({todos, setTodos}) =>{
   
    const deleteTodoItem= (id)=>{
   const newTodoArr  = todos.filter((todoItem) => todoItem.id !== id);
   setTodos(newTodoArr)
}

return(
<div>
<ul>
    {todos.map((todo)=>{
        return(
            <TodoListRow todo={todo.description} key={todo.id} id={todo.id} deleteItem={deleteTodoItem}/>
        )
    })}
</ul>
</div>

)
}

export default TodoList