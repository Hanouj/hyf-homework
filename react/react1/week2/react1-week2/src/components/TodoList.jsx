import TodoListRow from "./TodoListRow";
const TodoList =({todos, setTodos}) =>{
   
    const deleteItem= (id)=>{
   const newTodoArr  = todos.filter((todoItem) => todoItem.id !== id);
   setTodos(newTodoArr)
}

return(
<div>
<ul>
    {todos.map((todo)=>{
        return(
            <TodoListRow todo={todo.description} key={todo.id} id={todo.id} deleteItem={deleteItem}/>
        )
    })}
</ul>
</div>

)
}

export default TodoList