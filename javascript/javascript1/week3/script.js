//Item array removal
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const findName = names.indexOf("Ahmad");

  if(findName>-1){
      names.splice(findName,1); //remove one item only
  };
  
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']


  //When will we be there? exircise 


  const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };

  function calculateTime(speed, km){
const hours =(km/speed); // the hours in decimal number
const onlyHours= Math.floor(hours); //gets only the hours
console.log(onlyHours); // for checking 
const minutes =(hours-onlyHours)*60; //takes the decimal part and convert it to minutes
return (`${onlyHours} hours and ${minutes.toFixed(0)} minutes`);

    };  
console.log(calculateTime(travelInformation.speed, travelInformation.destinationDistance)); // output 8 h and 38 min
 
  


  ///Series duration of my life 

const seriesDurations=[
  {
    title: "Gotham",
    days: 2,
    hours: 23,
    minutes: 40,
  },
  {
    title: "The walking dead",
    days: 7,
    hours: 23,
    minutes: 58,
  },
  {
    title: "Rick and Morty",
    days: 8,
    hours: 16,
    minutes: 40,
  },
];
function logOutSeriesText() {
  let totalSeriesDurations= 0;  // countinually update the variable

  for (let serie of seriesDurations){
    const convertToMinutes= serie.days*1440 + serie.hours*60 + serie.minutes;
    const yearsToMinutes = 80*525600; // years to minutes
   totalSeriesDurations = convertToMinutes/yearsToMinutes *100 ;  // for each serie duration time Im adding it to total
   console.log(`${serie.title} took ${totalSeriesDurations.toFixed(3)} % of my life`);
  
  }
 
  const totalAverage = totalSeriesDurations/ seriesDurations.length;
  console.log(`In total that is ${totalAverage.toFixed(2)} % of my life`);
}
logOutSeriesText(); 


/// Step 3: Smart-ease- Back to the basics!

//save a note

const notes=[];

function saveNote (content, id){
 const addNotes={
   content,
   id,
 };
 notes.push(addNotes);
};

saveNote("Pick up grocires", 1);
saveNote("Do laundry", 2);

console.log(notes);

//Get a note

function getNote(id){
  if (typeof id !=="number" || typeof id === null || id>notes.length) {
    return (`error use number only`);
    
  } else{
  for (let i = 0; i <= notes.length; i++){
if (id == notes[i].id)  {
 return (notes[i]);
 
}
}
};
};

const firstNote= getNote(2);
console.log("note of this id is : ", firstNote);

/// 


function logOutNotesFormatted(){
  for (let i = 0; i < notes.length; i++){
    noteFormat=console.log ("the note with id: "+ notes[i].id + " has the following note: " + notes[i].content);
    
  };
  return noteFormat
};

logOutNotesFormatted(); 


////Unique feature

//Adding an activity

const activities=[];

function addActivity(date, activity, duration){
  if (typeof date==="string" && 
  typeof activity==="string" && 
  typeof duration ==="number"){
  const activitiesList={
    date:date,
    activity:activity,
    duration:duration,
  };
  activities.push(activitiesList);
  return activities;

  }else
  return console.log(`error`);
}

addActivity("23/7-22", "Youtube",30);
addActivity("12/8-22", "Instgram", 50);
addActivity("07/10-22", "Facebook", 10);
//addActivity("30/02-22", "Pinterst", 20);

console.log(activities);

///Show my status and Usage limit

function showStatus(){
  const limit= 100;
  let sum= 0;
  if (activities.length===0){
    return console.log(`Add some activities before calling showStatus`);
      };
  for(let i=0; i<activities.length; i++){
    
    sum += activities[i].duration
  };
  if(sum>limit){
    console.log(`You have reached your limit, no more smartphoning for you!`);
    return
  };
    console.log(`you have added ${activities.length} activities. They amount to ${sum} mn of usage`);
    return
};


showStatus();  //output is you have added 3 activities. They amount to 90 mn of usage

