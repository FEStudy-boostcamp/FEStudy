function repeat(word, times = 2) {
  let words = [];
  for (let i = 0; i < times; i++) {
    words.push(word);
  }
  return words;
  //   return words.join(" "); // 배열을 문자열로 변환
}

export default repeat;
