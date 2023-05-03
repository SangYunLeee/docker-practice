function makePermutations(str) {
  // TODO: 여기에 코드를 작성합니다.
  let ary = "";
  for (let i = 0; i <str.length; i ++) {
    for (let k = 0; k <str.length; k ++) {
      ary +=`${str[i]}${str[k]}`;
      console.log(`i-1 == str.length :`, i);
      console.log(`str.length :`, str.length);
      if (!(i+1 == str.length && k+1 == str.length)) {
        ary +=`,`;
      }
    }
  }
  return ary;
}

console.log(`hi :`, makePermutations("123"));