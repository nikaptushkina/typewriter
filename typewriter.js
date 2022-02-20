const sentence = "hello there from lighthouse labs";

// FUNCTION
const typeSentence = function(sentence) {
  for (const char in sentence) {
    let letter = sentence[char];
    setTimeout(() => {
      process.stdout.write(letter);
    }, char * 50);
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, sentence.length * 50);
};

// TEST CODE
typeSentence(sentence)
