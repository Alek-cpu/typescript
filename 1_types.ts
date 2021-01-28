// ---------------------------------
const isFetching: boolean = true;
let str: string = "Hello";
const int: number = 1;

// str = 1; // ошибка ввода типа. Ожидалась строка

// --------------Arrayy-------------------
const numberArray: number[] = [1,2,3,4];
const word: Array<number> = [1,2,3,4];

const Man: [string, number] = ['Jack', 12];

// --------------Any-------------------

let questionType: any = 1;
questionType = "WOW that is it";
console.log(str);

// ---------------------------------

function sayMyName(name: string): void {
    console.log(name);
}

sayMyName('Ptushkin');

type Name = string;
const FIO: Name = "Vasilyev";

type ID = string | number;
const idSchool: ID = "djfvjkdfnv1";
const idSchool1: ID = 734534;