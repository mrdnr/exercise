function repeatHello(callback) {
  const intervalSec = setInterval(() => {
    callback();
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalSec);
  }, 5000);
}

repeatHello(() => {
  console.log("Hello");
});
