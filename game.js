/**
 * This function fill the shape from the game
 * @param {number} id  - One number for each field from the game
 */

function fillShape(id) {
  if (!fields[id] && !gameOver) {
    if (currentShape == "cross") {
      currentShape = "circle";
      document.getElementById("player-1").classList.remove("player-inactive");

      document.getElementById("player-2").classList.add("player-inactive");
    } else {
      currentShape = "cross";

      document.getElementById("player-2").classList.remove("player-inactive");

      document.getElementById("player-1").classList.add("player-inactive");
    }

    fields[id] = currentShape;
    draw();
    checkForWin();
    undecided();
  }
}

/**
 * This function draw a cross or a circle
 */

function draw() {
  for (let i = 0; i < fields.length; i++) {
    if (fields[i] == "circle") {
      document.getElementById("circle-" + i).classList.remove("d-none");
    }

    if (fields[i] == "cross") {
      document.getElementById("cross-" + i).classList.remove("d-none");
    }
  }
}

/**
 * This function restart the game
 */

function restart() {
  gameOver = false;
  fields = [];
  document.getElementById("game-over").classList.add("d-none");
  document.getElementById("restart-btn").classList.add("d-none");

  for (let i = 1; i < 9; i++) {
    document.getElementById("line-" + i).classList.add("d-none");
  }

  for (let i = 0; i < 9; i++) {
    document.getElementById("circle-" + i).classList.add("d-none");
    document.getElementById("cross-" + i).classList.add("d-none");
  }

  document.getElementById("player1_winner").classList.add("d-none");
  document.getElementById("player2_winner").classList.add("d-none");
  document.getElementById("score").classList.add("d-none");
  document.getElementById("not_won").classList.add("d-none");
}

/**
 * This function check who is the winner
 */

function checkForWin() {
  if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
    winnerPossiblity1();
  }

  if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
    winnerPossiblity2();
  }

  if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
    winnerPossiblity3();
  }

  if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
    winnerPossiblity4();
  }

  if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
    winnerPossiblity5();
  }

  if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
    winnerPossiblity6();
  }

  if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
    winnerPossiblity7();
  }

  if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
    winnerPossiblity8();
  }

  if (winner) {
    gameOver = true;
    setTimeout(() => {
      document.getElementById("game-over").classList.remove("d-none");
      if (winner == "circle") {
        winnerCircle();
      } else if (winner == "cross") {
        winnerCross();
      }
      document.getElementById("score").classList.remove("d-none");
      document.getElementById("restart-btn").classList.remove("d-none");
    }, 1000);
  }
}

/**
 * This function check the first possiblity for the winner
 */

function winnerPossiblity1() {
  winner = fields[0];
  document.getElementById("line-1").style.transform = "scaleX(1)";
  document.getElementById("line-1").classList.remove("d-none");
}

/**
 * This function check the second possibility for the winner
 */

function winnerPossiblity2() {
  winner = fields[3];
  document.getElementById("line-2").style.transform = "scaleX(1)";
  document.getElementById("line-2").classList.remove("d-none");
}

/**
 * This function check the third possibility for the winner
 */

function winnerPossiblity3() {
  winner = fields[6];
  document.getElementById("line-3").style.transform = "scaleX(1)";
  document.getElementById("line-3").classList.remove("d-none");
}

/**
 * This function check the fourth possibility for the winner
 */

function winnerPossiblity4() {
  winner = fields[0];
  document.getElementById("line-4").style.transform =
    " rotate(90deg) scaleX(1)";
  document.getElementById("line-4").classList.remove("d-none");
}

/**
 * This function check the fifth possibility for the winner
 */

function winnerPossiblity5() {
  winner = fields[1];
  document.getElementById("line-5").style.transform =
    " rotate(90deg) scaleX(1)";
  document.getElementById("line-5").classList.remove("d-none");
}

/**
 * This function check the sixth possibility for the winner
 */

function winnerPossiblity6() {
  winner = fields[2];
  document.getElementById("line-6").style.transform =
    " rotate(90deg) scaleX(1)";
  document.getElementById("line-6").classList.remove("d-none");
}

/**
 * This function check the seventh possibility for the winner
 */

function winnerPossiblity7() {
  winner = fields[0];
  document.getElementById("line-7").style.transform =
    " rotate(45deg) scaleX(1)";
  document.getElementById("line-7").classList.remove("d-none");
}

/**
 * This function check the eigth possibility for the winner
 */

function winnerPossiblity8() {
  winner = fields[2];
  document.getElementById("line-8").style.transform =
    " rotate(-45deg) scaleX(1)";
  document.getElementById("line-8").classList.remove("d-none");
}

/**
 * This function means that the winner is the player with the circle
 */

function winnerCircle() {
  document.getElementById("player1_winner").classList.remove("d-none");
  scoreCircle++;
  document.getElementById("number1").innerHTML = scoreCircle;
}

/**
 * This function means that the winner is the player with the cross
 */

function winnerCross() {
  document.getElementById("player2_winner").classList.remove("d-none");
  scoreCross++;
  document.getElementById("number2").innerHTML = scoreCross;
}

/**
 * This function check whether the game is a draw
 */

function undecided() {
  if (
    fields[0] &&
    fields[1] &&
    fields[2] &&
    fields[3] &&
    fields[4] &&
    fields[5] &&
    fields[6] &&
    fields[7] &&
    fields[8] &&
    checkForWin() == false
  ) {
    gameOver = true;
    setTimeout(() => {
      document.getElementById("game-over").classList.remove("d-none");
      document.getElementById("not_won").classList.remove("d-none");
      document.getElementById("score").classList.remove("d-none");
      document.getElementById("restart-btn").classList.remove("d-none");
      document.getElementById("player1_winner").classList.add("d-none");
      document.getElementById("player2_winner").classList.add("d-none");
    }, 1000);
  }
}
