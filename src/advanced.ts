interface Engineer{
    name: string;
    role: string;
}

interface Blogger {
    name: string;
    follow: number;
}

type EngineerBlogger1 = Engineer & Blogger;
const shino: EngineerBlogger1 = {
    name: 'shino',
    role: 'front-end',
    follow: 500,
}

interface EngineerBlogger2 extends Engineer , Blogger {
    name: string;
    role: string;
    follow: number;
}

const norihiro: EngineerBlogger2 = {
    name: 'norihiro',
    role: 'coder',
    follow: 10,
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;
const saimon: Mix = 33;

function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string|number): string|number
{
    if(typeof x === "string") {
        return x.toUpperCase();
    }
    return x;
}
toUpperCase(3);
toUpperCase('jump');

interface TmpFunc {
    (x: string):string,
    (x: number):string,
}

let upperHello: TmpFunc = (x: string | number)=>{return 'string'};
// interface FuncA {
//     (a: number, b: string): number;
//     (a: string, b: number): number;
// }
//
// interface FuncB {
//     (a: string): number;
// }
// let intersectionFunc: FuncA & FuncB = (a: number| string, b?:string|number)=>{ return 0 };

interface FuncA {
    (a: string):number;
}

interface FuncB {
    (b: number):string;
}
let unionFunc: FuncA | FuncB;
// unionFunc = function (x: string|number) {
//     return x;
// }
class Dog {
    kind: 'dog' = 'dog';
    speak(){
        console.log('bow-bow');
    }
}

class Bird {
    kind: 'bird' = 'bird';
    speak(){
        console.log('tweet-tweet');
    }
    fly() {
        console.log('fly');
    }
}
type Pet = Dog | Bird;
function havePet(pet: Pet){
    pet.speak();
    // if('fly' in pet) {
    //     pet.fly();
    // }

    // if(pet instanceof Bird) {
    //     pet.fly();
    // }

    switch (pet.kind) {
        case "bird":
            pet.fly();
            break;
        case "dog":
            pet.speak();
    }
}
havePet(new Bird());

// const input = <HTMLInputElement>document.getElementById('input');
const input = document.getElementById('input') as HTMLInputElement;
input.value = 'input value';
(<HTMLInputElement>document.getElementById('input')).value = 'initial value';

const form = document.getElementById('form')!;
function clickFrom(form: HTMLElement){
    form.click();
}
// clickFrom(form);

interface Designer {
    name: string;
    [role: string]: string;
}
const designer: Designer = {
    name:'watanabe',
    role:'unit leader',
}

interface DownloadData {
    id:number,
    user?: {
        name?: {
            first: string,
            last: string,
        }
    }
}

const downloadData: DownloadData = {
    id: 2
}
console.log(downloadData.user?.name?.first);
const dataUser = downloadData.user ?? 'no-user';

type id = DownloadData["id"];

enum Color{
    RED,
    BLUE,
};
class AdvancedPerson {
    name: string = 'Perter';
    age: number = 35;
    // kind: string = 'human';
};
class AdvancedCar {
    name: string = 'Prius';
    age: number = 5;
}

let target = new AdvancedPerson();
let source = new AdvancedCar();
target = source;
target.age = Color.BLUE;

function advancedFn(...args: [number, string, number, ...string[]]){};
advancedFn(2, 'string', 5,'aa', 'aaa', 'asg');
const array =[10, 20] as const;
const milk = 'milk' as const;
let drink = milk;
const array2 = array;

const perter = {
    name: 'Perter',
    age: 39,
} as const;
type PerterType = typeof perter;