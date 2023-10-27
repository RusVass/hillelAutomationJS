/**===================lesson3=============================================*/

// Булеві операції
/*
or ||
and &&
not !
*/


// Скорочене обчислення
// Оператор логічного АБО обчислюється зліва направо, уможливлюючи скорочене обчислення виразу, згідно з таким правилом:
// (вираз true) || (наступний вираз) - обчислення зупиняється на істинноподібному виразі

// var x = true
// var y = false
// var c = x || y
// console.log(c)

// var isCustomer = true
// var hasDiscountCode = false
// var isHillelUser = true
// var canGetDiscount = isCustomer || hasDiscountCode || isHillelUser
// console.log(canGetDiscount)

// var age = true
// var user = 'Olha'
// var result = false || user || age
// console.log(result)


// x       |     b   |  result
// true        true      true
// true        false     false
// false       true      false
// false       false      false
// Логічне І (&&) обчислює операнди зліва направо, повертаючи відразу значення
// першого помилковоподібного операнда; якщо всі значення істиноподібні,
// повертається значення останнього операнда.

// var a = 8
// var b = 9
// var result = (a>=b) && true && true && true
// console.log(result)


// var age = true
// var user = 'Olha'
// var result = true && age && user
// console.log(result)


// console.log(!true)

// var a = 8
// var b = 9
// var result = !(a>=b) && true && true && true
// console.log(result)







// Інструкція if виконує інструкцію, якщо зазначена умова виконується (істинно)

// Якщо юзер кладе на депозит меньше 1000 грн, то відсоток за депозитом буде 5%.
// Якщо юзер кладе 1000 грн і більше, то відсоток за депозитом буде 10%

// var deposit = 900



// var str = prompt('Введіть ваш вік')
// console.log(str)
// console.log(typeof str)

// var
// const
// let

// console.log(x)
// var x

// var a = 'Hello'
// if(true) {
//   var a = 'World'
// }

// console.log(a)



// Інструкція switch порівнює вираз із випадками, переліченими всередині неї,
// а потім виконує відповідні інструкції.



// var day = prompt('Введіть номер дня тижня')
// switch (day){
//   case 1:
//     console.log('Сьогодні понеділок')
//   case 2:
//     console.log('Сьогодні вівторок')
//   case 3:
//     console.log('Сьогодні середа')
// }







// цикли
// while - спочатку думаємо, потім робимо

// var i = 0
// while (i<10) {
//   console.log('i = ', i)
//   i = i + 1
// }



// var age = 20
// while (true) {
//   if (age> 10) {
//     console.log('Виходимо')
//     break
//   }
// }



// do...while - спочатку робимо, а потім думаємо

// let i = 6
// do{
//   i++
//   console.log("i = " + i)
// } while (i< 4)



// цикл for

// for (let i = 0; i < 3; i++) {
//   console.log('i = ', i)
// }


// залишок від ділення

// var x = 5%2
// console.log(x)


// for(let i=0; i<10; i++) {
//   if(i%2 === 0) {
//     continue
//   }
//   console.log('тільки не парні: і = ', i)
// }



// var vs let

// for (var a = 0; a<10; a++) {
//   console.log('test')
// }

// console.log(a)



// function


// function sayHi() {
//   console.log('Hello')
// }

// sayHi()



// function sayHi() {
//   console.log('Hello')
//   return true
// }

// let x = sayHi()
// console.log(x)



// function sum(a,b) {
//   return a + b
// }

// let x = sum(2,5)