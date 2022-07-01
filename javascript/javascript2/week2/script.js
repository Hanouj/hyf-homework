// Doubling of number

let numbers = [1, 2, 3, 4];

const doubledOddNumbers = numbers
.filter((myNumber) => myNumber % 2 !==0)
.map((myNumber) =>myNumber*2);

console.log(`The doubled numbers are: ${doubledOddNumbers}`) //output The doubled numbers are: 2,6

// Working with movies

const movies = [
{"title": "'71","year": 2014,"rating": 5.2,"votes": 41702,"running_times": 5940},
{"title": "'A' gai wak","year": 1983,"rating": 7.4,"votes": 11942,"running_times": 6300},
{"title": "'Breaker' Morant","year": 1980,"rating": 7.9,"votes": 10702,"running_times": 6420},
{"title": "'Crocodile' Dundee II","year": 1988,"rating": 3.5,"votes": 47180,"running_times": 6480},
{"title": "(500) Days of Summer","year": 1989,"rating": 7.7,"votes": 412368,"running_times": 5700},
{"title": "*batteries not included","year": 1987,"rating": 5.6,"votes": 25636,"running_times": 6360},
{"title": "...E tu vivrai nel terrore! L'aldilà","year": 1981,"rating": 6.1,"votes": 16484,"running_times": 5220},
{"title": "...and justice for all.","year": 1979,"rating": 2.4,"votes": 25408,"running_times": 7140},
{"title": "10","year": 1979,"rating": 6,"votes": 13152,"running_times": 7320},
{"title": "10 Cloverfield Lane","year": 2016,"rating": 4.2,"votes": 216151,"running_times": 6240},
{"title": "10 Items or Less","year": 2006,"rating": 6.7,"votes": 13342,"running_times": 4920},
{"title": "10 Things I Hate About You","year": 1999,"rating": 7.2,"votes": 247070,"running_times": 5820},
{"title": "10 Years","year": 2011,"rating": 6.0,"votes": 20790,"running_times": 6000},
{"title": "10,000 BC","year": 2008,"rating": 5.1,"votes": 114750,"running_times": 6540},
{"title": "100 Feet","year": 2008,"rating": 4.0,"votes": 10979,"running_times": 6240},
{"title": "100 Girls","year": 2000,"rating": 5.9,"votes": 19232,"running_times": 5640},
{"title": "101 Dalmatians","year": 1996,"rating": 5.7,"votes": 83245,"running_times": 6180}];



//1-short movies titles
const filteredShortMoviesTitle= movies
.map((oneTitle)=>oneTitle.title)
.filter((oneTitle)=> oneTitle.length<=13);

console.log(`Movies with a short title are: ${filteredShortMoviesTitle}`); // output Movies with a short title are: '71,'A' gai wak,10,10 Years,10,000 BC,100 Feet,100 Girls

//2-long movies titles
const filteredLongMoviesTitle =movies
.map((oneTitle)=>oneTitle.title)
.filter((oneTitle)=> oneTitle.length>13);

console.log(`Movies with a long title are: ${filteredLongMoviesTitle}`); // output Movies with a long title are: 'Breaker' Morant,'Crocodile' Dundee II,(500) Days of Summer,*batteries not included,...E tu vivrai nel terrore! L'aldilà,...and justice for all.,10 Cloverfield Lane,10 Items or Less,10 Things I Hate About You,101 Dalmatians

//3-movies made between 1980-1989

function filterYearListings (movies, filterObjectYears){
const minYear =filterObjectYears.minYear;
const maxYear =filterObjectYears.maxYear;
return movies.
filter((oneYear)=>oneYear.year<=maxYear 
&& oneYear.year>= minYear


);}

const filterObjectYears ={
    minYear: 1980,
    maxYear:1989, 
};

const filteredYears =filterYearListings(movies, filterObjectYears);
console.log(`Between the years 1980-1989 there are ${filteredYears.length} movies made.`); // output Between the years 1980-1989 there are 6 movies made. 

//4-extra key called tag

const newMovieArrayWithNewTag = movies
.map((newKey) =>{
    return newKey.rating >= 7 ? {...newKey, tag:"Good"} :
    newKey.rating >= 4 && newKey.rating < 7 ? {...newKey, tag:"Average"}:
    newKey.rating < 4 ? {...newKey, tag:"Bad"}:  newKey
});

console.log(newMovieArrayWithNewTag); //The map() function won't modify the initial array, but creates a new one
console.log(movies); 

//5-using chaining

const filtredRatedMovies = newMovieArrayWithNewTag
.filter((oneMovie)=>oneMovie.rating>6 )
.map((oneMovie) => oneMovie.rating);

console.log(filtredRatedMovies); //output [7.4, 7.9, 7.7, 6.1, 6.7, 7.2]


//6- 
// using match method

const filteredMovieWords =movies
.filter( (oneMovie)=>
oneMovie.title.match(/Alien|100|Surfer/i)
);
console.log(filteredMovieWords);

//7- duplicated titles

const moviesWithDuplicatedTitle = movies
.filter((movie) => {
const strToArr = movie.title.toLocaleLowerCase().split(' ').sort();
for (let i = 0; i < strToArr.length; i++) {
if (strToArr[i] === strToArr[i + 1]) {
return movie;
}
}
 });
 console.log(moviesWithDuplicatedTitle); //not sure how to approash it, Im getting an empty array 

//8- Calculating the average rating

const totalMoviesRating = movies
.reduce((total, firstRating)=>{
    let sum= total + firstRating.rating
    return sum/movies.length;
}, 0) 


console.log(`Average rating of all movies is: ${totalMoviesRating.toFixed(2)}`); // output Average rating of all movies is: 0.36

//9- count the total number of Good/Bad/Average movies

const totalNumberForEachTag= newMovieArrayWithNewTag
.reduce((total, oneMovie) => {
if (oneMovie.tag === "Good") {
    total.goodMovies++;
}else if(oneMovie.tag ==="Bad"){
    total.badMovies++;
}else if (oneMovie.tag ==="Average"){
    total.averageMovies++;
}
return total
},
 {goodMovies: 0, averageMovies: 0, badMovies: 0}
 );

 console.log(totalNumberForEachTag); //output {goodMovies: 4, averageMovies: 11, badMovies: 2}
 






