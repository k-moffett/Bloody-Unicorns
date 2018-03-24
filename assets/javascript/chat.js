// Initialize Firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAY_maz4Znu3GLbkIZCCwM78JNuHyXyvZ8",
    authDomain: "chat-25e87.firebaseapp.com",
    databaseURL: "https://chat-25e87.firebaseio.com",
    projectId: "chat-25e87",
    storageBucket: "chat-25e87.appspot.com",
    messagingSenderId: "457494636882"
  };
  firebase.initializeApp(config);
  
var database = firebase.database();
var userLoggedIn = false;
$("#text").on("keydown", function (event) {
    if (event.key === 'Enter'){
        event.preventDefault();
    let name = $("#name").val();
    let text = $("#text").val();
    let avatarName = name;
    database.ref().push({
        name: name,
        text: text,
        avatarName: avatarName,
        // dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    $("#chat").animate({scrollTop: $("#chat")[0].scrollHeight });
    $("#name").hide();
    $("#text").css({
        "background-color": "white",
        "width": "90%",
    });
    $("#text").val('');
    }
});
//remove Post button and replaced it with "Enter".
// $("#post").on("click", function () {
// });
database.ref().on("child_added", function (snapshot) {
    var avatarImage = snapshot.val().avatarName;
    console.log(avatarImage);
    $("#listMessages").append(`<div class = "container"><img id="imageSize" src="http://api.adorable.io/avatar/${avatarImage}" />${snapshot.val().text}</div>`);
    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});


