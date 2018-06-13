// var section = document.getElementsByTagName('div');
// // var table = document.createElement(table);
// // var row = document.createElement(tr);
// // var columns= document.createElement(td);
// //
// // section.appendChild(table);
// // table.appendChild(row);
// // row.appendChild(columns);
//
// var alphMatrix = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//
// var text = document.getElementById("cesar");
// var shift = 3;
// var btn = document.getElementById("button")
// btn.addEventListener("click", function(){
//     console.log(text.value);
//  var content = text.value;
//
// for (var i =0; i< alphMatrix.length; i++) {
//
//
// }
// })


alphabet = 'abcdefghijklmnopqrstuvwxyz';
shift = 3;

word = "bonjour";

encrypted_word = " ";

for (var i = 0; i < word.length; i++) {
var letterIndex = alphabet.indexOf(word[i]);
var newLetterIndex = letterIndex + shift;
newLetterIndex %= 26;
var newLetter = alphabet[newLetterIndex];
encrypted_word += newLetter;
};

console.log(word, encrypted_word);
