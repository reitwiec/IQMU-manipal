$(document).ready(function() {
  setTimeout(function() {
    $("body").addClass("loaded");
  }, 3000);
});
let x = 0;
$("#nextbtn").click(function() {
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

$("#backbtn").click(function() {
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

$("#international").click(function() {
  $("#international").addClass("selectedoption");
  $("#indian").removeClass("selectedoption");
  $("#indianform").addClass("hideform");
  $("#internationalform").removeClass("hideform");
});

$("#indian").click(function() {
  $("#indian").addClass("selectedoption");
  $("#international").removeClass("selectedoption");

  $("#internationalform").addClass("hideform");
  $("#indianform").removeClass("hideform");
});

var submitted = false;
