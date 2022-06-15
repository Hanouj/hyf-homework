const today = new Date();

const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log(daysInWeek[2])

function getEventWeekday(days){
    today.setDate(today.getDate() + days);
    return daysInWeek[today.getDay()];
}

console.log(`The event is happeing on ${getEventWeekday(6)}`);
    



