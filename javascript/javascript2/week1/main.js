//Find the shortest word 

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function getShortestWord(danishWordsArray){
return danishWordsArray.sort((a, b) => a.length - b.length)[0];

}

console.log(getShortestWord(danishWords)); //output ø 

//Find and count the Danish letters

const danishString = "Jeg har en blå bil";

const danishString2 = "Blå grød med røde bær";

function countString2 (stringLetters){
    const stringsearchå = stringLetters.split("å").length - 1;
    const stringsearchø= stringLetters.split("ø").length - 1;
    const stringsearchæ = stringLetters.split("æ").length - 1;
    const stringtotal= stringsearchå + stringsearchæ + stringsearchø
    return{
        total:stringtotal,
        å:stringsearchå,
        æ:stringsearchæ,
        ø:stringsearchø,

    };

    }

    console.log(countString2(danishString)); // output {total: 1, å: 1, æ: 0, ø: 0}
    console.log(countString2(danishString2)); // output {total: 4, å: 1, æ: 1, ø: 2} 

    // Spirit animal name generator

    const spiritAnimals = ["Black Swan", "Bluebird", "Dragonfly", "Flamingo", "Grasshopper", "Goldfish", "Hippopotamus", "Inchworm", "Jellyfish", "Koala"];

    const userInput= document.querySelector("#textInput");
    const message=document.querySelector("#message");
    const myButtom= document.querySelector("#btn");
    
    document.body.appendChild(userInput);
    document.body.appendChild(myButtom);
    document.body.appendChild(message)


    function gettheUserName(){
        if (!userInput.value){
            message.style.color="red"
            message.innerHTML="Please provide a name first"
            
        }else{
            message.style.color="black"
            const randomAnimal= spiritAnimals[Math.floor(Math.random()*spiritAnimals.length)]
            message.innerHTML =`name: ${userInput.value}: spirit animal-${randomAnimal} `  // value is what the user has typed in "string"
        }
    }

    myButtom.addEventListener("click", gettheUserName);
    
    
console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const productContainer = document.querySelector("#productsContainer")
function renderProducts(products){
for (let i=0; i<products.length; i++){
const title= document.createElement("h3");
const price=document.createElement("p");
const rating =document.createElement("p");


title.innerHTML=products[i].name;
price.innerHTML=`Price: ${products[i].price}`;
rating.innerHTML=`Rating: ${products[i].rating}`;

productContainer.appendChild(title);
productContainer.appendChild(price);
productContainer.appendChild(rating);


}

}

renderProducts(products);

