var card1 = document.querySelector(".card-1-body");
var card2 = document.querySelector(".card-2-body");
var card3 = document.querySelector(".card-3-body");

function getGamesApi() {
  var requestUrl =
    "https://rjw-cors.herokuapp.com/https://api.the-odds-api.com/v4/sports/soccer_epl/odds?apiKey=4294190c96a3485afbc5b3024f0fbdf6&regions=uk&markets=h2h";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (var i = 0; i < data.length; i++) {
        var gameStart = document.createElement("h4");
        var homeTeam = document.createElement("p");
        var awayTeam = document.createElement("p");
        var time = data[i].commence_time;
        console.log(datetoPass);
        var dateString = new Date(time);
        var datetoPass = dateString.toDateString();

        gameStart.textContent = datetoPass;
        homeTeam.textContent = `${data[i].home_team} - H`;
        awayTeam.textContent = `${data[i].away_team} - A`;

        card1.appendChild(gameStart);
        card1.appendChild(homeTeam);
        card1.appendChild(awayTeam);
      }
    })
    .catch((err) => console.error(err));
}

function getOddsApi() {
  var requestUrl =
    "https://rjw-cors.herokuapp.com/https://api.the-odds-api.com/v4/sports/soccer_epl/odds?apiKey=4294190c96a3485afbc5b3024f0fbdf6&regions=uk&markets=h2h";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (var i = 0; i < data.length; i++) {
        var homeTeamOdds = document.createElement("p");
        var awayTeamOdds = document.createElement("p");

        homeTeamOdds.textContent = `${data[i].bookmakers.outcomes} - H`;
        // awayTeamOdds.textContent = `${data[i].bookmakers.markets.outcomes.price} - A`;

        card2.appendChild(homeTeamOdds);
        card2.appendChild(awayTeamOdds);
      }
    });
  // .catch(err => console.error(err));
}

function getTopGoalScorer() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5c9e94c562msh1177d2f1faff343p1effe8jsnfd0a03ce8071",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  fetch(
    "https://rjw-cors.herokuapp.com/https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2022",
    options
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (var i = 0; i < data.response.length; i++) {
        var topGoalScorer = document.createElement("h5");
        var goals = document.createElement("p");

        topGoalScorer.textContent = data.response[i].player.name;
        goals.textContent = `${data.response[i].statistics[0].goals.total} - Goals`;

        card3.appendChild(topGoalScorer);
        card3.appendChild(goals);

        console.log(data.response[i].player.name);
        console.log(data.response[i].statistics[0].goals.total);
      }
    })
    .catch((err) => console.error(err));
}

function getTopAssists() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5c9e94c562msh1177d2f1faff343p1effe8jsnfd0a03ce8071",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  fetch(
    "https://rjw-cors.herokuapp.com/https://api-football-v1.p.rapidapi.com/v3/players/topassists?league=39&season=2022",
    options
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (var i = 0; i < data.response.length; i++) {
        var topAssistsMaker = document.createElement("h5");
        var assists = document.createElement("p");

        topAssistsMaker.textContent = data.response[i].player.name;
        assists.textContent = `${data.response[i].statistics[0].goals.assists} - Assists`;

        card3.appendChild(topAssistsMaker);
        card3.appendChild(assists);

        console.log(data.response[i].player.name);
        console.log(data.response[i].statistics[0].goals.assists);
      }
    })
    .catch((err) => console.error(err));
}

getOddsApi();
getGamesApi();
getTopGoalScorer();
getTopAssists();

document.getElementById("btn").addEventListener("click", function () {
  var email = document.getElementById("exampleInputEmail1");
  localStorage.setItem("Email", email.value);
});
document.getElementById("btn").addEventListener("click", function () {
  var email = document.getElementById("First Name");
  localStorage.setItem("First Name", email.value);
});
document.getElementById("btn").addEventListener("click", function () {
  var email = document.getElementById("Last Name");
  localStorage.setItem("Last Name", email.value);
});
document.getElementById("btn").addEventListener("click", function () {
  var email = document.getElementById("exampleInputPassword1");
  localStorage.setItem("Password", email.value);
});
document
  .getElementById("exampleCheck1")
  .addEventListener("change", function () {
    if (this.checked) {
      localStorage.setItem("checkbox", true);
    } else {
      localStorage.setItem("checkbox", false);
    }
  });
