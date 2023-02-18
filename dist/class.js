"use strict";
class Person {
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age++;
    }
    greeting() {
        console.log(`Hello My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }
}
Person.species = 'Homo sapiens';
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    static getInstance() {
        if (Teacher.instance) {
            return Teacher.instance;
        }
        Teacher.instance = new Teacher('tarou', 20, 'lang');
        return Teacher.instance;
    }
    get subject() {
        return this._subject;
    }
    set subject(value) {
        this._subject = value;
    }
    explainJob() {
        console.log(`My job is teaching ${this.subject}.`);
    }
}
const teacher = Teacher.getInstance();
teacher.greeting();
console.log(Teacher.isAdult(89));
// teacher.name = 'kosugi';
