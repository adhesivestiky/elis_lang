chars: {  
   'a': 'A',
   'o': 'B',
   '#': 'C',
   'Δ': 'D',
   '∑': 'E',
   '₼': 'F',
   'þ': 'G',
   'ţ': 'H',
   'i': 'I',
   'ƒ': 'J',
   'š': 'K',
   '∫': 'L',
   'm': 'M',
   'ŋ': 'N',
   'ȱ': 'O',
   'π': 'P',
   '¦': 'Q',
   'r': 'R',
   '^': 'S',
   'Ŧ': 'T',
   '₺': 'U',
   '‡': 'V',
   '~': 'W',
   'e': 'X',
   'ỹ': 'Y',
   'Ω': 'Z', 
	 ' ': ' '
}

var furry = prompt("enter furry cult text here");
var english = [];

furry.split('');

furry.forEach(f => {
	var keys = Object.keys(chars); //get keys from object as an array

  keys.forEach(function(key) { //loop through keys array
  	english.push(key, key == f);
		console.log(english);
	});
});




