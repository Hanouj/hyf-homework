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
