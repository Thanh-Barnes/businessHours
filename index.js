//JS-03 Control Flow
//Exercise 1
//Part 1
function businessHours(dayNumber, hourNumber) {

    if(hourNumber >= 9 && hourNumber < 18) {
        if(dayNumber <= 4) {     
            console.log("Open for business.");
            return true;
        } else { 
            console.log("Closed.");
            return false;
        } 
    } else {
        console.log("Closed.");
        return false;
    }      
}

//Part 2
function getDayNumber(janFirstDayNumber, yearDayNumber) {
    
    if(janFirstDayNumber >=0 && janFirstDayNumber <=6) {
        if(yearDayNumber >= 0 && yearDayNumber <=365) {
            let dayOfWeek = (yearDayNumber + janFirstDayNumber) % 7;
            return dayOfWeek;
 
        } else {
            console.log("yearDayNumber must be between 0 and 365");
        }
    } else {
        console.log("janFirstDayNumber must be between 0 and 6");
    }
}

//Part 3
function openBusinessHours(yearDayNumber, hourNumber) {

    let dayOfWeek = getDayNumber(0, yearDayNumber);
    let isOpen = businessHours(dayOfWeek, hourNumber);
    return isOpen;
}

console.log(openBusinessHours(23, 4));