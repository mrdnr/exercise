const isLogged = true;

const checkLoginStatus = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isLogged) {
      const randomNum = Math.random();
      resolve(randomNum);
    } else {
      reject("User is not logged in");
    }
  }, 1000);
});

function checkNumber(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number > 0.5) {
        const data = { name: "John", age: 24 };
        resolve(data);
      } else {
        reject("Number is not greater than 0.5");
      }
    }, 1000);
  });
}

checkLoginStatus
  .then((randomNum) => {
    console.log("Random Number:", randomNum);
    return checkNumber(randomNum);
  })
  .then((userData) => {
    console.log("User Data:", userData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
