var currentDay = moment().format("MMM Do YYYY"); 
var currentHour =parseInt(moment().subtract(10, 'hours').format("H"));
// console.log(currentHour);

$('#currentDay').html(currentDay);

$(".hour").each(function (index) {
  var currentDivHour = this.innerText.replace(/\s+/g, "");
  currentDivHour = parseInt(moment(currentDivHour, "hA").format("H"));
//   console.log(currentDivHour);
  if (currentDivHour === currentHour) {
    $(this).addClass("present");
  } else if (currentDivHour < currentHour) {
    $(this).addClass("past");
  } else {
    $(this).addClass("future");
  }
});



$( "button" ).click(function() {
    // console.log($(this).siblings('div').html());
    // console.log($(this).siblings('textarea').val());
    localStorage.setItem($(this).siblings('div').html(),$(this).siblings('textarea').val());
});

// $( "button.continue" ).html( "Next Step..." )