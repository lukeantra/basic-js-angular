// -----------------------------js day1----------------------------
// ECMAscript: syntax ES6
// Javascript = ECMAscript + Web.api
// Nodejs = ECMAscript + Node.api

//* showing the command: node index.js

//*Primitive Data
//*string number boolean undefined null symbol bigINT


//*examples
// var str = 'abc'; 
// console.log(typeof str);
// console.log(typeof(str));
// var copystr = str;
// console.log(copystr);
// console.log(typeof 'string');
// console.log( typeof 911);
// console.log(typeof true);
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object, but it is a bug of js, is a primitive value.

//* undefined vs null
// *undefined is where no notion of the thing exists; 
// *it has no type, and it's never been referenced before in that scope!!!!
// *null is where the thing is known to exist, but we don't known what the value is.

// *primitive data example
// let a = 5;
// function foo(input){
//     input = 6;
//     console.log(input);
// }
// foo(a); // 6 
// console.log(a); // 5 passing by value not passing by reference

// *a same example
// let b = 5;
// let c = b; // passing by value
// b = 6;
// console.log(b, c);

//------------------------ Object Data -------------------------
// Lets move to non-primitive data, say we have an empty object.

// var obj = {}
// *prototype chain, what is prototype chain? ()
// console.log(obj);

// *not a plain object, instead class object--->??????????
// class myObject {
//     constructor() {

//     }
// }
// var obj2 = new myObject();
// console.log(obj2);
// but you can change/mutate inside of the obj. so just be more clear about the concepts
// const obj = { name:'Dio' }
// obj.name = 'Jojo';
// console.log(obj);
// object define property. With some methods, you can't change it... it is advanced topic

//Q:????---what is the typeof function? --> object, but it will return a funtion??????
// what is the typeof array? -> object
// let arr = [1, 2, 3];
// console.log(typeof(arr));

// var copyobj = obj;

// // passing by reference: arr, function, object
// it wont let you pass reference through the arguments of a function
// var obj = {
//     name: 'Dio',
// }
// function bar(input) {
    
//     input.name = 'Jojo'
//     console.log(input);
    // Q: how about this one????? --> create an new obj but only with the scope
    // input = {name: 'Jojo'} 
    // console.log(input === obj)
    // Q: we changed the reference but why it is not working???
    // js is sometimes wired, it create another variable called input. so the second way is not a good behavior
    // then the first one will get ignored, run line by line, also called interpartor
// }
// bar(obj);
// console.log(obj);


// Q what is the output??
// var X = {foo: 1};
// var output = ( function() {
// delete X.foo;
// return X.foo;
// }
// )();
// console.log(output);


//*type coercion 类型相互转换
//*Type coercion is the process of converting value from one type to another

// console.log(typeof ('0' - '1')); // number
// console.log(true + false); // 1

// Q: we have an interview question:
// var num = 2342342342413;
// var num2 = +(num + '').split('').reverse().join(''); // + ''变成string, 再+变成数字
// console.log(num2);


//* equality == vs. === we have a table to show you

//* comprison table
//* https://dorey.github.io/JavaScript-Equality-Table/ 
//* == compare the values ignore the types, it is also called coercion.
//* but it does not really change the value type in this case.


// we are not sure about it: convert string to num or num to string, I think it depends.
// console.log('1' == 1); // true

//console.log(3 + 4 + "5"); --> 75

// always use === 


// // Q: how to declare a variable in js?
// var vs let vs const
// what is the difference between var and let 

// create a table like this

//             var | let | const | function
// hoisting     y      y      y       y
// init      undefined -      -       
// scope     function block block

// what is hoisting?
// e.g., var = 5 what does it do. within the function, the first line, it will put
// var a = undefined, and then in that line it will be a = 5;
// so hoist is sending the first part (var a) to the top rahter than the whole statement

// function foo() {

//     if (false) {
//         var num = 62;
//     }
//     console.log(num);
// }
// foo();
//-----------------------
// function foo() {
//     var num = undefined;
//      console.log(num);

//     if (false) {
//         var num = 62;
//     }
//     console.log(num);
// }
// foo();



// undefined vs not defined (reference error)
// undefined: you declare a varibale but without assign it. there is no refrence.
// console.log(abcd);
// Q: what if you change keyword var to let 
// Q: let vs const (const cant reassign a value after it is assigned.)





// let and const
// function foo() {

//     if (true) {
//         console.log(num);
//         let/const num = 62;
//     }
//     console.log(num);
// }
// foo();

// function foo(){
//     let y; // ？？？
//     console.log(y);
// }
// foo();

// (function() {
//     console.log(z);
//      let z;
//      console.log(z);
//  }());

// how about function....it will also do hoisting
// console.log(foo);
// function foo(){};
// Ok, let's talk about a very important part, how about const or var a foo function 
// hoisting function is diff with hositing var function, when you are
// arrow funtion just need to be careful, because you can not use the arrow 
// function before you declare it.
// const foo = () => {}
// var foo = () => {}

// overall you will prefer to use let and const rather than var

////////////////////////  oop: Object Oriented Programming ////////////////////


// the old way to doing it before ES6
// function 名字要大写 js的构函常用写法(constructor function)  但是这个是ES6以前的写法 
// function PersonFn(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // // no return 
// // const dio = PersonFn('Dio', 200);
// // console.log(dio);

// const dio = new PersonFn('Dio', 200);
// console.log(dio);

// Q: what does the new keyword do? (constructor)
// something like this, not exactly.

// function PersonFn(name, age) {
//     let obj = {}
//     obj.name = name;
//     obj.age = age;
//     obj.__proto__.constructor = PersonFn;
//     return obj;
// }

// const jojo = new PersonFn('Jojo', 200);
// console.log(dio);

//------------------------------------------------------
// //create 了一个object/class的function：run
// PersonFn.prototype.run = function() {
//     console.log(`${this.name} is running`);
// }


// dio.run();
// const jojo = new PersonFn('Jojo', 18);
// jojo.run();
// //给你看一下proto的东西
// console.log(dio);
// console.log(dio.__proto__);

// // __proto__和 prototype不同的是： __proto__直接用实例来弄
// // __proto__这个东西通过这个chain，有dio传到了PersonFn
// // this stands for dio
// dio.__proto__.run = function() {
//     console.log(`${this.name} is running`);
// }
// //alternatively ！！但是不能写成PersonFn.walk .... 
// jojo.walk = function() {
//     console.log(`${this.name} is running`);
// }
// jojo.walk();

// dio.run();
// const jojo = new PersonFn('Jojo', 18);
// jojo.run();

// console.log(dio.prototype === dio.__proto__);
// Q:how about this one??
// console.log(PersonFn.prototype === dio.__proto__);// true class.prototype or instance.__proto__ 
/*******************************************************/
// another way of inheritance !!introduce the prototype!!
// function PersonFn(name, age) {
//     this.name = name;
//     this.age = age;
//     // this is the instance method
//     this.run = function () {
//         console.log(`${this.name} is running`);
//     }
// }
// but when you using prototype you can not change the properties of the class.

// PersonFn.prototype.walk = function() {
//     console.log(`${this.name} is walking`);
// }

// // the way to create a static/class method.
// PersonFn.jump = function () {
//     console.log(`${this.name} is jumping`);
// }

// const jojo = new PersonFn('Jojo', 18);
// jojo.run();
// jojo.walk();
// PersonFn.jump();


// console.log(PersonFn);
// -----------------------------------------------------------------------------
// // ES6之后的写法  class es5 syntax is wired lets move to es6 syntax
// // javascript does not have class structure just syntax sugar for constructor function
// // JS is not designed for oop but has the similar feature like oop
// class Person {
//     #name;
//     #age;
//     #height;
//     constructor(name, age, height) {
//         this.#name = name;
//         this.#age = age;
//         this.#height = height;
//     }
//     get name() {
//         return this.#name;
//     }
//     set name(newName) {
//         this.#name = newName;
//     }
//     run() {
//         console.log(this.#name + ' is running');
//         // console.log(this.#name, ' is running');
//         // console.log(`${this.#name} is running`);
//     }
// }

// const p = new Person('Dio', 18);
// // get method
// console.log(p.name);
// // set method
// p.name = 'Jojo';
// console.log(p.name);


// // Inheritance ------------------------------------------------

// // extends
// class Employee extends Person {
//     constructor(name, age, company) {
//         super(name, age);
//         this.company = company;
//     }
// }

// // Employee.prototype = Person.prototype;
// // //change the constructor name
// // EmployeeFn.prototype.constructor = EmployeeFn;
// const e = new Employee('Dio',100,'Apple');
// console.log(e);

// // // Go back to es5, what is this call and binding ? (gonna talk about keyword call later)
// function PersonFn(name, age) {
//         this.name = name;
//         this.age = age;
//         // this is the instance method
//         this.run = function () {
//             console.log(`${this.name} is running`);
//         }
//     }
// // super is just a call, that why you can do extends in js
// function Employer(name, age, company) {
//     PersonFn.call(this, name, age);
//     this.company = company;
// }

// const er = new Employer('Dio',100,'Apple');
// console.log(er);



// ----------------poly morphism ------------------------
// 不用讲什么是 poly-morphism 但有人问 就说 . Like a man at the same time is a father, 
// a husband, an employee. So the same person posses !!!different behavior!!!
// in different situations. This is called polymorphism.
// ----------------overloading ------------------------
// // js does not have overload (same name but different params)feature 
// // but it has something called overiding

// so here is a very good example I want to show you guys.
// we have a instance from employee when it calling some function, it always search from function 
// employee (Itsself)first then from person(Parent). 
// // so which means there is an order. instance > class Employee > class Person
// class Person {
//     #name;
//     #age;
//     #height;
//     #salary;
//     constructor(name, age, height, salary) {
//         this.#name = name;
//         this.#age = age;
//         this.#height = height;
//         this.#salary = salary;
//     }
//     get name() {
//         return this.#name;
//     }
//     set name(newName) {
//         this.#name = newName;
//     }
//     run() {
//         console.log(this.#name + ' is running');
//     }

// }

// class Employee extends Person {
//     constructor(name, age, company) {
//         super(name, age);
//         this.company = company;
//     }

//     getSalary() {
//         console.log('no param');
//         return this.salary
//     }
//     // 可以调换顺序看看 console的结果
//     getSalary(baseSalary) {
//         console.log('with param');
//         return this.salary + baseSalary;
//     }

// }
// 两个 subclass employer employee
// class Employer extends Person {
//     constructor(name, age, company, position) {
//         super(name, age);
//         this.company = company;
//         this.postition = position;
//     }
// }

// const er = new Employer('Jojo',100,'Antra', 'officer');
// console.log(er);

// const e = new Employee('Dio', 100, 'Apple', 10000);
// console.log(e.getSalary()); // NaN (0 + undefined) 第一个getsalary直接忽略 因为有第二个

// // the order code prototype chain
// e.getSalary = function(){
//     console.log("hello");
// }
// // from instance to employee to person and overridding to the end of the same name function 
// console.log(e);

// ------------------abstraction ------------------------------
// (如果有人问的话) what is the difference between interface(multiple level) and abstract class (one level) in js??? 
// // js
// abstract class is for the inheritance but no instance. However, in js we dont have this kinda of concept
// js does not have a key word abstract private or public, we you face that in the typescript which will
// talked about in the angular traning.




// -------------------for loop------------------------------------------
// const arr = [1, 2, 3];
// console.log(arr);

// *key-value pairs are properties such as 0: 1, 1: 2, and 2: 3

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (let ele of arr) {
//     console.log(ele);
// }

// for (const index in arr) {
//     console.log(arr[index]);
// }

// // we can construct an object
// const obj = {
//     name: 'Dio',
//     age: 200
// }
// // what is the difference between this two: obj.name vs. obj['name']
// // [] is for a variable, but . is for a given key or more like a sepecific key
// console.log(obj.name, obj['name']);
// // another example
// for (const key in obj) {
//     //you cant do things like: obj.key, becuase key is a variable
//     console.log(key, obj[key]);
// }

// //forEach building method-------- but it is not orginal for loop ----------
// Q: where does this forEach come from ? (from the array class, foreach is a method of prototype)
// //forEach cant use break and continune inside of the functions...
// const arr = [1, 2, 3, 4, 5];
//function(ele) is a callback funtion
// arr.forEach(function(ele) {
//     console.log(ele);
// });

// // create my forEach
// // Q: what is the arguments in forEach? what is the callback function?
// // Q: do you know waht the this mean??? we are going to talk about this later...
// Array.prototype.myforEach = function (callbackfn) {

//     for (let i = 0; i < this.length; i++) {
//         console.log(this);
//         callbackfn(this[i]);
//     }
// }
// arr.myforEach(function (ele) {
//     console.log(ele);
// })
// //what is "this"?
// // this will target to the instace itself... in this situation, it is arr...

// // !!!!the difference between forEach and Map!!!!
// // map always generate new array. Below see the examples
// console.log( arr.forEach(function(ele) {
//     console.log(ele);
// }))
// console.log( arr.map(function(ele) {
//     console.log(ele);
// }))

//create my Map
// Array.prototype.myMap = function (callbackfn) {
//     const arr = []
//     for (let i = 0; i < this.length; i++) {

//         arr.push(callbackfn(this[i]))
//     }
//     return arr
// }
// const newarr = arr.myMap(function(ele) {
//     if (ele !== 4){
//         return ele + 2;
//     }
// })

// console.log(newarr);

// --------forEach arguments: current ele, current index, original array-----------
// // ele is required , but other two are not required.
// const arr = [100, 200, 300];
// arr.forEach(function(ele, i, array){
//     array[i] = ele + 1;
//     console.log(ele, i, array, arr);
//     console.log(arr === array);
// })
// console.log(arr);
//// since this arr can be changed instead of creating a new array. 
////try to avoid involve this array when doing things 
//// e.g. array[1] = 2000;

//同理 如果有三个参数的 myforEach
// Array.prototype.myforEach = function (callbackfn) {

//     for (let i = 0; i < this.length; i++) {
//         //告诉你 callback function里面的参数 this[i]。格式就这样！
//         callbackfn(this[i], i, this);
//     }
// }
// arr.myforEach(function(ele,i,array){
//     array[i] = ele + 1;
// })
// console.log(arr);
// 同理 如果有三个参数的 Map 省略

// const newarr = arr.filter(function(ele, i, array){
//     return ele > 3
// })
// console.log(newarr)

//build up your filter
// Array.prototype.myFilter = function (callbackfn) {
//     const arr = []
//     for (let i = 0; i < this.length; i++) {
//         if (callbackfn(this[i]))
//             arr.push(this[i])
//     }
//     return arr;
// }

// const newarr = arr.myFilter(function(ele){
//     return ele > 3
// })
// console.log(newarr)

// // reduce() has 4 parameters. The last one is an initial value.

// //reducer is the callback function for reduce. Always save the previous value for new iteration

// const reducer = function(acc, cur, i, array) {   
//     return acc + cur + cur
// }
// //reduce 里面其实还是一个function('') 就多了个initial acc参数
// console.log(strarr.reduce(reducer,''))
// // build up my Reduce with ininial Value...
// Array.prototype.myReduce = function (callbackfn, initVal) {
//     // you cant make it as a const, otherwise the value wont be changed.
//     let value = initVal;
//     for (let i = 0; i < this.length; i++) {
//         value = callbackfn(value, this[i], i, this);
//     }
//     return value;
// }
// const str ='abc';
// const strarr = str.split('');
// biuld up my Reduce no matter it has initial or not
// Array.prototype.myReduce = function (...args) {
//     // let [ acc, index ] = args.length === 1
//     //     ? [ this[0], 1 ]
//     //     : [ args[1], 0 ];
// //another way 
//     let acc = this[0];
//     let index = 1;
//     if (args.length > 1){
//         acc = args[1]
//         index = 0;
//     }
//     for (let i = index; i < this.length; i++) {
//         acc = args[0](acc, this[i], i, this);
//     }
//     return acc;
// }

// //console.log(strarr.myReduce((acc, cur)=>acc+cur+cur, ''))
// console.log(strarr.myReduce(reducer,''))

//---------------------------  destructure ---------------------------------
// // Q: we have something called constructor. does any body know what the destructure is in js? 
// // It creates a pattern that describes the kind of value you are expecting and makes the assignment. 
// // Array destructuring uses position.

// const [first, second, third] = ["a", "b", "c"];
// console.log(first, third);

// const obj ={
//     name: "Jojo",
//     age: 18
// }

// //before es6, you can only do things like this for the assignment
// const name = obj.name;
// const theage = obj.age;
// console.log(name, theage);

// this is the destructure: a shorter syntax, you will find key and value in the 
// const {name, age} = obj;
// lets change the sequence, and it wont affect anything, becasue the obj has key value pair.
// const {age, name} = obj;
// console.log(name, age);


// // in my mind, destructuring will reduce some code. Or simplifies the code.
// // Also you can add some properties

// const {age, name, middleName, LastName = "Dio"} = obj;
// console.log(name, age, middleName, LastName);

// // lets see if I do this: 
// const {key, value} = obj; // undefined
// // const {key = "apple", value = "male"} = obj; // add new properties
// console.log(key, value);

// e.g.

// const {links} = {
//     id: 1,
//     name: 'David Dong',
//     links: [
//         { name: 'wechat',       link: 'wechat.com'      },
//         { name: 'apple',        link: 'apple.com'       },
//         { name: 'cnn',          link: 'cnn.com'         },
//         { name: 'fox',          link: 'fox.com'         },
//         { name: 'hbo',          link: 'hbo.com'         },
//     ]
// };
// // // before es6
// console.log(links.find((ele) => ele.name === 'cnn').link);
// // // after es6
// console.log(links.find(({name}) => name === 'cnn').link);
// // console.log(links[1].name);

//------------------------------js day3----------------------------------------------------
//--------------------------- spread operator vs. rest parameter ---------------------------
// // rest parameter
// // argument is an object (array like) to take care of all the parameters
// Q: what does array like mean ? you can not use something like forEach, filter...
//// Such as HTML.collection is also array like.
// function foo(...args) {
//     console.log(arguments);
//     console.log(arguments[4]);
//     console.log(...args);
//     console.log(args);
// }
// foo(1, 2, 3, 4, "abc");

// //another this example
// function foo(num, ...args) {
//     console.log(...args);
//     console.log(args);
// }
// foo(1, 2, 3, 4, "abc");

// // i did see some students do something like this during the interveiw
// //  function foo([...args]){} lets try it

// //spread operator 
// // Q: what is spread oprator? 
// // Q: waht does ... mean?  (copy, is it shallow copy or deep copy?)
// const arr = [1, 2, 3];
// const arr1 =[...arr, 4, 5];
// const arr2 = [...arr, 4, 5];
// console.log(arr1, arr2);

// // // their references are not the same
// console.log(arr1 === arr2);
// // // Q: how about this one?
// console.log(arr1 == arr2); // false
// // what does [] do? (Creating a new array and get a new reference, same thing for {})

// arr1 = [1, 2, 3];
// arr2 = arr1;
// console.log(arr1 === arr2);

// const obj ={
//     name: "Jojo", age: 18
// }
// const obj1 = {...obj};
// console.log(obj1);

// const str ='abcabc';
// const newstr = str.split('') // ['a', 'b', 'c']
// const set = new Set(newstr);
// console.log(set);

// --------------------------------object copy----------------------------------
// // shallow copy : share the same reference. 
// // In other words, the memory addresses are the same
// const obj = {name: 'Jojo', age: 18}
// // just copy the refence 
// const obj1 = obj;
// obj1.name = 'Dio'; // it will change
// console.log(obj);



// // Q: how about spread operator (only deep copy the first level)

// // (The spread operator makes deep copies of data if the data is not nested.)

// const obj = {
//     name: 'Jojo',
//     age: 18,
//     links: [1, 2, 3],
//     date: new Date(), // new Data(obj.date)
//     foo: function() {
//         console.log('this is foo')
//     }
// };
// only deep copy the first level for the reference of the object,
// but for the seond level (e.g. links), it will share the reference for links
// const obj2 = {...obj};
// console.log(obj == obj2); // == to cheack the reference 
// // // also you can check the reference for links
// console.log(obj.links == obj2.links);
// obj2.name = 'Dio'; // does not effect
// console.log(obj);   
// obj2.links = [100, 200, 300];
// console.log(obj);
// obj2.links[0] = 100;
// console.log(obj);



// // 第一个方法 deep copy 
// // change the original obj to a string and then change it back  
// console.log(obj, JSON.parse(JSON.stringify(obj)));
// const obj2 = JSON.parse(JSON.stringify(obj));
// console.log(obj == obj2); // == to cheack the reference 
// // also you can check the reference for links
// console.log(obj.links == obj2.links);

// //the cons: it cant not change the function to a string. Lose the function
// // also it has a issue for date.
// console.log(obj2);




//----------------------------------iife----------------------------------------
// // The definition (save some codes, create private scope)

// (function() {
//     return console.log(5)
// }())
// (function() {
//     return console.log(5)
// })()

// // use iife to create closure ????? ---> work together with closure

//--------------------------------closure------------------------------------
// // example from MDN website
// // definition
// function init() {
//     var name = 'Mozilla'; // name is a local variable created by init
//     function displayName() { // displayName() is the inner function, a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();
// //  This is a closure! In this case, myFunc is a reference 
// //  to the instance of the function displayName() that is created when makeFunc is run.
// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }

//   var myFunc = makeFunc();
//   myFunc();
//////////
// //change samething as last one
//   function makeFunc() {
//     var name = 'Mozilla';
//     return function() {
//       console.log(name);
//     } 
//   }

//   var myFunc = makeFunc();
//   myFunc();

// //a tricky one
// function makeAdder(x) {
//     // 这时候funtion(y)只是一个变量。也不能给function加名字 and一定要有这个function，要不然 y就undefined
//     return function(y) {
//       return x + y;
//     };

// }
// // // This is a closure! var add = makeAdder() -> it shares same body from function makeAdder(x)
// // // then it refers to "instance" funtion(y)!!!
// var add = makeAdder(5); 
// console.log(add(2)); 
// // class practice num之后就不能返回所加的值了，显示 out of limits
// const target = (a, b) => console.log(a + b);
// const fn = limitedFunction(2, target);

// function limitedFunction(num, cb) {
//     let counter = num;
//     return function(...rest){
//         if (counter > 0){  
//             counter -= 1;      
//             return cb(...rest);        
//         } else{
//         console.log("out of limits");
//         }
//     }  
// }
// fn(4,5);
// fn(4,5);
// fn(4,5);
// fn(4,5);

// ----------------------------js day4-----------------------------------
//-------------------------------this-------------------------------------
// // Q: what is this keyword? (window)
// console.log(this);
// // this is also window (bec), which is gloabl environment
// (function() {
//     console.log(this);
// })();

// const myObj = {
//     name: 'Dio',
//     age: 18,

//     foo: function() {
//         console.log(this); // this goes to obj

//         const bar = function() {
//             console.log(this);// this will goes to Window Global. Because it is not belong to myobj
//             // in other words, this does not know the target in the first place, then it will target to window.
//         }
//         bar(); 
//     }
// }
// myObj.foo();


// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     showThis() {
//         console.log(this);
//     }
//     // no instace needed
//     static statisShowThis() {
//         console.log(this);
//     }
// }
// // no static has to creat an instance
// const p = new Person('Jojo');
// p.showThis();
// Person.statisShowThis();

// // Lets make a summary. Three ways to use this keyword
// // 1. if "this" keyword in the function, it will target to global object
// // 2. if the function belongs to an object, the "this" keyword will target to the object.
// // 3.1 if "this" is in the class, it will target to the instance. 
// // 3.2 if you use static, it will target to the class


//-----------------------------call bind---------------------------------
// const obj = {
//     name: 'Dio',
//     age: 18,

//     foo: function() {
//         console.log(this); 

//         (function() {
//             console.log(this);
//         }).call(this);  ///// confusing!!!
//         // bind 和下面的一模一样
//         const bar = function(){
//             console.log(this);
//         }
//         const newbar = bar.bind(this);
//         newbar(); 
//     }
// }
// obj.foo();

//------------------------------------call apply bind -----------------------
// //bind
// const obj ={
//     pi: 3.14,
//     getPi() {
//         return this.pi;
//     }
// }
// function getPerimeter(radius) {
//     console.log(this.getPi() * 2 * radius);
// }

// getPerimeter(20);
// //  bind involve one arg, -->the target you want to target
// const newGetPerimeter = getPerimeter.bind(obj); // -->lazyloading: you cant change bind to call
// newGetPerimeter(20);

// // lady loading here is hold or wait until someone use this method.

//call apply   ------> they are eagerloading, you need to have declare first
// const obj ={
//     area: 1000,
//     getArea() {
//         return this.area
//     }
// }
// function getNum(num0, num1, num2) {
//     console.log(this.getArea(), num0, num1, num2);
// }

// getNum.call(obj, 1, 2, 3);
// // // apply is also eager loading but only two args: obj and array
// getNum.apply(obj, [1, 2, 3]);



// ES6 arrow function class let const promise
//--------------------------------------arrow function  ES6 ----------------------
// const foo = a => b => a + b;

// function bar (){
//     console.log(arguments);
// }

// const foo = (...args) => console.log(args);

// console.log(foo());

//--------------------------------------currying-------------------------
// foo(4)(5);

// const callback1 = a => a + 2;
// const callback2 = b => b * 2;
// const callback3 = c => c / 3;

// // use whatever callback you want...
// console.log(runAll(callback1, callback1, callback1)(10));


// function runAll(...args) {
//     // 由参数的话 格式就这样 return function 没法改
//     return function (num) {
//         let res = num;
//         for (let i in args){
//             res =args[i](res);
//         }
// // for (let ele of args) {
// // res = ele(res);
// // }
//         return res;
//       }  
// }


// // using reduce is neater!
// function runAll(...args) {

//     return function (num) {
//         return args.reduce((acc, cb) => cb(acc), num);
//return args.reduce((acc, cur) => cur(acc), num);
//     }
// }

// this is also currying.
// const arr = [1, 2, 3];

// const bar = (num) => {
//     return ele => {
//         console.log(ele + num);
//     }
// }

// arr.forEach(bar(12));

//-------------------------------------Event loop------------------------------
// //Q: what is event loop??? 
// //let us do an example first

// // setTimeout(()=>{console.log(1)}, 3000); 第一个par必须是个function 不能只是console.log(...)
// console.log(0);
// // what does this 1000 mean ?
// setTimeout(function(){
//     console.log(1);
// }, 1000)
// console.log(2);
// setTimeout(function(){
//     console.log(3);
// }, 2000)
// console.log(4);

// // Then add this thing: Event loop: Call stack | Async Api | Task Queue
// // Q: what does 1000s mean??? (It means !!!after 1s send  it to task queue!!! NOT callback)
// // For example, if you have infinite loop, you may does not have chance to call console.log(1)
// Q: So when to call the task queue? (when call stack is empty)

// //an interview question:
// // What is the output??? (after 2s print 5)
// setTimeout helps to send the foo into task queue after i*1000 seconds, but i = 5 will run first
// let i = 2;
// function foo() {
//     console.log(i)
// }
// setTimeout(foo, i*1000)
// i = 5;
// //try using let and see the result 一定要try这个  --> 结果还是5

// // Q: how about like this setTimeout(foo(), i*1000)

// function foo() {
//     console.log(1);
// }
// console.log(foo);
// console.log(foo());

// //Q: how about this one?  async api acts like a theshold/transfer station. check it goes to task queue or not 
// after how many seconds
//  function foo() {
//     for (var i = 1; i < 5 ; i++){
//         setTimeout(() => console.log(i),i*1000);
//     }
//     console.log('abc');
//  }

// foo();


// // Can somebody explain how it works? 
// // call stack is first in last out but it is about function invoke function or something, not line by line.
// // (dont get confused about stack!!!)one line code, will go in and go out immediately.

// // async api, or web api:  hold的功能 时间到了 就push到task queue

// //等到call stack is empty (很快就empty了 一起全走了)/ OR you can say the sync function has finished

// // task queue, message queue (queue) 先进先出 。
// //The task queue will Wait for call stack is empty （一般很快都empty）, after call stack is empty,
// //the task queue will push all the items into call stack ---> This is event loop! 
// //为什么要回到stack， 因为回到stack才会consloe 东西 （所以这就叫做 loop)


// //But when you are using "let" the time will help to hold the i.....

// Another way to change it 
// for (var i = 0; i < 5 ; i ++){

//     (function (v){
//         setTimeout(() => { console.log(v) }, v*1000);
//     })(i);

// }

// //interview question
// const first = [
//     { userid: 2, name: 'Velen' },
//     { userid: 56, name: 'Illidan' },
//     { userid: 23, name: 'Muradin' },
//     { userid: 12, name: 'Sylvanas' },
//     { userid: 44, name: 'Cenarius' },
//     { userid: 4, name: 'Gul\'Dan'},
// ];
// const second = [
//     { userid: 2, role: 'Mage' },
//     { userid: 4, role: 'Worlock' },
//     { userid: 56, role: 'Demon Hunter' },
//     { userid: 66, role: 'Druid' },
//     { userid: 87, role: 'Shaman' },
//     { userid: 12, role: 'Hunter' },
// ];

// looking for
// solution (firstarr, secondarr)
// [
//     { userid: 2, name: 'Velen', role: 'Mage'},
//     { userid: 4, name: 'Gul\'Dan', role: 'Worlock' },
//     { userid: 12,  name: 'Sylvanas', role: 'Hunter' },
//     { userid: 23, name: 'Muradin', role: null},
//     ...
// ];


// function solution (firstarr, secondarr) {  
//     // const arr = firstarr.contact(secondarr);
//     const arr = [...firstarr, ...secondarr];
//     // the most important is to create a map
//     //override the key again and again
//     const map = {};
//     arr.forEach(ele => {
//         map[ele.userid] = {
//             ...{name: null, role:null},
//             //覆盖作用, Merge two maps. The last repeated key stay.
//             // 这个是指重复的id，也就是第二次出现的
//             ...map[ele.userid],
//             // 这个就是当前的
//             ...ele    
//         };

//     })
//     console.log(map[2]);
//     return map;

// }

// console.log(solution(first, second));


//-----------------------JS day5 -----------------------------------------------
//--------callback function & callback hell & Promise & My Promise--------------------
// // callback function; callback hell
// const foo = () => console.log('foo showup');

// const randomNum = () => Math.floor((Math.random() * 6));

// const callFnInRandomTime = (callback) => {
//     const timer = randomNum();
//     console.log(`${timer}s`);

//     setTimeout(callback, timer * 1000);
// }

// // callFnInRandomTime(foo);
// // // introduce call back hell
// // callFnInRandomTime(() => {
// //     callFnInRandomTime(foo);
// // });
// callFnInRandomTime(() => {
//     callFnInRandomTime(() => {
//         callFnInRandomTime(() => {
//             callFnInRandomTime(() => {
//                 callFnInRandomTime(() => {
//                     callFnInRandomTime(() => {
//                         callFnInRandomTime(() => {
//                             callFnInRandomTime(foo);
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

// -------------------------XHR----------------------------------

// // Q: do you know what is XHR? (XML HttpRequest)
// const getToDoFormJsonPlaceHolder = (id, callback) => {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       // Typical action to be performed when the document is ready:
//       callback(JSON.parse(xhttp.response)); // from string to js object
//     }
//   };
//   xhttp.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
//   xhttp.send();
// }
// // Q: what is JSON? -->data format
// // Q: Why does JSON is popular? --> js natively support JSON & XML is not very readable


// const print = (ele) => {
//   console.log(ele);
// }
// //you can not control the time when fetching the data. 
// // it is like settimeout(() => {}, but the httprequest time is random. Always changed )
// // so lets try to run it. (Everytime it will respond differently)
// getToDoFormJsonPlaceHolder(4, print);
// getToDoFormJsonPlaceHolder(15, print);
// getToDoFormJsonPlaceHolder(78, print);

// //

// getToDoFormJsonPlaceHolder(4, (data) => {print(data)});

// getToDoFormJsonPlaceHolder(4, (data) => {
//     print(data);
//     getToDoFormJsonPlaceHolder(16, (data) => {
//         print(data);
//     }); 
// });

//-------------------------------------Promise & My Promise -------------------------
// // lets give an example of promise:

// const promise = new Promise((resolve, reject) => {
// console.log('hello');
// });
// // // there is no need to have const promise 
// // // in other words, you dont need to creat an instance of promise
// new Promise((resolve, reject) => {
//     console.log('hello');
//     });
// // //three build in methods: then(),catch(),finally()

// class MyPromise {
//     constructor(executor){
//         executor();
//     }
//     then () {}
//     //catch()...
//     //finally()...
// }


// //resolve and reject are two callback functions. 

// new Promise((resolve, reject) => {
//     console.log('hello');
//     resolve('world');

// // resolve will hold some data, and transfer the data to .then()
// // in other words, the .then() will always looking for resolve
// }).then((data)=>{
//     console.log(data);
//     return 'test1';
// }).then((data)=>{
//     console.log(data);
//     return 'test2';
// })

// using promise example
// const getToDoFormJsonPlaceHolder = (id) => {
//     return new Promise((resolve,reject) => {
//         var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//        // Typical action to be performed when the document is ready:
//        resolve(JSON.parse(xhttp.response));
//     }
// };
// xhttp.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
// xhttp.send();
//     }) 
// }

// const myprint = (ele) => {
//     console.log(ele);
// }
// //this is callback hell as well, and you never want to write your promise in this way.
// getToDoFormJsonPlaceHolder(4)
//     .then(data =>{
//         myprint(data); // or you can say console.log(data)
//         return getToDoFormJsonPlaceHolder(15)
//         .then(data =>{
//             myprint(data);
//             return getToDoFormJsonPlaceHolder(78)
//             .then(data =>{
//                 myprint(data);
//              })
//          })
//     })
// But this way is much better, and it avoid callback hell style
// getToDoFormJsonPlaceHolder(4)
//     .then(data => {
//         myprint(data); 
//         return getToDoFormJsonPlaceHolder(15);
//     }) // close it everytime, no more nesting
//     .then(data => {
//         myprint(data); 
//         return getToDoFormJsonPlaceHolder(78);
//     })
//     .then(data => {
//         myprint(data); 
//     })

// //async await,  a lot of online toturials are using this way but ... syntax sugar...
// (async () => {
//         const todo5 = await getToDoFormJsonPlaceHolder(5);
//         console.log(todo5);
  
// })();

// // 
// (async () => {
//     // the way to catch error for async await
//     try {
//         const todo5 = await getToDoFormJsonPlaceHolder(5);
//         console.log(todo5);

//         const todo12 = await getToDoFormJsonPlaceHolder(12);
//         console.log(todo12);

//         const todo78 = await getToDoFormJsonPlaceHolder(78);
//         console.log(todo78);
//     } catch (error) {
//         console.log(error);
//     }
// })();

// // what the syntax difference between promise and async await, go to the following link:
// // Let us take a look
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

// //Build your MyPromise

// // Mypromise  interview question for fb and amazon interview
// class MyPromise{
//     // use an array to hold the callback method...
//     thencallbackqueue = [];

//     //make your life easier.
//     constructor(executor){
//         // console.log(this);
//         executor(this.resolve.bind(this), this.reject);
//     }
//     // same thing to bind when you use => function....
//     //resdata is to keep collecting data
//     resolve(resData) {
//         // this "this" is undefined..since it is a function from constructor. 
//         //So needs to add a bind in constructor.
//         // console.log(this);
//         setTimeout(() => {
//           while(this.thencallbackqueue.length) {
//             const cb = this.thencallbackqueue.shift();
//             cb(resData);
//           }
//         }, 0);

//     }
//     reject = () => {
//         console.log('reject');
//     }
//     //.then 就是hold callback function... 所以你就avoid callback hell.
//     then(thencbfn){
//       this.thencallbackqueue.push(thencbfn);
//     }
//     catch(){

//     }
// }
// // 第一个版本 story line：先执行 promise，console.log, 然后 resolve，因为是setTimeout所以 hold data在async api。
// // 再执行 .then()， push cb 到queue，这时候call stack空了 再执行async api: shift the hold data
// new MyPromise((resolve, reject) => {
//     console.log('hello1');
//     // use resolve to hold the data: hello2!!!!!!!!! 
//     resolve('hello2');
// }).then((data) => {
//     console.log(data);
// })

// // 第二个版本 可以继续.then()
// class MyPromise {
//   // use an array to hold the callback method...
//   thencallbackqueue = [];
//   currnetData = undefined;

//   //make your life easier,换汤不换药。。
//   constructor(executor) {
//     // console.log(this);
//     executor(this.resolve.bind(this), this.reject);
//   }
//   // same thing to bind when you use => function....
//   //resdata is to keep collecting data
//   resolve(resData) {
//     // this "this" is undefined..since it is a function from constructor. 
//     //So needs to add a bind in constructor.
//     // console.log(this);
//     setTimeout(() => {
//       this.currnetData = resData;
//       while (this.thencallbackqueue.length) {
//         const cb = this.thencallbackqueue.shift();
//         this.currnetData = cb(this.currnetData);
//       }
//     }, 0);

//   }
//   reject = () => {
//     console.log('reject');
//   }
//   //.then 就是hold callback function... 所以你就avoid callback hell.
//   then(thencbfn) {
//     this.thencallbackqueue.push(thencbfn);
//     //trasnfer the entire logic
//     return this;
//   }
//   catch() {

//   }
// }
// //第二个版本 storyline：.then()先push push...，resolve()的setTimeout  再shift shift shift...
// //看notebook 知识逻辑点
// new MyPromise((resolve, reject) => {
//   // use resolve to hold the data: hello2!!!!!!!!! 
//   resolve('hello1');
// }).then((data) => {
//   console.log(data);
//   return 'hello2';
// }).then((data) => {
//   console.log(data);
//   return 'hello3';
// }).then((data) => {
//   console.log(data);
// })

// // 第3, 4个版本 
// class MyPromise {
//   // use an array to hold the callback method...
//   thencallbackqueue = [];
//   catchcallbackqueue = [];
//   currnetData = undefined;
//   promiseState = 'pending';

//   constructor(executor) {
//     try {
//       executor(this.resolve.bind(this), this.reject);
//     } catch (error) {
//       this.reject(error);      
//     }

//   }

//   resolve = (resData) => {
//     setTimeout(() => {
//       try {
//               this.promiseState = 'fulfilled';
//       this.currnetData = resData;
//       while (this.thencallbackqueue.length) {
//         const cb = this.thencallbackqueue.shift();

//         if (this.currnetData instanceof MyPromise) {
//           this.currnetData.then(data => {
//             this.currnetData = cb(data);
//           });
//         } else {
//           this.currnetData = cb(this.currnetData);
//         }
//       }

//       } catch (error) {
//         this.reject(error);
//       }
//     }, 0);

//   }

//   reject = (rejData) => {
//     this.promiseState = 'rejected';
//     setTimeout(() => {    
//       const cb = this.catchcallbackqueue.shift();
//       cb(rejData);
//     }, 0);
//   }

//   then(thencbfn) {
//     if (this.promiseState === 'pending') {
//       this.thencallbackqueue.push(thencbfn);
//     }

//     return this;
//   }
//   catch(thencbfn) {
//     this.catchcallbackqueue.push(thencbfn);
//     return this;
//   }
//   static resolve(resData) {
//     return new MyPromise((res, _) => {
//       res(resData);
//     });
//   }
//   static reject(rejData) {
//     return new MyPromise((_, rej) => {
//       rej(rejData);
//     });
//   }
//   static all(promiseArr) {
//     const resolveArr = new Array(promiseArr.length);
//     let counter = 0;
//     return new MyPromise((res, rej) => {
//       promiseArr.forEach((ele, i) => {
//         if (ele instanceof MyPromise) {
//           ele.then(data => {
//             counter++;
//             resolveArr[i] = data;
//             if (counter === resolveArr.length) {
//               res(resolveArr);
//             }
//           });
//         } else {
//           resolveArr[i] = ele;
//           if (counter === resolveArr.length) {
//             res(resolveArr);
//           }
//         }
//       }); 
//       res(resolveArr);
//     });
//   }
// }
// //第4个版本 终极版
// MyPromise.resolve(3).then((data) => console.log(data));

// const promise1 = MyPromise.resolve(3);
// const promise2 = 42;
// const promise3 = new MyPromise((resolve, reject) => {
//   // resolve('foo');
//   setTimeout(resolve, 100, 'foo');
// })
// // promise.all()里面会有async 乱序
// MyPromise.all([promise1, promise2, promise3]).then(values => {
//   console.log(values);

// });


// const getRandomTime = () => Math.floor(Math.random() * 6);

// new MyPromise((resolve, reject) => {
//   const timer = getRandomTime();
//   console.log(`${timer}s`);
//   if (timer < 3) {
//     resolve(console.log(a));
//   } else {
//     reject('err');
//   }
// })
//   .then(data => {
//     console.log(data);
//     return 1;
//   })
//   .catch(err => {
//     console.log(err);
//   })

// //第三个版本 storyline：.then()先push push...，collect all the logic
// //resolve()的setTimeout  先等着 再shift shift shift...
// // the real promise will use the microtask queue.
// //具体的currentdata怎么连接的不知道。
// new MyPromise((resolve, reject) => {
//   console.log('hello1');

//   resolve('hello2');
// })
//   .then(data => {
//     console.log(data);
//     return new MyPromise((res, rej) => {
//       res('hello3');
//     });
//   })
//   .then(data => {
//     console.log(data);
//   });

// -----------------------------js day6---------------------------
//-----------------------------MyFetch----------------------------
// const myFetch = (url, options) => {
//     let method = options && options.method
//         ? options.method
//         : 'GET';

//     return new Promise((resolve, reject) => {
//         const xhttp = new XMLHttpRequest();
//         xhttp.open(method, url);

//         if (options && options.headers) {
//             Object.keys(options.headers).forEach(key => {
//                 xhttp.setRequestHeader(key, options.headers[key]);
//             });
//         }

//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status >= 200 && this.status < 300) {
//                 console.log(this.status);
//                 resolve({
//                     json() {
//                         return JSON.parse(xhttp.response);
//                     }
//                 }); 
//             } else if (this.status < 200 && this.status >= 300) {
//                 reject({ errorStatus: this.status});
//             }
//         };

//         options && options.body 
//             ? xhttp.send(options.body)
//             : xhttp.send();
//     });
// }
// // get
// myFetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// // post
// myFetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// // put
// myFetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// // // patch
// myFetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PATCH',
//     body: JSON.stringify({
//         title: 'foo',
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// // delete
// myFetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
// });

// ~~~~~~~~~~~~~~~~~~~ interview question ~~~~~~~~~~~~~~~~~~~
// For example:
// If,
// const add = (a, b) => a + b
// const multiplyByTwo = (c) => c * 2
// Then,
// example 1 await promisifyFunction(add)(1, 1) should return 2
// example 2 await promisifyFunction(multiplyByTwo)(3).then(val => val + 1) should return 7

// function promisifyFunction(callback) {
//   return function(...args) {
//     const data = callback(...args);
//     return new Promise((resolve, reject) => {
//       resolve(data);
//     })
//   }
// }

// test cases

// (async () => {
//   const res1 = await promisifyFunction(add)(1, 1);
//   const res2 = await promisifyFunction(multiplyByTwo)(3);
//   console.log(res1, res2);
// })();
