  
var config = {
    apiKey: "AIzaSyAhdwGblx8oZkOVhD9WDvzabaajVmTlS8k",
    authDomain: "rockpaperscissors-bff55.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-bff55.firebaseio.com",
    projectId: "rockpaperscissors-bff55",
    storageBucket: "",
    messagingSenderId: "925357781479"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();

    // Button for choosing player 1 and player 2;
    $(".btn-secondary").on("click", function(event) {
        event.preventDefault();
  
    // Grabs user input
    var newPlayer = $(".form-control").val().trim();

    // Creates local "temporary" object for holding employee data
    var playerOne = {
        name: newPlayer,
    };
    console.log(playerOne.name);

    // Uploads employee data to the database
    database.ref().push(playerOne);

    // Alert
    alert(playerOne.name + " is up first!");

    // Clears all of the text-boxes
    $(".form-control").val("");

});


