const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Lucas',
        'Hernandez',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  
  const [players1, players2] = game.players;
  console.log(players1,players2) ; 

  const [gk, ...fieldPlayers] = players1;
  console.log(gk,fieldPlayers) ; 

  
  // 
  const allPlayers = [...players1, ...players2];
  
  // Task 3
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  
  // Task 4
  const { team1, x: draw, team2 } = game.odds;
  
  // Task 5
  const printGoals = function (...players) {
    players.forEach((player, i) => console.log(`Goal ${i + 1}: ${player}`));
  };
  
  printGoals(...game.scored);
  
  // Task 6
  for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
  }
  
  // Task 7
  const averageOdds = (team1 + draw + team2) / 3;
  console.log(`Average odds: ${averageOdds}`);
  
  // Task 8
  console.log(`Tỉ lệ thắng của ${game.team1}: ${team1}`);
  console.log(`Tỉ lệ hòa: ${draw}`);
  console.log(`Tỉ lệ thắng của ${game.team2}: ${team2}`);
  
  // Task 9
  const scorers = {};
  for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  }
  console.log(scorers);
  