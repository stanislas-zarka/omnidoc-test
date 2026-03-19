var morseSigns = new Map();
var morseRaw = "'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..'";
var morseArray = morseRaw.split(', ');
morseArray.forEach(function (morseSign) {
    // morseSign : 'A': '.-'
    var morseSignSplit = morseSign.split(': ');
    // const letter = 'A';
    var letter = morseSignSplit[0].replace("'", '').replace("'", '');
    // const sign = '.-';
    var sign = morseSignSplit[1].replace("'", '').replace("'", '');
    return morseSigns.set(letter, sign);
});
console.log(JSON.stringify(morseSigns.get('A')));
function to_morse(str) {
    var chars = str.split('');
    var resultChars = chars.map(function (char) {
        return morseSigns.get(char) || '';
    });
    return resultChars.join('');
}
console.log("Result");
console.log(to_morse('SOS'));
