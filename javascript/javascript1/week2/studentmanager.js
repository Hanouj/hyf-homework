const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName==="Queen" && !class07Students.includes(studentName)){
      class07Students.push(studentName);
  }

  else if(class07Students.length>=6){
    console.log("Cannot add more students to class07");
      } else if (class07Students.includes(studentName)){
      console.log(`student ${studentName} is already in the class07!`)
  }else if (studentName===null){
    console.log("Please enter a valid name!");
}else{
      class07Students.push(studentName);
  }
};



addStudentToClass('Sara');
addStudentToClass('Chris');
addStudentToClass('Ali');
addStudentToClass('Hanaa');
addStudentToClass('Benjamin');
addStudentToClass('Tom');
//addStudentToClass(" ");
addStudentToClass('Queen');
console.log(class07Students);




function getNumberOfStudents() {
    console.log(`there are ${class07Students.length} in the class07.`);
};

getNumberOfStudents()
