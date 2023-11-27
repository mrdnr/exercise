const figlet = require('figlet');

const text = 'Develhope';

figlet(text, function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});
