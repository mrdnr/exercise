const crypto = require('crypto');
console.dir(Object.keys(crypto));

const randomBytes = crypto.randomBytes(16);
const randomID = randomBytes.toString('hex');
console.log('Random ID:', randomID);
