
var config = {
    apiKey: "AIzaSyAhdwGblx8oZkOVhD9WDvzabaajVmTlS8k",
    authDomain: "rockpaperscissors-bff55.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-bff55.firebaseio.com",
    projectId: "rockpaperscissors-bff55",
    storageBucket: "",
    messagingSenderId: "925357781479"
  };

  var playerCounter = 0;

  var currentPlayer;

  var playerOne = null;
  var playerTwo = null;

  firebase.initializeApp(config);

  var database = firebase.database();
  var playersRef = database.ref('players');

  playersRef.on('child_added', function(childSnapshot) {
    console.log(childSnapshot);
    playerCounter++;
    if(playerCounter === 1) {
      playerOne = childSnapshot.val();
      currentPlayer = playerOne;
      addPlayerPanel(playerOne, 1);
    }
    else if(playerCounter === 2) {
      playerTwo = childSnapshot.val();
      if(currentPlayer !== undefined) {
        currentPlayer = playerTwo;
      }
      addPlayerPanel(playerTwo, 2);
      playGame();
      $('#user-create').hide();
    }
  });

  function playGame() {

  }



  function addPlayerPanel(player, num) {
    var playerPanel = $('<p>');
    playerPanel.text("Player " + num + ": " + player.name);
    $('#player-zone').append(playerPanel);
  }

  playersRef.onDisconnect();

    // Button for choosing player 1 and player 2;
    $("#make-player").on("click", function(event) {
      event.preventDefault();

    // Grabs user input
    var newPlayer = $(".form-control").val().trim();
    // Creates local "temporary" object for holding employee data
    var player = {
      name: newPlayer,
      enteredAt: firebase.database.ServerValue.TIMESTAMP
    };

    // Uploads player data to the database
    playersRef.push(player);

    // Clears all of the text-boxes
    $(".form-control").val("");

    });


    $('#reset').on('click', function() {
      playersRef.remove();
      $('#player-zone').empty();
      $('#user-create').show();
    });
