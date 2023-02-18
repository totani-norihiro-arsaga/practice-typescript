interface addFunc{
    (num1: number, num2: number): number;
}
let addFunc: addFunc;

addFunc = (num: number, num2: number) => {
    return num2 + num
}

interface Nameable {
    name: String;
    nickName?: String;
}

interface Human extends Nameable {
    age: Number;

    greeting(message: String): String;
}

class Developer implements Human {
    name: String;
    age: Number;
    experience: Number;
    nickName?: String;

    public constructor(name: String, age: Number, experience: Number, nickName?: String) {
        this.name = name;
        this.age = age;
        this.experience = experience;
        this.nickName = nickName;
    }

    greeting(message: String) {
        return message;
    }
}
const Totani = new Developer('totai', 31, 1);

console.log(Totani.name);
console.log(Totani.nickName);

if(Totani.nickName) {
    console.log(Totani.nickName.toUpperCase());
}