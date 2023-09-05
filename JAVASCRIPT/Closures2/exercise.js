function printName() {
  let helloName = "Hello John";

  function inner() {
    console.log(helloName);
  }

  return setTimeout(inner, 1000);
}

printName();
