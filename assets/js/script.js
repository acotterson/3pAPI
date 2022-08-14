var currentDay = moment().format("dddd - MMMM Do, YYYY"); 
var currentHour =parseInt(moment().subtract(10, 'hours').format("H"));
var spaces = /\s+/g;

$('#currentDay').html(currentDay);

$(".hour").each(function (index) {
  var currentDivHour = $(this).html().replace(spaces, "");
  var currentDivHourInt = parseInt(moment(currentDivHour, "hA").format("H"));

  if (currentDivHourInt === currentHour) {
    $(this).siblings('textarea').addClass("present");
  } else if (currentDivHourInt < currentHour) {
    $(this).siblings('textarea').addClass("past");
  } else {
    $(this).siblings('textarea').addClass("future");
  }  
  
  $(this).siblings('textarea').val(localStorage.getItem(currentDivHour));
});

$( "button" ).click(function() {
    localStorage.setItem($(this).siblings('div').html().replace(spaces, ""),$(this).siblings('textarea').val());
});