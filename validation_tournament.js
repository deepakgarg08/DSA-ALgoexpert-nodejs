//need discussion

//method 1

const competition = [
  ["html", "c"],
  ["c", "python"],
  ["python", "html"],
];
const result = [0, 0, 1]; //1 means index o is winner get three points, 0 gets away team

let winner = {};

let validationTournament = (competition, result) => {
  for (let i = 0; i < competition.length; i++) {
    if (result[i] === 0) {
      if (competition[i][1] in winner) {
        // winner[competition[i][1]] += 3;
        winner.competition[i][1] += 3;
      } else {
        winner[competition[i][1]] = 3;
      }
    } else {
      if (competition[i][0] in winner) {
        winner[competition[i][0]] += 3;
      } else {
        winner[competition[i][0]] = 3;
      }
    }                                                                                                                           
  }

  
  for (let i in winner) {
    if (winner[i] > Object.values(winner)[1]) {
      return winner[i];
    } else {
      let res = Object.keys(winner)[1];
      return res;
    }
  }



  return winner;
};

console.log("validationTournament", validationTournament(competition, result));
