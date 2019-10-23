$( "document" ).ready(function() {
    $("#button").click(function() {
        var userInput= $(".input").val();
        $(".output").text(userInput);
        var pigLatinWord= pigLatinizer(userInput);
        $(".output").text(pigLatinWord)
    });
});

function pigLatinizer(userInput) {
   let isVowel= checkVowel(userInput);

   if (isVowel===false) {
    return userInput.slice(1)+userInput[0]+"ay"
   }
    return userInput + "ay"
}

function checkVowel (str){
    var firstLetter= str[0];
    var vowel= ["a","e","i","o","u"];
    if (vowel.includes(firstLetter)) {
        return true;
    }
        return false;
}

