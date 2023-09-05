function multiplyByTwo(value) {
  let result = 0;
  function inner() {
    let number = 2;
    result = value * number;
    console.log(result);
  }
  return inner;
}
multiplyByTwo(4)();
