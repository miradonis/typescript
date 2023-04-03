type MyNumber = number;
const aNumber: MyNumber = 1;
const anotherNumber: number = aNumber;

// Union Type (kann entweder string oder number sein)
type StringOrNumber = string | number;

const bString: StringOrNumber = "Ein String";
const bNumber: StringOrNumber = 5;

function printId(id: StringOrNumber) {
    console.log("Deine ID ist: " + id);
}

// Wenn wir den Typen nur einmal verwenden können wir ihn auch direkt in die Funktion schreiben
function prints(id: string | number) {
    console.log("Deine ID ist: " + id);
}

// Uebung1
type MyString = string;
const myName: MyString = "Steffi";

//--------------------------------------------
// Uebung2
type StringNumber = string | number;
const testNumber: number = 7;
let test: StringNumber = testNumber;

//--------------------------------------------
// Uebung3
function introduction(x: StringNumber): string {
    return "Hallo ich bin's :" + x;
}
console.log(introduction("Steffi"));

//--------------------------------------------
// Uebung4
function showContent(content: string | undefined): string {
    if (typeof content === undefined) {
        return 'Ich habe keinen Inhalt';
    } else {
        return `Hallo mein Name ist: ${content}`;
    }
}
console.log(showContent(undefined));

//--------------------------------------------
// Uebung5
function keepPlaying(value: boolean | number): boolean {
    if (typeof value === 'boolean' && value) {
        return true;
    } else if (typeof value === 'number' && value < 10) {
        return true;
    } else {
        return false;
    }
}
console.log(keepPlaying(true));

//--------------------------------------------
// Uebung6
function move(input: string): number | undefined {
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

//----------------------------OBJEKTE--------------------------
type Player = {
    name: string,
    lastLogin: Date,
    id: number,
    email: string,
};

type Admin = {
    name: string,
    id: number,
    email: string,
    employeeId: number
};

const player: Player = {
    name: "Steffi Bayern",
    lastLogin: new Date(),
    id: 999,
    email: "steffi.bayern@meineemail.com"
};

function getEmail(player: Player): string {
    return player.email;
}

console.log(getEmail(player));


//--------------------------
// Uebung4
type playedGame = {
    spielerName: string,
    highscore: number
}