const crypto = require('crypto');

class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    const str = this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce;
    return crypto.createHash('sha256').update(str).digest('hex');
  }
}

// Create 3 linked blocks
const block1 = new Block(1, new Date().toISOString(), { amount: 100 }, '0');
const block2 = new Block(2, new Date().toISOString(), { amount: 200 }, block1.hash);
const block3 = new Block(3, new Date().toISOString(), { amount: 300 }, block2.hash);

const blockchain = [block1, block2, block3];

console.log("✅ Blockchain Before Tampering:");
blockchain.forEach(block => {
  console.log(`Block ${block.index}: Hash: ${block.hash} | PrevHash: ${block.previousHash}`);
});

// Tampering Block 1
console.log("\n🔴 Tampering Block 1...");
block1.data = { amount: 9999 };
block1.hash = block1.calculateHash();

console.log("\n⛓️ Blockchain After Tampering:");
blockchain.forEach(block => {
  console.log(`Block ${block.index}: Hash: ${block.hash} | PrevHash: ${block.previousHash}`);
});
