const crypto = require('crypto');

class Block {
  constructor(data) {
    this.timestamp = new Date().toISOString();
    this.data = data;
    this.nonce = 0;
    this.hash = '';
  }

  calculateHash() {
    return crypto.createHash('sha256')
      .update(this.timestamp + JSON.stringify(this.data) + this.nonce)
      .digest('hex');
  }

  mineBlock(difficulty) {
    const prefix = '0'.repeat(difficulty);
    const start = Date.now();

    while (true) {
      this.hash = this.calculateHash();
      if (this.hash.startsWith(prefix)) break;
      this.nonce++;
    }

    const end = Date.now();
    console.log(`✅ Block mined! Nonce: ${this.nonce}`);
    console.log(`Hash: ${this.hash}`);
    console.log(`⏱️ Time taken: ${(end - start) / 1000}s`);
  }
}

const difficulty = 4;
const block = new Block({ sender: "Alice", receiver: "Bob", amount: 50 });
block.mineBlock(difficulty);
