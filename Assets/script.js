


var card1 = document.querySelector(".card-1-body");
var card2 = document.querySelector(".card-2-body");
var card3 = document.querySelector(".card-3-body")

function getGamesApi() {
	var requestUrl = 'https://rjw-cors.herokuapp.com/https://api.the-odds-api.com/v4/sports/soccer_epl/odds?apiKey=4294190c96a3485afbc5b3024f0fbdf6&regions=uk&markets=h2h';

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
				var time = data[i].commence_time
				console.log(datetoPass)
				var dateString = new Date(time)
				var datetoPass = dateString.toDateString()
				
				gameStart.textContent = datetoPass
				homeTeam.textContent = `${data[i].home_team} - (H)`;
				awayTeam.textContent = `${data[i].away_team} - (A)`;
				
				card1.appendChild(gameStart);
				card1.appendChild(homeTeam);
				card1.appendChild(awayTeam);
			}
		})
		.catch(err => console.error(err));
}


function getOddsApi() {
	var requestUrl = 'https://rjw-cors.herokuapp.com/https://api.the-odds-api.com/v4/sports/soccer_epl/odds?apiKey=4294190c96a3485afbc5b3024f0fbdf6&regions=uk&markets=h2h';

	fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);

			for (var i = 0; i < data.length; i++) {				
				
				var teamA = document.createElement("p");
				var teamAOdds = document.createElement("p");	
				var teamB =	 document.createElement("p");
				var teamBOdds =  document.createElement("p");
				var draw =  document.createElement("p");
				var drawOdds =  document.createElement("p");
								
				teamA.textContent = `${data[i].bookmakers[0].markets[0].outcomes[0].name}`;
				teamAOdds.textContent = `${data[i].bookmakers[0].markets[0].outcomes[0].price}`;
				teamB.textContent = `${data[i].bookmakers[0].markets[0].outcomes[1].name}`;
				teamBOdds.textContent = `${data[i].bookmakers[0].markets[0].outcomes[1].price}`;
				draw.textContent = `${data[i].bookmakers[0].markets[0].outcomes[2].name}`;
				drawOdds.textContent = `${data[i].bookmakers[0].markets[0].outcomes[2].price}`;
								
				card2.appendChild(teamA);
				card2.appendChild(teamAOdds);
				card2.appendChild(teamB);
				card2.appendChild(teamBOdds);
				card2.appendChild(draw);
				card2.appendChild(drawOdds);

				console.log(data[i].bookmakers[0].markets[0].outcomes[0].name)				
				console.log(data[i].bookmakers[0].markets[0].outcomes[0].price)
				console.log(data[i].bookmakers[0].markets[0].outcomes[1].name)
				console.log(data[i].bookmakers[0].markets[0].outcomes[1].price)
				console.log(data[i].bookmakers[0].markets[0].outcomes[2].name)
				console.log(data[i].bookmakers[0].markets[0].outcomes[2].price)

			}
		})
		// .catch(err => console.error(err));
}


function getTopGoalScorer() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '5c9e94c562msh1177d2f1faff343p1effe8jsnfd0a03ce8071',
			'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
		}
	};
	
	fetch('https://rjw-cors.herokuapp.com/https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2022', options)
		.then(function(response) {
			return response.json();
		})
		.then(function(data){
			console.log(data);

			for (var i = 0; i < data.response.length; i++) {
				var topGoalScorer = document.createElement("h5");
				var goals = document.createElement("p")

				topGoalScorer.textContent = data.response[i].player.name;
				goals.textContent = `${data.response[i].statistics[0].goals.total} - Goals`;
				
				card3.appendChild(topGoalScorer) ;
				card3.appendChild(goals);
				
				console.log(data.response[i].player.name)
				console.log(data.response[i].statistics[0].goals.total)
			}
	
		})	
		.catch(err => console.error(err));

}

function getTopAssists() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '5c9e94c562msh1177d2f1faff343p1effe8jsnfd0a03ce8071',
			'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
		}
	};
	
	fetch('https://rjw-cors.herokuapp.com/https://api-football-v1.p.rapidapi.com/v3/players/topassists?league=39&season=2022', options)
		.then(function(response) {
			return response.json();
		})
		.then(function(data){
			console.log(data);

			for (var i = 0; i < data.response.length; i++) {
				var topAssistsMaker = document.createElement("h5");
				var assists = document.createElement("p")

				topAssistsMaker.textContent = data.response[i].player.name;
				assists.textContent = `${data.response[i].statistics[0].goals.assists} - Assists`;
				
				card3.appendChild(topAssistsMaker);
				card3.appendChild(assists);
				
				console.log(data.response[i].player.name)
				console.log(data.response[i].statistics[0].goals.assists)
			}
	
		})	
		.catch(err => console.error(err));

}

getOddsApi();
getGamesApi();
getTopGoalScorer();
getTopAssists();






document.getElementById("btn").addEventListener("click", function () {
  var email = document.getElementById("exampleInputEmail1");
  localStorage.setItem("emailHelp", email.value);
});
document.getElementById("btn").addEventListener("click", function () {
  var email = document.getElementById("First Name");
  localStorage.setItem("First Name", email.value);
});
document.getElementById("btn").addEventListener("click", function () {
  var email = document.getElementById("Last Name");
  localStorage.setItem("Last Name", email.value);
});
