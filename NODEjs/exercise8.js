const fs = require('fs');

const fileName = 'node-8.txt';
const content = 'Hello, this is the eighth exercise content of the file!';

fs.writeFile(fileName, content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log(`File '${fileName}' has been successfully written.`);
  }
});
