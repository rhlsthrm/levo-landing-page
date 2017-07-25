var database = firebase.database();

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function addEmailAddress() {
  var emailAddress = $("#email-input").val().toLowerCase();
  if (!emailAddress) {
    $("#alert-text").html("Email address can't be blank.");
    $("#alert").show();
    return;
  }
  var re = /\S+@\S+\.\S+/;
  if (!re.test(emailAddress)) {
    $("#alert-text").html("Please use a valid email address.");
    $("#alert").show();
    return;
  }
  console.log("Adding email address " + emailAddress);
  var source = getParameterByName("source");
  source = source ? source : "Other";
  var client = new ClientJS();
  database
    .ref("email")
    .orderByChild("email")
    .equalTo(emailAddress.toLowerCase())
    .once("value")
    .then(function(dataSnapshot) {
      if (dataSnapshot.val()) {
        $("#alert-text").html("Email address already registered.");
        $("#alert").show();
      } else {
        var newEmailRef = database.ref("email").push({
          email: emailAddress.toLowerCase(),
          userAgent: client.getUserAgent(),
          timestamp: Date.now(),
          source: source
        });
        console.log(newEmailRef.toString());
        $("#alert-text").html("Thank you for signing up!");
        $("#alert").show();
        fbq("track", "Lead", {});
        goog_report_conversion("http://www.levo.finance");
      }
    });
  return;
}

function buttonTextForScreenSize(windowWidth) {
  if (windowWidth < 1200) {
    $("#cta-button").html("Sign Up!");
  } else {
    $("#cta-button").html("Be the first to get the app!");
  }
}

(function($) {
  console.log(getParameterByName("source"));
  var windowWidth = $(window).width();
  buttonTextForScreenSize(windowWidth);

  $(window).resize(function() {
    var windowWidth = $(window).width();
    buttonTextForScreenSize(windowWidth);
  });
})(jQuery);
