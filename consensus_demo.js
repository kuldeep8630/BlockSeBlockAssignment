// PoW: miner with max power wins
const miners = {
  MinerA: Math.floor(Math.random() * 100),
  MinerB: Math.floor(Math.random() * 100),
};

const powWinner = Object.entries(miners).reduce((a, b) => (a[1] > b[1] ? a : b));
console.log("🔨 Proof of Work:");
console.log("Miners:", miners);
console.log(`Winner: ${powWinner[0]} with power ${powWinner[1]}`);
console.log("Explanation: Highest computational power wins.\n");

// PoS: staker with max stake wins
const stakers = {
  StakerA: Math.floor(Math.random() * 100),
  StakerB: Math.floor(Math.random() * 100),
};

const posWinner = Object.entries(stakers).reduce((a, b) => (a[1] > b[1] ? a : b));
console.log("💰 Proof of Stake:");
console.log("Stakers:", stakers);
console.log(`Winner: ${posWinner[0]} with stake ${posWinner[1]}`);
console.log("Explanation: Highest staked tokens selected.\n");

// DPoS: most voted delegate wins
const votes = {
  Alice: 'Delegate1',
  Bob: 'Delegate2',
  Charlie: 'Delegate1',
};

const voteCount = {};
Object.values(votes).forEach(v => voteCount[v] = (voteCount[v] || 0) + 1);
const dposWinner = Object.entries(voteCount).reduce((a, b) => (a[1] > b[1] ? a : b));

console.log("🗳️ Delegated Proof of Stake:");
console.log("Votes:", votes);
console.log(`Winner: ${dposWinner[0]} with ${dposWinner[1]} votes`);
console.log("Explanation: Most voted delegate becomes block producer.")
;