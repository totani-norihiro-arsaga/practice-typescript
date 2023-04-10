function copy<T>(value: T){
    return value;
};
copy<number>(3);

interface copy2<T extends {name: string}>{
    (value: T): T;
}
let huga: copy2<{name: string}>;
huga = <T extends {name: string}>(a: T) => {
    return a;
}
huga({name: 'トーマス'});
const doubleNum = function(num: number){
    return num;
}

function doubleAndHandle(num: number, cb:(num: number)=>number): void{
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum);

function copy3<T extends {name: string}, U extends keyof T>(value: T, key: U): T
{
    let key1 = key;
    return value;
}
copy3({name: 'トーマス', age: 21}, 'age');

class LightDatabase<T extends string | number | boolean> {
    add(item: T) {
        this.data.push(item);
    }
    private data: T[] = [];
    remove(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get(){
        return this.data;
    }
}

const stringLightDatabase = new LightDatabase();
stringLightDatabase.add('grape');
stringLightDatabase.add('apple');
stringLightDatabase.add('banana');
stringLightDatabase.remove('banana');

interface Todo {
    title: string,
    text: string,
}

type Todoable = Partial<Todo>;
type ReadTodo = Readonly<Todo>;

type MappedTypes = {
    readonly [P in keyof ReadTodo]: string
}

const newObj: MappedTypes = {
    title: 'タイトル',
    text: 'テキスト',
}

type ConditionalType = 'tomato' extends string ? number : boolean;
type ConditionalTypeInfer = {tomato: 'tomato'} extends infer R ? R : boolean;
type DistributiveConditionalTypes<T> = T extends 'tomato' ? number : boolean;
let genericsTmp4: DistributiveConditionalTypes<'tomato' | 'pumpkin'>;
type Condition<U> = {
    content: U;
    created_at: Number;
}

const content: Condition<string> = {
    content: 'コンテンツ',
    created_at: 19920101,
}

type sampletype<H> = H extends string ? string : boolean;
let sample: sampletype<1234>;