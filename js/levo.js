var database = firebase.database();

function addEmailAddress() {
  var emailAddress = $("#email-input").val();
  console.log("Adding email address " + emailAddress);
  var newEmailRef = database.ref("email").push(emailAddress);
  console.log(newEmailRef.toString());
  fbq("track", "Lead", {});
}

function buttonTextForScreenSize(windowWidth) {
  if (windowWidth < 1200) {
    $("#cta-button").html("Sign Up!");
  } else {
    $("#cta-button").html("Be the first to get the app!");
  }
}

(function($) {
  var windowWidth = $(window).width();
  buttonTextForScreenSize(windowWidth);

  $(window).resize(function() {
    var windowWidth = $(window).width();
    buttonTextForScreenSize(windowWidth);
  });
})(jQuery);
