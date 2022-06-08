//get the current date for the header
$("#toDay").text(moment().format("ddd MMMM Do YYYY"));

// change event textarea background depending on state
var updateState = function () {
  var hour = moment().hours();

  $(".time-block").each(function () {
    var now = parseInt($(this).attr("id"));

    if (now > hour) {
      $(this).addClass("future");
    } else if (now === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });
};

// save event data to local storage
const saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
  var time = $(this).siblings(".hour").text();
  var task = $(this).siblings(".description").val();
  localStorage.setItem(time, task);
});

// add event persistence
var taskPersist = function () {
  $(".hour").each(function () {
    var now = $(this).text();
    var currentTask = localStorage.getItem(now);

    if (currentTask !== null) {
      $(this).siblings(".description").val(currentTask);
    }
  });
};

updateState();
taskPersist();
