// let nums: number[] = [1,2,3];
// const anArray: (number | string)[] = [1, "eins"];
// Generics
// let strs: Array<string> = ["eins", "zwei"];
// let numsOrStrs: Array<number | string> = [1, "string"];
// arrs: Array<Array<number>> = [[1,2], [9,8]];
// Ein "T" wird für generische oft als Platzhalter verwendet. Hier darf jeder Typ stehen
// function first<T>(elements: Array<T>): T {
//     return elements[0]
// }
// Uebung1
function sum(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    else {
        return numbers[0] + sum(numbers.slice(1));
    }
}
console.log(sum([1, 2, 4]));
//----------------------------------------------------------
// Uebung2
function concatenate(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i].toString();
    }
    return result;
}
console.log(concatenate(["hallo", 4]));
//----------------------------------------------------------
// Uebung3
function getLength(arr) {
    return arr.length;
}
console.log(getLength([1, "frei", 3, 6]));
//----------------------------------------------------------
// Uebung4
function lastElement(arr) {
    if (arr.length > 0) {
        return arr[arr.length - 1];
    }
    else {
        return undefined;
    }
}
console.log(lastElement([]));
//----------------------------------------------------------
// Uebung5
function checkLastElement(arg) {
    if (Array.isArray(arg)) {
        if (arg.length > 0) {
            return arg[arg.length - 1];
        }
        else {
            return undefined;
        }
    }
    else {
        return arg;
    }
}
console.log(checkLastElement(1));
//----------------------------------------------------------
// Uebung6
function getSpecificTrallala(arr, start, end) {
    if (start === end) {
        return arr[start];
    }
    else {
        return arr.slice(start, end + 1);
    }
}
console.log(getSpecificTrallala([], 4, 5));
//----------------------------------------------------------
// Uebung2
function daysUntil(nameBirthday) {
    const today = new Date();
    const nextBirthday = new Date(today.getFullYear(), nameBirthday[1].getMonth(), nameBirthday[1].getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    const timeDiff = nextBirthday.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
}
console.log(daysUntil(["peter", new Date(1994, 11, 16)]));
//----------------------------------------------------------
// Uebung2
// function days(nameBirthday: NameBirthday): number {
//     const today = new Date();
//     const nextBirthday = new Date(today.getFullYear(), nameBirthday[1].getMonth(), nameBirthday[1].getDate());
//     if (nextBirthday < today) {
//         nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
//     }
//     const timeDiff = nextBirthday.getTime() - today.getTime();
//     const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
//     return daysDiff;
// }
// function birthdayList(nameBirthdays: NameBirthday[]): [number, string][] {
//     const today = new Date();
//     const nextYear = today.getFullYear() + 1;
//     const birthdayListWithDays = nameBirthdays.map(nb => {
//         const nextBirthday = new Date(nextYear, nb[1].getMonth(), nb[1].getDate());
//         const daysUntilBirthday = days(nb);
//         return [daysUntilBirthday, nb[0]];
//     });
//     const sortedList = birthdayListWithDays.sort((a, b) => a[0] - b[0]);
//     return sortedList;
// }
//----------------------------------------------------------
// Uebung4
function getBirthday(nameBirthdays) {
    const today = new Date();
    const nextYear = today.getFullYear() + 1;
    const sortedList = nameBirthdays.sort((a, b) => {
        const daysUntilA = daysUntil(a);
        const daysUntilB = daysUntil(b);
        return daysUntilA - daysUntilB;
    });
    for (const nb of sortedList) {
        const nextBirthday = new Date(nextYear, nb[1].getMonth(), nb[1].getDate());
        if (nextBirthday > today) {
            return nb[0];
        }
    }
    return nameBirthdays[0][0];
}
console.log(getBirthday([["Peter", new Date(1994, 11, 16)], ["Anna", new Date(1999, 24, 11)]]));
//# sourceMappingURL=uebungen.js.map