function sumUntil(maxValue) {
  let total=0;
  for(let i= maxValue ; i >=0  ;i--){
    total += i;
  }
  return total;
}

console.log(sumUntil(5));