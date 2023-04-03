const aNumber = 1;
const anotherNumber = aNumber;
const bString = "Ein String";
const bNumber = 5;
function printId(id) {
    console.log("Deine ID ist: " + id);
}
// Wenn wir den Typen nur einmal verwenden können wir ihn auch direkt in die Funktion schreiben
function prints(id) {
    console.log("Deine ID ist: " + id);
}
const myName = "Steffi";
const testNumber = 7;
let test = testNumber;
//--------------------------------------------
// Uebung3
function introduction(x) {
    return "Hallo ich bin's :" + x;
}
console.log(introduction("Steffi"));
//--------------------------------------------
// Uebung4
function showContent(content) {
    if (typeof content === undefined) {
        return 'Ich habe keinen Inhalt';
    }
    else {
        return `Hallo mein Name ist: ${content}`;
    }
}
console.log(showContent(undefined));
//--------------------------------------------
// Uebung5
function keepPlaying(value) {
    if (typeof value === 'boolean' && value) {
        return true;
    }
    else if (typeof value === 'number' && value < 10) {
        return true;
    }
    else {
        return false;
    }
}
console.log(keepPlaying(true));
//--------------------------------------------
// Uebung6
function move(input) {
    if (typeof input !== "string") {
        return undefined;
    }
    const lowerInput = input.toLowerCase().trim();
    if (lowerInput === "links" || lowerInput === "link" || lowerInput === "li") {
        return 0;
    }
    if (lowerInput === "rechts" || lowerInput === "recht" || lowerInput === "re") {
        return 1;
    }
    if (lowerInput === "oben" || lowerInput === "ob") {
        return 2;
    }
    if (lowerInput === "unten" || lowerInput === "un") {
        return 3;
    }
    return undefined;
}
console.log(move("rechts"));
const player = {
    name: "Steffi Bayern",
    lastLogin: new Date(),
    id: 999,
    email: "steffi.bayern@meineemail.com"
};
function getEmail(player) {
    return player.email;
}
console.log(getEmail(player));
//# sourceMappingURL=union.js.map