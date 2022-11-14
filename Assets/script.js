//global variables

var apiLiveSportKey_A = "4294190c96a3485afbc5b3024f0fbdf6";

var apiLiveSportsKey_R = "9ca2f6b436e08a74e39b07ff1ca37968";

var apiFootballKey_R = "056b3ae817msh9b1a9754a5e4878p18e659jsn6d10838ade8d";

var apiFootballKey_A = "5c9e94c562msh1177d2f1faff343p1effe8jsnfd0a03ce8071";

var card1 = document.querySelector(".card-1-body");
var card2 = document.querySelector(".card-2-body");
var card3 = document.querySelector(".card-3-body");
//api keys and url
function getGamesApi() {
  var requestUrl = "https://rjw-cors.herokuapp.com/https://api.the-odds-api.com/v4/sports/soccer_epl/odds?apiKey=" + apiLiveSportsKey_R + "&regions=uk&markets=h2h";

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
	var requestUrl = "https://rjw-cors.herokuapp.com/https://api.the-odds-api.com/v4/sports/soccer_epl/odds?apiKey=" + apiLiveSportsKey_R + "&regions=uk&markets=h2h";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (var i = 0; i < data.length; i++) {
        var teamA = document.createElement("p");
        var teamAOdds = document.createElement("p");
        var teamB = document.createElement("p");
        var teamBOdds = document.createElement("p");
        var draw = document.createElement("p");
        var drawOdds = document.createElement("p");

				console.log(data[i].bookmakers[0].markets[0].outcomes[0].name)				
				console.log(data[i].bookmakers[0].markets[0].outcomes[0].price)
				console.log(data[i].bookmakers[0].markets[0].outcomes[1].name)
				console.log(data[i].bookmakers[0].markets[0].outcomes[1].price)
				console.log(data[i].bookmakers[0].markets[0].outcomes[2].name)
				console.log(data[i].bookmakers[0].markets[0].outcomes[2].price)
			}
		})
		.catch(err => console.error(err));
}
//fetch calls to third api's
function getTopGoalScorer() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiFootballKey_R,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  fetch("https://rjw-cors.herokuapp.com/https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2022", options)
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
      "X-RapidAPI-Key": apiFootballKey_R,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  fetch("https://rjw-cors.herokuapp.com/https://api-football-v1.p.rapidapi.com/v3/players/topassists?league=39&season=2022", options)
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
//localStorage section to store user data
var handleFormSubmit = function (event) {
  event.preventDefault();
  console.log("button-clicked");
  var fName = document.getElementById("firstName").value.trim();
  var lName = document.getElementById("lastName").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var checkBox = document.getElementById("checkBox").checked;

  var payLoad = {
    firstName: fName,
    lastName: lName,
    fullName: `${fName} ${lName}`,
    email: email,
    password: password,
  };
  console.log(payLoad);
  localStorage.setItem("fName", fName);
  localStorage.setItem("lName", lName);
  localStorage.setItem("fullName", `${fName} ${lName}`);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
};

document.getElementById("btn").addEventListener("click", handleFormSubmit);
