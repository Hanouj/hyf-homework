const boughtCandyPrices=[];

const candyType=['sweet', 'chocolate', 'toffe', 'chewing-gum'];
const pricePergram=[0.5, 0.7, 1.1,0.03];

function addCandy(candyType, weight){
    if(candyType==='sweet'){
return boughtCandyPrices.push(0.5*weight);
    }else if (candyType==='chocolate'){
        return boughtCandyPrices.push(0,7*weight);
    }else if(candyType==='toffe'){
        return boughtCandyPrices.push(1.1*weight)
    }else if(candyType==='chewing-gum'){
        return boughtCandyPrices.push(0.03*weight)
    }
}

addCandy('sweet',4);
//addCandy('chocolate',5);
addCandy('toffe',10);

console.log(boughtCandyPrices);

// can I buy more?

const amountToSpend= Math.random() * 100; 

let totalPrice=0; 

function canBuyMoreCandy(totalPrice){

    for(let i=0; i<boughtCandyPrices.length; i++){
        totalPrice += boughtCandyPrices[i];
    }
     if (totalPrice < amountToSpend) {
        console.log(`You can still buy more with ${amountToSpend-totalPrice.toFixed(2)}, so please do!`);
        return;
        
      } else {
        console.log("Enough candy for you!");
        return;
      }

    }

    canBuyMoreCandy(totalPrice); 
