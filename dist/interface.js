"use strict";
let addFunc;
addFunc = (num, num2) => {
    return num2 + num;
};
class Developer {
    constructor(name, age, experience, nickName) {
        this.name = name;
        this.age = age;
        this.experience = experience;
        this.nickName = nickName;
    }
    greeting(message) {
        return message;
    }
}
const Totani = new Developer('totai', 31, 1);
console.log(Totani.name);
console.log(Totani.nickName);
if (Totani.nickName) {
    console.log(Totani.nickName.toUpperCase());
}
