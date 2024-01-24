// Task 1
const events = [
    [17, '⚽ GOAL'],
    [34, '🔄 Substitution'],
    [48, '🔴 Red Card'],
    [64, '🟨 Yellow Card'],
    [75, '⚽ GOAL'],
    [87, '🔄 Substitution'],
  ];
  
  // Task 2
  const indexToDelete = events.findIndex(([minute, action]) => minute === 64 && action === '🟨 Yellow Card');
  if (indexToDelete !== -1) events.splice(indexToDelete, 1);
  
  // Task 3
  const averageEvents = events.length / 90;
  console.log(`1 event happened, on average every ${Math.round(90 / averageEvents)} minutes`);
  
  // Task 4
  for (const [minute, action] of events) {
    const half = minute <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${minute}: ${action}`);
  }
  