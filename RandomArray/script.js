let sampleArray = [2, 3, 4, 5, 6, 7, 8];

function suffelArray(array) {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

console.log(suffelArray(sampleArray));
console.log(suffelArray(sampleArray));
console.log(suffelArray(sampleArray));
console.log(suffelArray(sampleArray));
