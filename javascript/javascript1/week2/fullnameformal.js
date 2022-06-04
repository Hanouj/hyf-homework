function getFullname (firstname, surname, useFormalName, gender){
if (useFormalName) { 
    if (gender==="man") {
    console.log(`lord ${firstname} ${surname}`)   
} else if(gender==="woman") {
    console.log(`lady ${firstname} ${surname}`)
}else{
    console.log(`${firstname} ${surname}`)
}   
}
}


getFullname ('Benjamin', 'Hughes', true, "man");




const fullname1 = getFullname('Hanaa','Hussein', true, "woman");
const fullname2 = getFullname('Sarah', 'Amouri',true);


// when I ran my code in codepan any name I write it give me undefiend as a result!







 



