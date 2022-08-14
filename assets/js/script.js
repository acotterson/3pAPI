var currentDay = moment().format("dddd - MMMM Do, YYYY");
var currentHour = parseInt(moment().subtract(10, "hours").format("H"));
// regex to select all white space
var spaces = /\s+/g;

$("#currentDay").html(currentDay);

// loop through each hour and add colors and tasks
$(".hour").each(function (index) {
  var currentDivHour = $(this).html().replace(spaces, "");
  //   switch to military time
  var currentDivHourInt = parseInt(moment(currentDivHour, "hA").format("H"));

  //   add colors depending on past, present, future
  if (currentDivHourInt === currentHour) {
    $(this).siblings("textarea").addClass("present");
  } else if (currentDivHourInt < currentHour) {
    $(this).siblings("textarea").addClass("past");
  } else {
    $(this).siblings("textarea").addClass("future");
  }
  // load saved tasks
  $(this).siblings("textarea").val(localStorage.getItem(currentDivHour));
});

// save tasks on save button click
$("button").click(function () {
  localStorage.setItem(
    $(this).siblings("div").html().replace(spaces, ""),
    $(this).siblings("textarea").val()
  );
});
