import TodoListRow from "./TodoListRow";

const TodoList =({todos, setTodos}) =>{
    const deleteTodoItem= (id)=>{
   const newTodoArr  = todos.filter((todoItem) => todoItem.id !== id);
   setTodos(newTodoArr)

   }

   const updateDescription=(id, description )=>{
    const newTodoArr = todos.map(item => {

        if (item.id === id) {
          return {...item, description:description}
        }
        return item;
      });
  
       setTodos(newTodoArr)

   }

return(
<div>
<ul>
 
    {todos.map((todo)=>{
        return(
   <TodoListRow todo={todo} key={todo.id} id={todo.id} deleteItem={deleteTodoItem} updateDescription={updateDescription}/>
        )
    })}
 
</ul>
</div>

)
}

export default TodoList