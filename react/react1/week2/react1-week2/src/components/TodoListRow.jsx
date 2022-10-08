import {useState} from "react"

const TodoListRow =(props)=>{
    const { todo, deleteItem, id } = props
    const [checked, setChecked]=useState(false)
    return(
        <li> 
            <div className="second-wrapper">
       
        <p style={{textDecoration: checked === true ? "line-through" : ""}}>{todo} </p>
        <input onChange={()=>setChecked((currentValue)=>{ return !currentValue})} type="checkbox" checked={checked} /> 
        <button className="btn-delete" onClick={()=>deleteItem(id)}>Delete</button>
        </div>
        </li>
    )
}

export default TodoListRow