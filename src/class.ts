abstract class Person{
    static species = 'Homo sapiens';
    static isAdult(age:number) {
        if(age > 17) return true;
        return false;
    }

    constructor (readonly name: string, protected age: number){
    }
    incrementAge(){
        this.age ++;
    }

    greeting(this: Person) {
        console.log(`Hello My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }

    abstract explainJob(): void;
}

class Teacher extends Person {
    private static instance: Teacher;
    private constructor(name:string, age:number, private _subject:string) {
        super(name, age);
    }
    static getInstance(){
        if(Teacher.instance){
            return Teacher.instance;
        }
        Teacher.instance = new Teacher('tarou', 20, 'lang');
        return Teacher.instance;
    }

    get subject():string {
        return this._subject;
    }

    set subject(value: string) {
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