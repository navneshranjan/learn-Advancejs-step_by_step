function commonLetter(sentence) {
  testString = sentence.toLowerCase();
  let letters = {};
  for (let i = 0; i < testString.length; i++) {
    if (testString[i] in letters) {
      letters[testString[i]]++;
    } else {
      letters[testString[i]] = 1;
    }
  }

  console.log(letters);
}
commonLetter("heeeellll");
