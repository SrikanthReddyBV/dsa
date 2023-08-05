function fun(word1, word2) {
  let [p1, p2] = [0, 0];
  let res = "";
  while (p1 < word1.length && p2 < word2.length) {
    res += word1[p1] + word2[p2];
    p1++;
    p2++;
  }
  for (let i = p1; i < word1.length; i++) {
    res += word1[i];
  }
  for (let i = p2; i < word2.length; i++) {
    console.log(res);
    res += word2[i];
  }

  return res;
}

console.log(fun("ab", "pqrs"));
