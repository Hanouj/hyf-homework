// Movies exercise
//1-Create an array of bad movies
fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
)
  .then((response) => response.json())
  .then((movies) => {
    console.log(movies);
    const badMovies = movies
      .filter((movie) => movie.rating <= 4)
      .map((movie) => movie.title);
    console.log(badMovies);
    //2-Creat an array of bad movies since year 2000
    const twentyOneBadMovies = movies
      .filter((movie) => movie.year >= 2000)
      .filter((movie) => movie.rating <= 4)
      .map((movie) => movie.title);
    console.log(twentyOneBadMovies);
  });

//Promise that resolves after set time
async function waitForfewSeconds(resolveAfter) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, resolveAfter * 1000);
  });
}

waitForfewSeconds(8).then(() => {
  console.log("I am called asynchronously");
});

//rewriting setTimeout
async function setTimeoutPromise(resolveAfter) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, resolveAfter);
  });
}

setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});

//rewriting
const statusLocation = document.querySelector("#status");
function geoFindLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      resolve();
    } else {
      reject();
    }
  });
}
geoFindLocation()
  .then(() => {
    navigator.geolocation.getCurrentPosition((resolve) => {
      const latitude = resolve.coords.latitude;
      const longitude = resolve.coords.longitude;
      statusLocation.textContent = `latitude:${latitude}, longitude: ${longitude}`;
      console.log(resolve);
    });
  })
  .catch((error) => {
    statusLocation.textContent = "Geolocation API is not Supported";
    console.log(error);
  });

// Fetching and waiting

//using promises and then

function getProductName() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}
getProductName().then(() => {
  fetch("https://reqres.in/api/products/3")
    .then((res) => res.json())
    .then((data) => {
      console.log(
        `wait three seconds to log out product name: ${data.data.name}`
      );
    });
});

//using async/await

async function getProductColor() {
  const response = await fetch("https://reqres.in/api/products/3");
  let data = await response.json();
  console.log(
    `wait three seconds to log out product color: ${data.data.color}`
  );
}
setTimeout(getProductColor, 3000);
