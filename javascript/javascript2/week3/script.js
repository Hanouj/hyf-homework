//Warmp
//1

const delayInMilliseconds = 2500;

function delyaedText() {
  setTimeout(function () {
    const text = document.createElement("p");
    const textNode = document.createTextNode(
      "This text is called after 2.5 seconds"
    );
    document.getElementById("text-div").appendChild(textNode);
  }, delayInMilliseconds);
}

delyaedText();

//2

function loggingOutString(delay, stringTolog) {
  setTimeout(() => {
    console.log(stringTolog);
  }, delay * 1000);
}

loggingOutString(5, "This string logged after 5 seconds");

loggingOutString(3, "This string logged after 3 seconds");

//3
const btnShowText = document.getElementById("btn");

btnShowText.addEventListener("click", function () {
  setTimeout(function () {
    console.log("called out after 5 seconds");
  }, 5000);
});

//4
function planetLogFuction(f) {
  f();
}
function earthLogger() {
  console.log("Earth");
}
function saturnLogger() {
  console.log("Saturn");
}
planetLogFuction(earthLogger);
planetLogFuction(saturnLogger);

//5

let pLocation = document.getElementById("location");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  } else {
    pLocation.innerHTML = "Geolocation API is not Supported";
  }
}

function getPosition(position) {
  pLocation.innerHTML = `Latitude: ${position.coords.latitude} <br>longitude: ${position.coords.longitude}`;
}

//6
//7
function runAfterDelay(delay, callback) {
  setTimeout(() => callback(), delay * 1000);
  return delay;
}

runAfterDelay(1, function () {
  console.log("should be logged after 1 seconds");
});

//8
let mouseClickTimes = 0;
window.addEventListener("click", (event) => {
  mouseClickTimes++;
  setTimeout(() => {
    if (mouseClickTimes === 1) {
      // handle for single click
      console.log("Single click");
    } else if (mouseClickTimes === 2) {
      // handle for double click
      console.log("Double click");
    }
    mouseClickTimes = 0;
  }, 500);
  return event;
});

//9
function logFunny() {
  return "this is a funny joke";
}
function logBad() {
  return "this is a bad joke";
}

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    const funnyJoke = logFunnyJoke();
    console.log(funnyJoke);
  } else {
    const badJoke = logBadJoke();
    console.log(badJoke);
  }
}

jokeCreator(true, logFunny, logBad);

//2.Function as a variable

let functionArray = [
  firstFunctoin,
  secondFunction,
  thirdFunction,
  function () {
    console.log("anonymous function");
  },
];

function firstFunctoin() {
  console.log("this is my first function");
}

function secondFunction() {
  console.log("this is the second function");
}
function thirdFunction() {
  console.log("this is the third function");
}

//let functionInvoke = functionArray[1](); //what we done here was just refrence the firstFunction as a functoin by itself, and to invoke the function is by adding parenthesis

//iterate through the array
functionArray.forEach((oneFunction) => oneFunction());

//Function Declarations
const person = "Hanna";
function helloGreeting() {
  console.log("Hello", person);
}

helloGreeting();

// Function Expressions

const goodbye = () => {
  console.log("Goodbye", person);
};
goodbye();

//object that has a key whose value is a function

const animal = {
  type: "cat",
  name: "Daisey",
  sound: () => {
    console.log("meoww meow");
  },
};

animal.sound();
