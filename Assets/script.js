<<<<<<< HEAD
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
=======

//live odd api key : 8948b3aeaa5d2c02c13ae670fcaaf355
// var apiKey = "8948b3aeaa5d2c02c13ae670fcaaf355";


var title = document.getElementById("title")

var card1 = document.querySelector(".card-1-body");

var card2 = document.querySelector(".card-2");

function getGameApi() {
	var requestUrl = 'https://rjw-cors.herokuapp.com/https://api.the-odds-api.com/v4/sports/soccer_epl/odds?apiKey=4294190c96a3485afbc5b3024f0fbdf6&regions=uk&markets=h2h';

	fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);

			for (var i = 0; i < data.length; i++) {
				// var sportTitle = document.createElement("h3");
				var gameStart = document.createElement("p");
				var homeTeam = document.createElement("p");
				var awayTeam = document.createElement("p");
				var time = data[i].commence_time
				console.log(datetoPass)
				var dateString = new Date(time)
				var datetoPass = dateString.toDateString()

				// sportTitle.textContent = data[i].sport_title;
				gameStart.textContent = datetoPass
				homeTeam.textContent = `${data[i].home_team} - H`;
				awayTeam.textContent = `${data[i].away_team} - A`;

				// card1.appendChild(sportTitle)
				card1.appendChild(gameStart);
				card1.appendChild(homeTeam);
				card1.appendChild(awayTeam);
			}
		})
}

getGameApi();


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
				// // var topScorer1 = document.createElement("h3")

				// topScorer1.textContent = data[i].response[0].player.name

				// card2.appendChild(topScorer1) ;
				
				console.log(data.response[i].player.name)
				console.log(data.response[i].statistics[0].goals.total)
			}
	
		})	
		.catch(err => console.error(err));

}
getGameApi();
getTopGoalScorer();



>>>>>>> 6a6adb5b5fa824767c370b24f0416700ec3a3102
