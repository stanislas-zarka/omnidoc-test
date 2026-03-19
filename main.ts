// Source
const morseRaw: string =
  "'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..'";

// Init map
const morseSigns: Map<string, string> = new Map<string, string>();
morseRaw.split(', ').forEach((entry: string) => {
  const [rawLetter, rawSign]: string[] = entry.split(': ');

  const letter: string = rawLetter.replace(/'/g, '');
  const sign: string = rawSign.replace(/'/g, '');

  morseSigns.set(letter, sign);
});

// Encode
function toMorse(str: string): string {
  return str
    .toUpperCase()
    .split('')
    .map((char: string) => morseSigns.get(char) ?? '')
    .join('');
}

console.log('Result `toMorse`');
console.log(toMorse('SOS')); // ...---...

// ------------------------------------

// Reverse map for decoding
const reverseMorseSigns: Map<string, string> = new Map<string, string>(
  Array.from(morseSigns.entries()).map(([letter, sign]) => [sign, letter])
);

// Decode
function fromMorse(str: string): string[] {
  const results: string[] = [];

  function dfs(remaining: string, current: string): void {
    if (!remaining.length) {
      results.push(current);
      return;
    }

    // One letter -> max 4 chars in morse code
    for (let i = 1; i <= 4 && i <= remaining.length; i++) {
      const chunk: string = remaining.slice(0, i);
      const letter: string = reverseMorseSigns.get(chunk);

      if (letter) {
        dfs(remaining.slice(i), current + letter);
      }
    }
  }

  dfs(str, '');
  return results;
}

console.log('Result `fromMorse`');
console.log(fromMorse('...')); // ["EEE", "EI", "IE", "S"]
