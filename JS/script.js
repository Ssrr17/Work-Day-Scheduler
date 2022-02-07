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

var getThePlan = function(){
var thePlan =  $('textarea#past').val();
console.log(thePlan);


}
//localStorage.setItem("textarea",thePlan )


    


//  $("#saveBtn").click(function() {
//     getThePlan()
//  });
     
//         // Get nearby values of the description in JQuery
//      var thePlan =  $('textarea#past').val();  
     
//     console.log(thePlan);
//     });
// };

// getThePlan()
    
    // localStorage.setItem(comment);









