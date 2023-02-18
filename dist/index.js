"use strict";
let hasValue = true;
let count = 10;
let float = 0.1;
let negative = 3.1;
let person = {
    name: '太郎',
    age: 21,
    from: '北海道',
    admin: false,
};
let car = {
    name: 'landClouser',
    maker: 'TOYOTA',
    releaseYear: 1980,
};
let flouts = ['apple', 'remon', 'grape'];
let book = ['history', 1400, true];
let addNum = (num) => {
    return num + 3;
};
function doubleAndHandle(num, cb) {
    let double = cb(num * 2);
    console.log(double);
}
doubleAndHandle(5, doubleNum => {
    return doubleNum;
});
let anything;
anything = 4;
anything = 'stringです。';
anything = null;
let text;
text = anything;
let unknown;
unknown = 4;
unknown = 'stringです。';
unknown = null;
// text = unknown;
function hoge(num) {
    return num;
}
let multiple;
multiple = hoge;
const a = multiple(4);
console.log(a);
function minus(num, num2) {
    console.log(num - num2);
}
const b = minus(4, 2);
console.log(b); //undefined
// バージョン３から登場したnever型。型推論はvoidになる。
function throwError() {
    throw new Error("aaaaa");
}
