
// ES6 is a new version of JavaScript that adds a lot of new features to the language.
// These include:
// - ARROW FUNCTIONS

// there are three types of function in js:

// function solve(){  // named function
//     // logic of function
// }
// // solve()

// // anonymous function
// const solve = function(){
//     // logic of function
// }
//solve()

// arrow function
// const solve = (a,b) => {
//     // logic of function
//     return a+b
// }

// console.log(solve(2,5))

// Spread Operators   ----> ...
// joining of 2 arrays 
// const arr = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]
// const arr3 = [...arr, ...arr2]
// console.log(arr3)

// // joining of 2 objects
// const obj = {
//     name: 'Rahul',
//     age: 20
// }
// const obj2 = {
//     city: 'Delhi',
//     state: 'Delhi'
// }
// const obj3 = {...obj, ...obj2}
// console.log(obj3)


// Template Literals ---->  `` back ticks  ${variable name }
// used to join strings and variables

// var a = 10
// var str =`a`
// console.log(str)

// var str2 = `The value of a is ${a}`
// console.log(str2)

// var str3 = `The value of a is ${a+10}`
// console.log(str3)

// var arr = [1,2,3,4,5]
// // your task is to traverse through the array and print the sqaure of each number in the following way,use map function
// // output ex: The square of 1 is 1 , Note : use template literals

// arr.map((item)=>{
//     console.log(`The square of ${item} is ${item*item}`)
// })


// for of loop

// const arr = [1,2,3,4,5]
// // for(let i = 0 ;i < arr.length ; i++){
// //     console.log(arr[i])
// // }

// for(let item of arr){
//     console.log(item)
// }

// for in loop
// const obj = {
//     name: 'Rahul',
//     age: 20,
//     city: 'Delhi',
    
// }
// for(let key in obj){
//     console.log(key)
//     console.log(obj[key])
// }


// const arr = [1,2]
// for( a in arr){
//     console.log(`index is ${a}`)
//     console.log(arr[a])
// }

//classes

// class Car{
//     constructor(brand,color,yom){
//         this.brand = brand
//         this.color = color
//         this.yom = yom
//         this.fhgvhhf=10
//     }
// }

// var car1 = new Car("BMW","red","2020") 
// var car2 = new Car("Audi","black","2019")
// console.log(car1)
// console.log(car2)

// minimum create 5 elements for each class
// Q1> create a class of student with name,age,marks and print the details of the student using template literals
// Q2> create a class of employee with name,age,salary and print the details of the employee using template literals
// Q3> create a class of hero with name,age,power and print the details of the hero using template literals 

// class Student {
//     constructor(name,age,marks){
//         this.name = name
//         this.age = age
//         this.marks = marks
//     }
// }


// var st1 = new Student("Rahul",20,90)
// var st2 = new Student("Rohan",21,80)

// console.log(`The name of the student is ${st1.name} and his age is ${st1.age} and his marks are ${st1.marks}`)

// class Hero{
//     constructor(name,age,power,health=100){
//         this.name = name
//         this.age = age
//         this.power = power
//         this.health = health
//     }

//     showdetails(){
//         console.log(`The name of the hero is ${this.name} and his age is ${this.age} and his power is ${this.power} and his health is ${this.health}`)
//     }  
//     changepower(newpower){
//         this.power = newpower
//     }  
//     changeage(newage){
//         this.age = newage
//     }

//     attack(){
//         if(this.health<10){
//             console.log("I am tired")
//             return 
//         }
//         console.log(`${this.name} is attacking with ${this.power}`)
//         this.health -= 30
//     }

//     heal(){
//         console.log(`${this.name} is healing`)
//         this.health += 10
//     }
// }

// const hero1 = new Hero("spiderman",20,"web",95)
// const hero2 = new Hero("ironman",30,"suit")
// // hero2.showdetails()
// hero1.changepower("fly")
// hero1.changeage(25)
// hero1.showdetails()
// hero1.attack()
// hero1.attack()
// hero1.attack()
// hero1.attack()
// hero1.heal()
// hero1.showdetails()
// hero1.heal()
// hero1.heal()
// hero1.attack()
// hero1.showdetails()



// create a function in this class that will change the power of the hero
// create a function in this class that will change the age of the hero 
// take another parameter health in the constructor and by default it should be 100  *

// create a function attack in this class that will :
//1> print "{hero name} is attacking with {hero power}"
// 2> reduce the health of the hero by 30
// 3> Dont allow to attack means dont print (1) if health is less than 10 and print "I am tired"

// create a function heal in this class that will :
//1> print "{hero name} is healing"
// 2> increase the health of the hero by 10



// var a = 5

// let b =10
// const e = 4

// Scoping diff in var let and const


{
//   const x  // garbage value assigned 53453454
//   x=10
//   console.log(x) 
// const c=0
// c=8
// console.log(c)


}


// function d(){
//     var x = 10
//     console.log(x)
// }

// console.log(x)

// const letters = new Set(['a','b','c'])
// console.log(letters)
// letters.add('d')
// console.log(letters)
// letters.forEach((item)=>{
//     console.log(item)
// })
// letters.delete('a')
// console.log(letters)
// console.log(letters.has('b'))
// letters.delete('b')
// console.log(letters)
// console.log(letters.has('b'))
// console.log(letters.size)


// map in es6

// const fruits = new Map([  // data is stored in key value pair
//     ['apple',10],
//     ['banana',20],
//     ['orange',30]
// ])
// console.log(fruits)
// // console.log(fruits.get('apple'))

// fruits.set('mango',40) // set is adding new element
// console.log(fruits)
// fruits.set('apple',40)  // set is updating old element
// console.log(fruits)

// fruits.forEach((value,key)=>{
//     console.log(`The price of ${key} is ${value}`)
// })

// fruits.delete('apple')
// console.log(fruits)

// const fruits = [['apple',10],['banana',20],['orange',30]]
// const mpp = new Map(fruits)
