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
  return function () {
    console.log(delay, stringTolog);
  };
}

const setForFiveSec = loggingOutString(5, "This string logged after 5 seconds");

const setForThreeSec = loggingOutString(
  3,
  "This string logged after 3 seconds"
);
setForFiveSec();
setForThreeSec();

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

window.addEventListener("dblclick", (event) => {
  setTimeout(() => event, 500);
  console.log("Double-click detected");
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
    console.log("annonmyse function");
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
  sounds() {
    console.log("meoww meow");
  },
};

animal.sounds();

//3. The fastest presser in this realm

const button = document.getElementById("start-btn");
const inputValue = document.getElementById("seconds-input");
let lPresses = 0;
let sPresses = 0;
const lScore = document.getElementById("l");
const sScore = document.getElementById("s");
let gameFinished = true;
const countdownTimer = document.getElementById("countdown");

button.addEventListener("click", () => {
  gameFinished = false;
  lPresses = 0;
  sPresses = 0;
  lScore.textContent = 0;
  sScore.textContent = 0;
  const seconds = inputValue.value;

  if (seconds == "") {
    alert("set seconds first");
    console.log("Error");
  } else {
    setTimeout(() => {
      console.log("time is up");
      console.log(`we had l pressed ${lPresses}`);
      console.log(`we had s pressed ${sPresses}`);

      if (lPresses > sPresses) {
        console.log("l wins");
        const lWins = document.getElementById("l-winner");
        lWins.textContent = "L wins";
      } else if (sPresses > lPresses) {
        console.log("s wins");
        const sWins = document.getElementById("s-winner");
        sWins.textContent = "S wins";
      } else {
        console.log("its a tie");
        const itsAtie = document.getElementById("a-tie");
        itsAtie.textContent = "its a tie";
      }

      gameFinished = true;
    }, seconds * 1000);
  }
});

document.addEventListener("keypress", (e) => {
  if (!gameFinished) {
    const letter = e.key;
    if (letter === "l" || letter === "L") {
      lPresses++;
      lScore.textContent = lPresses;
    } else if (letter === "s" || letter === "S") {
      sPresses++;
      sScore.textContent = sPresses;
    }
  }
});
