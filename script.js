  // current time
  var currentTime = moment().format('H');
  console.log(currentTime);
  // current date display
  var currentDate = moment().format("dddd, MMM Do YYYY");
  
  $("#currentDay").text(currentDate);
 
  $( ".time-block" ).each(function() {

    var id = $( this ).attr("id");
    console.log(id, currentTime);

    // color code textarea to represent past, present or future
    if (currentTime === id) {
      $(this).children('textarea').addClass('present');
    } else if (id > currentTime) {
      $(this).children('textarea').addClass('future');
    } else if (id < currentTime) {
      $(this).children('textarea').addClass('past');
    }
  });

  $(".saveBtn").click(saveClick);

  function saveClick() {
    var textArea = $(this).siblings("textarea").val();
    var hourEl = $(this).parent().attr("id");

    localStorage.setItem(hourEl, textArea);
    return localStorage.getItem(hourEl);
  };


  // $(".description").on("click","textarea", function() {
  
  // });