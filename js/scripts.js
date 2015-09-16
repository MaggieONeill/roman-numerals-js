var romanNumeral = function(englishNumber) {

 var romanNumber;
 var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
 var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
 var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
 var thousands = ["", "M", "MM", "MMM","MMMM"];

 if (englishNumber > 4999){
   romanNumber = "This number is out of range!  The romans can't count that high.";
 } else {
   var onesPlace = ones[englishNumber % 10];//maybe we should make it more clear that the english number refers to the place in the index
   englishNumber = englishNumber - (englishNumber % 10);
   var tensPlace = tens[(englishNumber % 100)/10];
   englishNumber = englishNumber - (englishNumber % 100);
   var hundredsPlace = hundreds[(englishNumber % 1000)/100];
   englishNumber = englishNumber - (englishNumber % 1000);
   var thousandsPlace = thousands[(englishNumber % 10000)/1000];

   romanNumber = thousandsPlace + hundredsPlace + tensPlace + onesPlace;
 }

 return romanNumber;


}


$(document).ready(function() {
  $("form#userinput").submit(function(event) {
    var englishNumber = parseInt($("input#englishnumber").val());


    $(".romannumber").text(romanNumeral(englishNumber));
    $("#result").show();
    event.preventDefault();
  })

});
