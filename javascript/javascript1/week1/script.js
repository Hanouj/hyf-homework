//----------------Age-ify (A future age calculator)

const yearOfBirth=1996;
const yearFuture=2047;

const age= yearFuture - yearOfBirth;

console.log("you will be " + age + " " + "years old in " +yearFuture);

//----------------Goodboy-Oldboy(A dog age calculator)

const dogYearOfBirth=2019;
const dogYearFuture=2034;
const dogYear= dogYearFuture - dogYearOfBirth + 15; // dog year old in dog years
const dogInHumanYear= dogYearFuture - dogYearOfBirth; // dog year old in human years


const shouldShowResultInDogYears= true  // if its true it will ran the first condition if its false it will ran the second contion (like in the example below)

 if(shouldShowResultInDogYears == false){
     console.log("Your dog will be " + dogYear + " " + "dog years old in 2034");
 }else{
     console.log("Your dog will be " + dogInHumanYear + " " + "human years old in 2034");
 };

//----------------Housey pricey(A house price estimator)

// array that contain objects

const housePrice= [
    {
        name:'Peter',
        width:8,
        depth:10,
        height:10,
        garden:100,
        volumInMeters: function() {  // I wanted to use this function in the equation but I get Nan, how can I approsh it if I want to use it ?
            return this.width * this.depth * this.height;
        },
        calculateHousePrice: function () {
            return this.width * this.depth * this.height * 2.5 * 1000 + this.garden *300;
        },
    },

    {
        name:'Julia',
        width:5,
        depth:11,
        height:8,
        garden:70,
        volumInMeters: function() {    // same here I thought I could use as a short way.
            return this.width * this.depth * this.height;
     },
     calculateHousePrice: function () {
        return this.width * this.depth * this.height * 2.5 * 1000 + this.garden *300;
     },
       
    }
];

console.log(housePrice[0].calculateHousePrice()); // for peter
console.log(housePrice[1].calculateHousePrice()); // for Julia

//I will do here an if statment to check if Peter and Julia have paid to mush or not

if(housePrice[0].calculateHousePrice ()>2500000){
    console.log("Peter house is expensive");
}else{
    console.log("Peter house is at the right price");
}


if(housePrice[1].calculateHousePrice ()>1000000){
    console.log("Julie house is expensive");
}else{
    console.log("Julia house is at the right price");
}


//----------------Ez Namey (Startup name generator) Optional

const firstWords=["Awesome", "Eklipse","Cool", "Social", "Zoned", "Wise", "Bright", "Life", "Invited", "Soft"];

const secondWords=["Point", "Joy", "Spotlight", "Collective", "White", "Profession", "Ideal", "Active", "Socialist", "Definite"];


const startupName= firstWords[6] + secondWords [8];

console.log("The startup: "+ startupName + " contains " + startupName.length + " characters." );

// Im not sure what to do with this code and how do I use it => const randomNumber = Math.floor(Math.random() * 10); 









