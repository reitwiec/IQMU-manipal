$(document).ready(function () {
  setTimeout(function () {
    $("body").addClass("loaded");
  }, 3000);
});
let x = 0;
$("#nextbtn").click(function () {
  console.log(x);
  if (x === 0) {
    $("#landingcontent1").css({
      display: "none"
    });
    $("#landingcontent2").css({
      display: "block"
    });
    $("#backbtn").css({
      display: "block"
    });
    x += 1;
  } else if (x === 1) {
    $("html,body").animate(
      {
        scrollTop: $("#aboutussection").offset().top
      },
      "slow"
    );
  }
});

$("#backbtn").click(function () {
  $("#landingcontent1").css({
    display: "block"
  });
  $("#landingcontent2").css({
    display: "none"
  });
  $("#backbtn").css({
    display: "none"
  });
  x -= 1;
});

$("#international").click(function () {
  $("#international").addClass("selectedoption");
  $("#indian").removeClass("selectedoption");
  $("#indianform").addClass("hideform");
  $("#internationalform").removeClass("hideform");
});

$("#indian").click(function () {
  $("#indian").addClass("selectedoption");
  $("#international").removeClass("selectedoption");

  $("#internationalform").addClass("hideform");
  $("#indianform").removeClass("hideform");
});

var submitted = false;



const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", e => {
  isDown = true;
  slider.classList.add("active");

  pageX = e.pageX;
  startX = pageX - slider.offsetLeft;

  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", e => {
  if (!isDown) return;

  e.preventDefault(); //stop any weird stuff
  const x = e.pageX - slider.offsetLeft;

  const deviation = x - startX;
  slider.scrollLeft = scrollLeft - deviation;
});