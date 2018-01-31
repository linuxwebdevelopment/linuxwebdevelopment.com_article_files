function convertToRoman(num) {
  romanNumerals = [[1000,'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'],
  [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5,'V'], [4,'IV'], [1,'I']];
  result = ""
  for (var i=0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i][0]) {
      num -= romanNumerals[i][0];
      result += romanNumerals[i][1];
    }
  }
  return result
}

var displayArea = document.getElementsByClassName('roman-numerals-display')[0];
var userButton = document.querySelector("button");
var romanString = ""
userButton.addEventListener("click", function() {
  for (var i=1; i < 4000; i++) {
    romanString = romanString + String(i) + " : " +  convertToRoman(i) + "\n";
  }
  displayArea.innerText = romanString;
});
