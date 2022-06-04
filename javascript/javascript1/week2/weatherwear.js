function weatherTemperature(temperature){

    if(temperature<10){
        return 'you should wear thick clothes and a jacket';
        } else if (temperature>=10 && temperature<=15){
        return 'you should wear warm clothes with a light jacket';
    }else if(temperature>=16){
        return 'you should wear shirt and a t-shirt';
    }
}

const clothesTowear = weatherTemperature(11); // output you should wear warm clothes with a light jacket
console.log(clothesTowear);   






