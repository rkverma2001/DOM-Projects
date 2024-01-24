const PlayersList = [];

function addPlayer(event) {
  event.preventDefault();

  const playerList = document.getElementById("player-list");

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const country = document.getElementById("country").value;
  const score = document.getElementById("score").value;

  const playerData = {
    name: firstName + " " + lastName,
    country: country,
    score: Number(score),
  };

  PlayersList.push(playerData);
  PlayersList.sort(
    (player1, player2) => parseInt(player2.score) - parseInt(player1.score)
  );

  playerList.innerHTML = "";
  for (let index = 0; index < PlayersList.length; index++) {
    const player = PlayersList[index];

    const liEl = document.createElement("li");
    const nameContent = document.createElement("span");
    const countryContent = document.createElement("span");
    const curentScore = document.createElement("span");

    const increaseScore = document.createElement("button");
    const decreaseScore = document.createElement("button");

    increaseScore.innerText = "Increase";
    decreaseScore.innerText = "Decrease";
    increaseScore.setAttribute("onclick", `increaseScoreHandler(${index})`);
    decreaseScore.setAttribute("onclick", `decreaseScoreHandler(${index})`);

    curentScore.innerText = player.score;
    countryContent.innerText = player.country;
    nameContent.innerText = player.name;

    liEl.append(
      nameContent,
      countryContent,
      curentScore,
      increaseScore,
      decreaseScore
    );
    playerList.append(liEl);
  }
}

function refreshList() {
  const playerList = document.getElementById("player-list");
  PlayersList.sort(
    (player1, player2) => parseInt(player2.score) - parseInt(player1.score)
  );

  playerList.innerHTML = "";
  for (let index = 0; index < PlayersList.length; index++) {
    const player = PlayersList[index];

    const liEl = document.createElement("li");
    const nameContent = document.createElement("span");
    const countryContent = document.createElement("span");
    const curentScore = document.createElement("span");

    const increaseScore = document.createElement("button");
    const decreaseScore = document.createElement("button");

    increaseScore.innerText = "Increase";
    decreaseScore.innerText = "Decrease";
    increaseScore.setAttribute("onclick", `increaseScoreHandler(${index})`);
    decreaseScore.setAttribute("onclick", `decreaseScoreHandler(${index})`);

    curentScore.innerText = player.score;
    countryContent.innerText = player.country;
    nameContent.innerText = player.name;

    liEl.append(
      nameContent,
      countryContent,
      curentScore,
      increaseScore,
      decreaseScore
    );
    playerList.append(liEl);
  }
}

function increaseScoreHandler(index) {
  PlayersList[index].score += 5;
  refreshList();
}

function decreaseScoreHandler(index) {
  PlayersList[index].score -= 5;
  refreshList();
}
