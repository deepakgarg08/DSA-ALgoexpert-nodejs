//need discussion

const competition = [
  ["html", "c"],
  ["c", "python"],
  ["python", "html"],
];
const result = [0, 0, 1]; //1 means index o is winner get three points, 0 gets away team

let winner = {};
let finalwinner = "";
let currentwinner = "";

let updateScore = (key) => {
  if (key in winner) {
    finalwinner = key;
    winner.key += 3;
  } else {
    finalwinner = key;
    winner[key] = 3;
  }
};

let validationTournament = (competition, result) => {
  for (let i = 0; i < competition.length; i++) {

    let [hometeam, awayteam] = competition[i];

    if (result[i] === 0) {
      updateScore(awayteam); //away team
    } else {
      updateScore(hometeam); //home team
    }

    if (winner[finalwinner] > winner[currentwinner]) {
    }
  }

  return finalwinner;
};

console.log("validationTournament", validationTournament(competition, result));
