const class07Students = [];
const queen='Margrethe II';
function addStudentToClass(studentName) {
  if (!class07Students.includes(queen)){
      class07Students.push(queen);
      console.log(`queen ${queen} has been added to the the class07`);
} if  (class07Students.length>6){
    console.log("Cannot add more students to class 07");
      } else if (class07Students.length){
      console.log(`student ${studentName} is included in the class07`)
  }if (studentName===''){
    console.log("you cannot add an empty string to the class")
}else{
      console.log(class07Students.push(studentName))
  }
}



addStudentToClass('Sara');
addStudentToClass('Chris');
addStudentToClass('Ali');
addStudentToClass('Hanaa');
addStudentToClass('Benjamin');
addStudentToClass('Tom');
addStudentToClass('');
addStudentToClass('Huda')
console.log(class07Students);

// at the end it logs out that it cannot add more students to the class but it keeps adding to my array
// how do make it not add to the array also?


function getNumberOfStudents(num) {
    console.log(`In all there are ${class07Students.length} in the class07 including ${queen} the queen `);
}

getNumberOfStudents()
