$(document).ready(function() {
  $("wordPlay").submit(function(event) {
  event.preventDefault();
  const sentence = $("input#sentence").val();



  const words = sentence.split(' ');
  let wordlist = [];
  words.forEach(function(word) {
    if (word.length > 3) {
      wordlist.push(word);
    }
  });
  wordlist.reverse();
  alert(wordlist.join());
  });
});

