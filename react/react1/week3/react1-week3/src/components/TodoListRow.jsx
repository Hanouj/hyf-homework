import {useState} from "react"
import Border from "../Border"

const TodoListRow =(props)=>{
    const { todo, deleteItem, id } = props
    const [checked, setChecked]=useState(false)
    const [editing, setEditing]=useState(false) 
    const [descriptionInputValue, setDescriptionInputValue] = useState(todo.description)


    const updateEditButton =() =>{
        if (editing === true ){
            console.log(descriptionInputValue)
            props.updateDescription(id, descriptionInputValue)
        }
        setEditing((currentValue)=>!currentValue)

    }

    return(
        < Border>
        <li> 
            <div className="second-wrapper">
       {editing===true? (<input type="text" onChange={
        (e)=> setDescriptionInputValue(e.target.value) } value={descriptionInputValue}></input>)
        : ( <p style={{textDecoration: checked === true ? "line-through" : ""}}>{todo.description}</p>)}
              
               <p>| {todo.deadline && todo.deadline}</p>
        <input onChange={()=>setChecked((currentValue)=>{ return !currentValue})} type="checkbox" checked={checked} /> 
        <button className="btn-delete" onClick={()=>deleteItem(id)}>Delete</button>
        <button className="btn-edit" onClick={updateEditButton} >{editing===true? "Update" : "Edit" }</button>
        </div>
        </li>
        </Border>
    )
}

export default TodoListRow