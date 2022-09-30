const todoList = [
    {
      id: 0,
      description: "Get out of bed",
      deadLineDate: "Wed Sep 13 2017",
    },
    {
      id: 1,
      description:"Brush teeth" ,
      deadLineDate: "Thu Sep 14 2017",
     
    },
    {
        id: 2,
        description:"Eat breakfast" ,
        deadLineDate: "Fri Sep 15 2017",
       
      },
  ];
export function TodoList() {
    return(
    <>
   
        {todoList.map((item) => <TodoListItems descp={item.description} date={item.deadLineDate} key={item.id}/> )}
  

    </>
    )
}

function TodoListItems({descp, date}) {
    return(
        <>
       <h3> {descp}</h3>
       <p><i>{date}</i></p> 
        </>
    )

}