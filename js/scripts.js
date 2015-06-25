var palindromes = function(word) {
  if (word === word.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function(){
  $("form#palindrome").submit(function(event){
    var word = $("input#word").val();
    var result = palindromes(word);

    $(".word").text(word);
    if (!result) {
      $(".not").text("not");
    }

    $("#result").show();
    event.preventDefault();
  });

});
