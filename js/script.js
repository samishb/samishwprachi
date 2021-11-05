(function ($) {
  "use strict";
  $(".sakura-falling").sakura();
})(jQuery);

$("#openCardButton").on("click", function () {
  $("#mainPage").css("display", "block");
  $("#entryPage").css("display", "none");
  document.getElementById("my_audio").play();
});

//to show diff pages
const pages = [
  "#entryPage",
  "#mainPage",
  "#detailedItinerary",
  "#loveStory",
  "#howToReach",
  "#picGallery",
  "#rsvpPage",
];

const showHidePages = function (pageToShow) {
  for (page of pages) {
    if (page !== pageToShow) {
      $(page).css("display", "none");
    }
  }
  $(pageToShow).css("display", "block");
};

$(".backButton").on("click", function () {
  showHidePages(pages[1]);
});

$("#detailedItineraryBlock").on("click", function () {
  window.scrollTo(0,0);
  showHidePages(pages[2]);
});

$("#howToReachBlock").on("click", function () {
  window.scrollTo(0,0);
  showHidePages(pages[4]);
});

$("#picGalleryBlock").on("click", function () {
  window.scrollTo(0,0);
  showHidePages(pages[5]);
});

$("#rsvp").on("click", function () {
  window.scrollTo(0,0);
  showHidePages(pages[6]);
});

$("#rsvpButton").on("click", function () {
  window.scrollTo(0,0);
  showHidePages(pages[6]);
});

// Set the date we're counting down to
var countDownDate = new Date("Nov 21, 2021 00:00:00").getTime();

/*
// Update the count down every 1 second
var x = setInterval(function () {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("time").innerHTML =
    "<div class='container'><div class='days block'>" +
    days +
    "<br>Days</div>" +
    "<div class='hours block'>" +
    hours +
    "<br>Hours</div>" +
    "<div class='minutes block'>" +
    minutes +
    "<br>Minutes</div>" +
    "<div class='seconds block'>" +
    seconds +
    "<br>Seconds</div></div>";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML =
      "Make sure you click a picture with the couple!";
  }
}, 1000);
*/
