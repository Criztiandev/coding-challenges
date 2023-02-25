function isVowelRegEx(char) {
  const vowels = /[aeiou]/i;
  let voewlFlags = 0;

  const dataset = char.split("");
  dataset.forEach((char) => (vowels.test(char) ? voewlFlags++ : voewlFlags));
  return voewlFlags;
}

console.log(isVowelRegEx("aeiou"));
