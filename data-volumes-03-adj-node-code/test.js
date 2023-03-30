function characterAndNumber(word) {
  // TODO: 여기에 코드를 작성합니다.
  const charList = [...word];
  let rtnVal = '';
  for (let num = 0; num < charList.length; num ++) {
    rtnVal += `${charList[num]}${num}`
  }
  return rtnVal;
}

console.log(characterAndNumber("heellow"));