function getFullname (firstname, surname, useFormalName, gender){
if (useFormalName) { 
    if (gender==="man") {
    console.log(`lord ${firstname} ${surname}`)   
    return;
} else if(gender==="woman") {
    console.log(`lady ${firstname} ${surname}`)
    return;
}else if(firstname ==="" || surname ==="" || typeof firstname !== "string" ||
 typeof surname !=="string"){
console.log("Please enter a valid name");
return;
}
else{
    console.log(`${firstname} ${surname}`)
    return;
}   
}

};


getFullname ('Benjamin', 'Hughes', true, "man");




const fullname1 = getFullname('Hanaa','Hussein', true, "woman");
const fullname2 = getFullname('Sarah', 'Amouri',true);

const fullname3 = getFullname("", "");










 



