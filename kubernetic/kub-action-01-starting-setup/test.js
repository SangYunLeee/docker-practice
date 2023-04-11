function makeOddDigits(num) {
  // TODO: 여기에 코드를 작성합니다.
  let rtn = ""
  let nu = 1;
  while (nu <= num) {
    console.log(`nu :`, nu);
    rtn += ((nu) * (2) -1)
    console.log(`rtn :`, rtn);
    nu++;
  }
  return rtn;
}

console.log(`ff :`, makeOddDigits(3));