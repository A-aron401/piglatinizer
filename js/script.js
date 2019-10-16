$( "document" ).ready(function() {

$("#button").click(function(){
        let result=$(".input").val();
        let checkVowelResult = checkVowel(result)
        $(".output").text(checkVowelResult);

});

function checkVowel (str){
    var firstLetter= str[0];
    var vowel= ["a","e","i","o","u"];
    if(vowel.includes(firstLetter)) {
        return "Starts with vowel"
    }
        return "Starts with constanant"
}
});