function matchWinner(teamAGoals, teamBGoals) {
  if(typeof teamAGoals !== "number" || typeof teamBGoals !== "number"){
    return "Invalid" ; 
  }else if(teamAGoals > teamBGoals){
    return "Team A Won";
  }else if(teamAGoals < teamBGoals){
    return "Team B Won";
  }
  else if(teamAGoals === teamBGoals){
    return "Draw";
  }
}

let winner = matchWinner(2,1);
console.log(winner);
