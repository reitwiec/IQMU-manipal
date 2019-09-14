$(document).ready(function() {
  $("#open").on("click", function() {
    $("#overlay").removeClass("close");
    $("#redbg").hide();
  });

  $("#close").on("click", function() {
    $("#overlay").addClass("close");
    $("#redbg").show();
  });
});
