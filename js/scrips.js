$(document).ready(function() {
  $("#wordPlay").submit(function(event) {
  event.preventDefault();
  
  let sentence = $("input#sentence").val();

  let words = sentence.split(' ');
  let wordlist = [];
  words.forEach(function (word) {
    if (word.length >= 3) {
      wordlist.push(word);
     }
    });
  wordlist.reverse();
  let output = wordlist.join(" & ");
  alert(output);
  });
});