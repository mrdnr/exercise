const number = 15;

const checkNumberPromise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve("Number is greater than 10");
  } else {
    reject("Number is not greater than 10");
  }
});

checkNumberPromise
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
