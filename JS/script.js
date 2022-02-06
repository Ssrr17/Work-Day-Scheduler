//get and display the current date
//create blocks for business hours 
//get user input info 
//save info to local storage
//make time loops for past, present and future
//colour code time status
//





function getHeaderDate() {
    var toDay = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(toDay);
    console.log(toDay);
}

getHeaderDate()





