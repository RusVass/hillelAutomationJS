/** Callback functions */
/*function greating (name) {
  console.log('Hello + ' + name )
}

function toCallCallback(param) {
  let name = 'Please enter your name.'// prompt('Please enter your name.')
  return param(name)
}

toCallCallback(greating)*/

/** стрілочна функція   (arrow functions) */
/*
let func = () => {
  console.log('Hello world', name)
  return name
}
func()
*/


// it('test', () => {
// })

/** вложення функцій */
/*function parentFunction() {
  function childFunction() {
    console.log('Hello world')
  }
  childFunction()
}
parentFunction()*/

/** область  видимості*/
/*let a = 1
function outerFunction (x) {

  let b = 2
  function innerFunction(y) {
    var w = 10
    console.log('Hello from inner func', y)
    console.log('a', a)
    console.log('b', b)
    console.log('x', x)
    console.log(w)
  }
  innerFunction(x)
}
outerFunction(5)*/


/** Variable scope of JS Nested Functions*/
/*function addNumbers(a, b) {
  function showMessage(text) {
    console.log(text)
  }

  let sum = a + b
  showMessage("sum is " + sum)
}

addNumbers(1,2)*/


/**  Returning a JS Nested Function (Closures)*/

/*function displayCounter () {
  let counter = 0

  increment = function () {

    return ++counter
  }
  return increment
}

let counter = displayCounter()

console.log(counter())
console.log(counter())
console.log(counter())*/

/** Parameters of JS Nested Functions */
/*function outerFunction(x) {

  innerFunction = function(y, v, t) {
    console.log(`${x} + ${y} = ${x+y}`, v, t)

    innerFinal = function (boss) {
      console.log('Hello from dno', boss)
    }
    return innerFinal
  }
  return innerFunction
}

let x = outerFunction(4)
let w = x(5)
outerFunction(2)(3, 4, 6)('Lesson 5')*/


/** Recursion - factorial function */
/*
function factorial(n) {
  if (n === 1) {
    return 1
  }
  console.log(n)
  return n * factorial(n - 1)
}

console.log(factorial(5))
*/



/**
 * Both `slice()` and `substring()` are JavaScript string methods used to extract a portion of a string. However, there are some differences between them:

 1. Parameters: `slice()` takes two parameters: the starting index and the ending index (optional). `substring()` also takes two parameters: the starting index and the ending index. However, if the second parameter is not provided, `substring()` will extract the rest of the string.

 2. Negative indexes: `slice()` allows negative indexes, which count from the end of the string. For example, `str.slice(-3)` extracts the last three characters of the string. `substring()` does not allow negative indexes.

 3. Mutability: `slice()` returns a new string that is a copy of the original string, with the specified portion extracted. The original string is not modified. `substring()` also returns a new string, but it does not create a copy of the original string. Instead, it extracts the specified portion and returns it as a new string.

 Here are some examples to illustrate the differences:

 */

/** toExponential() */
// const numb = 100000054353535
// console.log(numb.toExponential(2))

/*** ====== Методи String ==========

/**  slice() */
const str = "Hello, world! Test test test.";
console.log(str.replace('world', 'lesson 5'))
console.log(str.slice()); // "Hello, world! Test test test."
console.log(str.slice(7, 12)); // "world"
console.log(str.slice(-6)); // "test."

/** length */
console.log(str.length); // 29

/** replaceAll */
console.log(str.replaceAll(" ", "")); //Hello,world!Testtesttest.

/** replaceAll */
console.log(str.replace(" ", ""))// Hello,world! Test test test.

/** toLowerCase()  */
console.log(str.toLowerCase()); //hello, world! test test test.
/** toUpperCase() */
console.log(str.toUpperCase()); //HELLO, WORLD! TEST TEST TEST.
/**  */
console.log(str.split(' ')); // перетворює в масив ['Hello,', 'world!', 'Test', 'test', 'test.']

/** charAt()  */
console.log(str.charAt(3)); // l
/** concat()  */
const str2 = 'Testing concat'
console.log(str.concat(str2) ); //Hello, world! Test test test.Testing concat
/** indexOf()  */
console.log(str.indexOf("world")); // 7 символ
/** toString()  */
let num = 1234
console.log(typeof num.toString()) //string
/** Using substring() */
console.log(str.substring(0, 5)); // "Hello"
console.log(str.substring(7)); // "world!"
console.log(str); // "Hello, world!"

/** масив приклад видалення */
let x = ['a','s','f'].slice(-1)
console.log(x)

/** JS Regexp Using String Methods */

const str3 = "The quick Brown fox jumps over the lazy dog.";

/** Using search() */
const index = str3.search(/brown/i);
console.log(index); // 10
/** match () */
const replaced = str3.replace(/the/gi, "a");
console.log(replaced); // "a quick brown fox jumps over a lazy dog."
/** match() */
const reg = /fox/gi;
const matchRes = str3.match(/fox/gi);
console.log('match:', matchRes)

const test = reg.test(str);
console.log('test:', test)
/**  ceil()*/
const rand = Math.ceil(Math.random() * 10)
console.log(rand)


/**========== Regular Expressions (Regex)========== */

// const email = ' this is 5435 my 5435 email : 5435 34 artem@test.com '
// const reg = /[a-z]*@[a-z]*.[a-z]*/

// console.log(email.search(/[a-z]*@[a-z]*.[a-z]*/))
// console.log(email.replace(/[0-9]/g, ''))
// console.log(reg.test(email))


/**  ========= Dates ==========*/

// let date = new Date().setFullYear(1990)

// console.log(date)
// console.log(date.toLocaleDateString('en-us'))
// console.log(date.toLocaleString('en-gb', {year: 'numeric', month: 'short', day: 'numeric'}))



/** JS Built-in functions for Array */

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// arr.forEach(element => {
//   console.log(element)
// })

// arr.map(element => {
//   console.log(element)
// })

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

// console.log(sumWithInitial);
// // Expected output: 10

// let i = 11

// do {
//   i++

//   if (i % 2 === 0)  {
//     console.log(i)
//   } else {
//     continue
//   }
// } while(i<=10)


// for(let i = 1; i< 10; i*=2) {
//   console.log(i)
// }


// let obj = { x: 2, y: 3, b: 4}

// for(let key in obj) {
//   console.log(obj[key])

// }