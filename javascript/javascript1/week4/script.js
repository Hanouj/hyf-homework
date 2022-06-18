// voice assistant 

let userName= "";
const todolist=[];

function getReply(command){
if (command==="Hello my name is Benjamin" && userName==null){
    return `You are not a person`
}
    if (command ==="Hello my name is Benjamin" && userName===""){
        userName="Benjamin";
        return `Nice to meet you ${userName}`;

    } if(command ==="Hello my name is Benjamin" && userName!=""){
        userName="";
        return`This name was already mentioned`;
 
    } if (command==="what is my name?"){
    return`Your name is ${userName}`;

}if (command ==="what is my name?" && userName.length===0){
    return `Name is not mentioned`

} if (command ==="Add fishing to my todo"){
    todolist.push("fishing");
    return `Fishing has been added to your todo list`

}if (command ==="Add singing in the shower to my todo"){
    todolist.push("singing in the shower")
    return`Singing in the shower has been added to your todo list`

}if (command==="Remove fishing from my todo"){
    todolist.splice(todolist.indexOf("fishing"),1);
    return`Removed fishing from your todo`

}if (command==="What is on my todo?"){
    return `There is ${todolist.length} task on your todo list ${todolist.join()}`
    
}if (command ==="What day is it today"){
    const today= new Date()
    const months=["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
    return `Today is ${today.getDate()} ${ months[today.getMonth()]} ${today.getFullYear()}`  

}if (command.includes("+") || command.includes('/') || command.includes('*') || command.includes('-')){
    const splitText = command.split(` `); // used to convert a string to an array 
    const num1=parseFloat(splitText[2]); // convert it to a string if needed and returns a floating point number
    const num2=parseFloat(splitText[4]);
    const result ="The result is: ";

switch (splitText[3]) {
            case '+': return(result + (num1 + num2));
                break;
            case '-': return(result + (num1 - num2));
                break;
            case '/': return(result+ (num1 / num2));
                break;
                case '*': return (result + (num1 * num2));
                break;
            default:
                console.log('This is not valid, try again');


        }
        if (command.includes("Set a timer for 4 minutes")) {
            const millisecondsFor4Minutes = 1000 * 60 * 4;
            let timer = setTimeout (timerFunction, millisecondsFor4Minutes);
            return `Time is set for ${timer} minutes`;
            function timerFunction() {
            alert (`timer done`);

            }

          

};

};


};

console.log(getReply("Hello my name is Benjamin")); //output Nice to meet you Benjamin
console.log(getReply("Hello my name is Benjamin")); //output This name was already mentioned
console.log(getReply("What is my name?")); // output is undefined not sure why!
console.log(getReply("Add fishing to my todo"));// output Fishing has been added to your todo list
console.log(getReply("Add singing in the shower to my todo")) // output Singing has been added to your todo list
console.log(getReply("Remove fishing from my todo")) // output Removed fishing from your todo
console.log(getReply("What is on my todo?")); // output There is 1 task on your todo list singing in the shower
console.log(getReply("What day is it today")); // output Today is 16 June 2022
console.log(getReply("what is 3 + 3")); //output The result is 6 
console.log(getReply("what is 8 * 3")); // output The result is 24
console.log(getReply("what is 50 / 4")); // output The result is 12.5
console.log(getReply("Set a timer for 4 minutes")); //output undifined not sure why



