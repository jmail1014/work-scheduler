  // current time
  var currentTime = moment().format('H');
  console.log(currentTime);

  // current date display
  var currentDate = moment().format("dddd, MMM Do YYYY");
  $("#currentDay").html(currentDate);
  console.log(currentDate);

  $(this.#currentDay).html(currentDate);

  $(".saveBtn").click(saveClick);

  $(".description").on("click","textarea", function() {
    e.preventDefault();

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));

  });