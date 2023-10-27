

/**  ======== Arrays ======== */
/*
let arr = new Array()
let arr2 = []
let newArr = [
1, true, 'text',function (){console.log('Test func in array')},
['a','b'], {test: 'string', hello: 'Hello'}
]
// const newArr = [1, true, 'text']

// newArr[3]()//Test func in array
// console.log(newArr)// (6)[1, true, 'text', ƒ, Array(2), {…}] весь масив
// console.log(newArr[4][0])// a
// console.log(newArr[newArr.length -1])//очтанній елемент {test: 'string', hello: 'Hello'} очтанній елемент
// console.log(newArr[5]['hello'])//Hello
// console.log(newArr.length);// 6
//
// newArr = [
1, true, 'text'
//  ]
// console.log(newArr)//[1, true, 'text'] переписали масив
//
// newArr[6] = 'new element'
// console.log(newArr) // добавили елемент (11)[1, true, 'text', empty × 7, 'new element']
//
// console.log(newArr.push('Hello')) // додати елемент в кінець
// console.log(newArr);// додати елемент в кінець (8) [1, true, 'text', ƒ, Array(2), {…}, 'new element', 'Hello']
//
// const lastElement = (newArr.pop()) // видалити елемент з кінця
// console.log(lastElement);// записали в змінну видалений елемент "Hello"
// console.log(newArr);//7)[1, true, 'text', ƒ, Array(2), {…}, 'new element']
//
// newArr.unshift('lesson_6') // додати елемент на початку
// console.log(newArr);//(8)['lesson_6', 1, true, 'text', ƒ, Array(2), {…}, 'new element']
// newArr.shift()  // видалити елемент з початку
// console.log(newArr);// (7)[1, true, 'text', ƒ, Array(2), {…}, 'new element']


// let demoArr = new Array(1,24,45)
// console.log(demoArr);// старий метод створення масива
*/

/** ======== matrix ========*/
/*
let matrix = [
  [1,5,3], //спочатку столбец потім рядок пошук вивода
  [7,8,4]
]
console.log(matrix[1][2]);// 4 елемент спочатку столбец потім рядок
*/


/** JS Built-in functions for Array */

/** =====forEach ========*/
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, undefined]

arr.forEach((elem) => {
  console.log('element: ' + elem)// перебрали масив
})
*/

/** ======= метод для підрахунку Reduce =======*/
/*
const array1 = [1, 2, 3, 4];
// // 0 + 1 + 2 + 3 + 4
const initialValue = 3;
const sumWithInitial = array1
    .reduce((accumulator, currentValue) =>
        accumulator * currentValue, initialValue);
console.log(sumWithInitial);
*/

/**======== Map псевдо масив колекція ========  */
/*
// створюємо масиви і обєднуємо
const first = new Map([
 [1, "one"],
 [2, "two"],
 [3, "three"],
]);

const second = new Map([
 [1, "uno"],
 [2, "dos"],
]);

// Merge two maps. The last repeated key wins.
// Spread syntax essentially converts a Map to an Array
const merged = new Map([...first, ...second]);
console.log(merged)
console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three


//створюємо Map та добавляемо у нього елементи

let newMap = new Map()

let obj = {
  name: "Nik",
  age: 22
}

// методи Map /

newMap.set(obj, true)// добаляемо obj-ключ та  значення
newMap.set('test', 100)// добаляемо ключ значення
newMap.set(2, 200)// добаляемо ключ значення

console.log(newMap.set('sum', 777))// добавляемо ключа та значення
console.log(newMap.get('sum'))// отримання значення по ключу
console.log(newMap.has('sum'))// повертае true / false
// console.log(newMap.delete('sum'))// видаляе
// console.log(newMap.size)// кількість значень
// console.log(newMap.clear())// очищае колкцію
// console.log(newMap)//

// ========================================
// перебираємо Map
newMap.forEach((elem ) => {
  console.log([elem])// перебрали псевдо масив  Map()
})

for(let key of newMap.keys()) {
  console.log(key);// виведе ключ {name: 'Nik', age: 22}
}

for(let value of newMap.values()) {
  console.log(value);//виведе ключ значення true
}

for(let item of newMap.entries()) {
  console.log(item[0])//{name: 'Nik', age: 22}
  console.log(item[1])//true
}

for(let key of newMap) {
  console.log(key, [key]);//прочтіший варант виведе ключ - значення  {name: 'Nik', age: 22} true
}
// ========================================
// ще один споіб наповнення   Map
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
// ========================================
// клонування
const original = new Map([[1, "one"]]);
const clone = new Map(original);
console.log(clone); //
console.log(clone.get(1)); // one
console.log(original === clone); // false (useful for shallow comparison)

// ======================================
// добавляемо елементи  через змінну const
const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");
console.log(myMap); //
console.log(myMap.size); // 3
*/


/** ==== Set псевдо масив колекція виводить унікальні значення ===== */

/*
let setNew = new Set(['a', 'a' , '1', 'c', 5, 5, 5])

setNew.add('str')// добавляемо елемент string
setNew.add(432)// добавляемо елемент number
setNew.add(true)// добавляемо елемент boolean
setNew.add('Artem')// добавляемо унікальне  елемент
setNew.add('Artem')//не добавляеться  елемент тому що повтор не унікального

console.log(setNew);
 setNew.forEach((item, index, set)=> {
  // console.log('this is item: ', item);// виведе значення
  // console.log('this is index: ' , index );// виведе значення те саме що і item
  console.log('this is set: ', set);// виведе індекс та занчення
})
console.log(setNew)// // виведе індекс та занчення
console.log(setNew.keys())// виведе індекс та занчення
console.log(setNew.values())// виведе індекс та занчення
console.log(setNew.entries())// виведе індекс та занчення

for(let item of setNew) {
  console.log(item);// переберемо всі ключі виведемо в кожній строці окремо
}
// =========методи new Set()=================
const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("текст"); // Set(3) { 1, 5, 'текст' }

const variable = { a: 1, b: 2 };
mySet1.add(variable);

mySet1.add({ a: 1, b: 2 }); // variable ссылается на другой объект, так что это нормально

mySet1.has(1); // true
mySet1.has(3); // false, поскольку 3 не был добавлен в набор
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Текст".toLowerCase()); // true
mySet1.has(variable); // true

mySet1.size; // 5

mySet1.delete(5); // удаляет элемент 5 из set
mySet1.has(5); // false, 5 был удалён

mySet1.size; // 4, поскольку мы удалили одно значение

mySet1.add(5); // Set(5) { 1, "текст", {...}, {...}, 5 } - ранее удаленный элемент будет добавлен как новый элемент, он не сохранит свое первоначальное положение до удаления

console.log(mySet1); // Set(5) { 1, "текст", {…}, {…}, 5 }
*/

/** ======JS Objects ===========*/

/*
let user = {}// новий спосіб створення обєкту
let user2 = new Object()// старий  спосіб створення обєкту

let car = {
  'a': 'test',
  'b': true,
  arr: [1,2,3,4],
  destination: 'Kyiv',
  drive: function (){
    console.log('Lets go! ' + this.destination)
  }
}

car.size = 'Big'// добавляємо значення в обєкт 'Big'
console.log(car)// (4), destination: 'Kyiv', drive: ƒ,…}
console.log(car.destination);//Kyiv
car.drive()// виклик  функції drive() в обєкті
*/

// let user3 = {
//   a: 'str',
//   b: 100,
//   c: [1,2,3],
//   d: {
//     property1: 'hello',
//     property2: 'world'
//   },
//   e: function () {
//     console.log('Hello from object' + this.a)
//   },
// }
// ========================================================

function Car (manufacturer, destination, year, owner) {
    this.manufacturer = manufacturer;
    this.destination = destination;
    this.year = year;
    this.owner = owner;
}

const myCar = new Car('Mercedes', 'Mykolaiv', 2000, 'wife')
console.log(myCar)
console.log(myCar.manufacturer)
let myRacingCar = new Car('Redbull', 'London', 2020, 'user')
console.log(myRacingCar)

// ========================================================

function User (name, age) {
    this.name = name
    this.age = age
}
let user = new User('Artem',18)
console.log(user)

// ========================================================
function UserWitObg (params) {
    this.name = params.name
    this.age = params.age
}

let wife = new UserWitObg({
    name: 'Olha',
    age: 17
})
console.log(wife)
console.log(wife.name)
console.log(wife.age)

// ========================================================
function Cars(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
}

let myCars = new Cars('Mercedes', 's500', 2000)
console.log(myCars.make)
console.log(myCars.model)
console.log(myCars.year)

// ========================================================
let users = {
    name: 'Artem',
    role: 'teacher',
    'lesson number': 6
}

users.hasCar = true
// delete user.name
console.log(users['lesson number']);// якщо два слова значення беремо в лапки і крапку не ставимо

// ========================================================
function transformIntoObj(name,age) {
    let obj = {
        name,
        age
    }
    return obj
}
console.log(transformIntoObj('artem', 20))

// ========================================================
let car = 'Subaru'
let myCarі = {
    car
}
console.log('version' in myCarі);
console.log('car' in myCar);

// ========================================================

let test = {
    a:'a',
    b: 123,
    c: [1,2,3],
    greeting: ((name )=>{
        console.log('hello World', name)
    })
}
test.greeting('artem')// викликаємо метод greeting

// цикл for in для обєкту використовується

// for(let key in test) {
//   console.log(test[key]); //перебираяємо обєкт
// }

function greeting(){
    console.log('Hello ')
}
test.greeting = greeting
test.greeting()
console.log(test);


