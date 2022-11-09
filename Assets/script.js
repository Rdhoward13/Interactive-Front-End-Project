
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

// Transform time from API
// function getDate (date) {
// var dateString = new Date(date)
// var datetoPass = dateString.toDateString()
// return datetoPass
// }

getGameApi();

// fetch("https://api.the-odds-api.com/v4/sports/soccer_epl/odds?apiKey=4294190c96a3485afbc5b3024f0fbdf6&regions=uk&markets=h2h")
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5c9e94c562msh1177d2f1faff343p1effe8jsnfd0a03ce8071',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

fetch('https://rjw-cors.herokuapp.com/https://api-football-v1.p.rapidapi.com/v3/leagues?current=true', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



