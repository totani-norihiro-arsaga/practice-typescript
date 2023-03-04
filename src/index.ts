let hasValue: boolean = true;
let count: number = 10;
let float: number = 0.1;
let negative: number = 3.1;
let person :{
    name: string,
    age: number,
    from: string,
    admin: boolean
} = {
    name: '太郎',
    age: 21,
    from: '北海道',
    admin: false,
}

let car = {
    name: 'landClouser',
    maker: 'TOYOTA',
    releaseYear: 1980,
}

let flouts: string[] = ['apple', 'remon', 'grape'];

let book: [string, number, boolean] = ['history', 1400, true];

let addNum: (num: number)=>number = (num: number)=>{
    return num + 3;
} 

// function doubleAndHandle(num: number, cb: (num: number) => number) {
//     let double = cb(num * 2);
//     console.log(double);
// }

doubleAndHandle(5, doubleNum => {
    return doubleNum;
})

let anything: any;
anything = 4;
anything = 'stringです。';
anything = null;

let text: string;
text = anything;

let unknown: unknown;
unknown = 4;
unknown = 'stringです。';
unknown = null;
// text = unknown;

function hoge(num: number): number
{
   return num;
}

let multiple:(num: number)=>void;
multiple = hoge;

const a = multiple(4);
console.log(a);

function minus(num: number, num2: number):void
{
    console.log(num - num2);
}

const b = minus(4, 2);
console.log(b);//undefined

// バージョン３から登場したnever型。型推論はvoidになる。
function throwError():never
{
    throw new Error("aaaaa");
}