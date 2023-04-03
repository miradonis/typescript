// Uebung 1
function concatenate(str1: string, str2: string): string {
    return str1 + str2;
}

const result: string = concatenate("Hallo", " Steffi");
console.log(result);

//----------------------------------------------
// Ubenung 2
function toNumber(str: string): number {
    return Number(str);
}
console.log(toNumber("hallo"));

//----------------------------------------------
// Ubenung 3
function chain(str: string, x: number): string {
    let repeatedString = '';
    for (let i = 0; i < x; i++) {
        repeatedString += str;
    }
    return repeatedString;
}
console.log(chain("hallo", 3));

//----------------------------------------------
// Ubenung 4
function isVowel(letter: string): boolean {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(letter.toLowerCase());
}
console.log(isVowel("b"));

//----------------------------------------------
// Ubenung 5
function moreVowels(str: string, num: number): string {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (vowels.includes(char.toLowerCase())) {
            const newChar = char.repeat(num);
            result += newChar;
        } else {
            result += char;
        }
    }

    return result;
}
console.log(moreVowels("steffi", 5));

//----------------------------------------------
// Ubenung 6
function Dice(): number {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(Dice());

//----------------------------------------------
// Ubenung 7
function diceGame(player1: number, player2: number): string {
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;
    const sum = roll1 + roll2;

    const diff1 = Math.abs(player1 - sum);
    const diff2 = Math.abs(player2 - sum);

    if (diff1 < diff2) {
        return `Spieler 1 hat gewonnen!`;
    } else if (diff2 < diff1) {
        return `Spieler 2 hat gewonnen!`;
    } else {
        return "Unentschieden!";
    }
}
console.log(diceGame(2, 7));