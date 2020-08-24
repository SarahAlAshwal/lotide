const letterPositions = function(sentence) {
  let letterPosition = {};
  sentence = sentence.toLowerCase();
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (letterPosition[sentence[i]]) {
        letterPosition[sentence[i]].push(i);
      } else {
        letterPosition[sentence[i]] = [i];
      }
    }
  }
  return letterPosition;
};

module.exports = letterPositions;

