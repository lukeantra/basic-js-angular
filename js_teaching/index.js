// -----------------------------Day1----------------------------
// ECMAscript: syntax ES6 2015
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
// console.log(typeof null); // object, but it is a bug of js, is a primitive value.

//! ---------------ignore this ----------------------
// *undefined vs null

// -------------------------------------

// *primitive data example // passing by value means share the value.
// 1.复制变量的值
// 2.申请一个新的内存地址保存复制的值
// 3.把复制的值的新地址赋给新的变量
// 所以两个变量的值只是在数值上相等，其实在内存中是两个地址，是互相独立的存在
// 因此其中一个发生改变时并不会影响到另外一个
// let a = 5;
// function foo(input){
//     input = 6;
// }
// foo(a); // 6
// console.log(a); // 5 passing by value not passing by reference
// console.log(input); //? not defined: because input go to garbage collection

// *a same example // passing by value
// let b = 5;
// let c = b;
// b = 6;
// console.log(b, c); // 6, 5

//------------------------ Object Data/ Reference data -------------------------
// Array and object
// Lets move to non-primitive data, say we have an empty object.

// -----------------------------object data instead of primitive ------------------------
// * passing by reference: arr, function, object
// //? they share the reference
// var obj = {
//     name: 'Dio',
// }

// function bar(input) {
// case1
//     input.name = 'Jojo';
//     console.log(input);
// case2
//      input = {name: 'Jojo'}
//      console.log(input === obj)
// !  Q: we changed the reference but why it is not working??? it will create another input
// }

// bar(obj);
// console.log(obj); //

// ! If you still dont understand: https://www.javascripttutorial.net/javascript-pass-by-value/#:~:text=JavaScript%20pass%2Dby%2Dvalue%20or%20pass%2Dby%2Dreference&text=It%20means%20that%20JavaScript%20copies,variables%20outside%20of%20the%20function.
//---------------------------------------------------

// ------------------using new key word to create an object, you will use a lot like this----------------------------------------
// class Todo {
//     constructor(title, id) {
//         this.title = title;
//         this.id  = id;
//     }
// }
// var obj2 = new Todo('hello world', 1); // new is the key!!!
// console.log(obj2);

// but you can change/mutate inside of the obj. so just be more clear about the concepts
// const obj = { name:'Dio' }
// obj.name = 'Jojo';
// console.log(obj);
// object define property. With some methods, you can't change it... it is advanced topic

// *Q:????---what is the typeof function? --> object, but it will return a funtion??????
// * JavaScript doesn’t have a function data type but when we find the data type of a function using
// *the typeof operator, we find that it returns a function. This is because a function is an object
// *in JavaScript. Ideally the data type of a function should return an object but instead, it returns a function.
// what is the typeof array? -> object
// let arr = [1, 2, 3];
// console.log(typeof(arr));

//! ignore this one ...
// Q what is the output??
// var X = {foo: 1};
// var output = ( function() {
// delete X.foo;
// return X.foo;
// }
// )();
// console.log(output);
//question------------------------------------------------------------------
//
// obj vs map--> syntax difference
// const a = {age: 12};
// const b = {name: 'tt'};
// const c = {};
// console.log(a);
//*arr[object Object]强转  // arr[something] 强转
//* [object Object] is just a string representation, not what the object actually looks like. （bingo）
// c[a] = 456;
// c[b] = 745;
// console.log(c);
// console.log(c[a], c[b]);

// const a = new Map();
// const b = new Map();

// const c = new Map();

// c.set(a, 456);
// c.set(b, 678)
// console.log(c.get(a), c.get(b));
//?------------------------------coercion----------------------------------------

//*type coercion 类型相互转换
//*Type coercion is the process of converting value from one type to another

// console.log(typeof ('0' - '1')); // number
// console.log(true + false); // 1
// console.log(3 + 4 + "5"); // 75 string
// console.log(1 - '2'); // -1
// console.log(typeof(1 - '2'))
// console.log('2' - 1); // 1
// console.log(typeof('2' - 1))

// Q: we have an interview question:
// var num = 2342342342413;
// var num2 = +(num + '').split('').reverse().join(''); // + ''变成string, 再+变成数字
// console.log(num2);

//?--------------------------------- == vs. === -------------------------------------------

//* == compare the values ignore the types, it is also called coercion.
//* but it does not really change the value type in this case.

// we are not sure about it: convert string to num or num to string, I think it depends.
// console.log('1' == 1); // true
// console.log("" == false) // ture
// console.log("" === false) // false

// always use ===

//* comprison table
//* https://dorey.github.io/JavaScript-Equality-Table/

//?----------------------var vs let  vs const---------------

// * Q: how to declare a variable in js?
// var vs let vs const
// Q: what is the difference between var and let?

// create a table like this

//             var | let | const | function
// hoisting     y      y      y       y
// init      undefined -      -
// scope     function block block

// what is hoisting?
// e.g., var a = 5 what does it do. within the function, the first line, it will put
// var a = undefined, and then in that line it will be a = 5;
// so hoisting is sending the first part (var a) to the top of the scope

// function foo() {

//     if (false) {
//         var num = 62;
//     }
//     console.log(num);
// }

// foo();
//-----------和下面那个一样的---------------------
// function foo() {
//     // var num = undefined;
//      console.log(num);

//     if (false) {
//         var num = 62;
//     }
//     console.log(num);
// }
// foo();
// ----------change to let ------------------
// function foo() {
//     // var num = undefined;
//      console.log(num);

//     if (false) {
//         let num = 62;
//     }
//     console.log(num);
// }
// foo();

// function foo() {

//     if (true) {
//         console.log(num);
//         let num = 62;
//     }
//     console.log(num);
// }
// foo();

// ------------initial value of let is no---------------
// (function() {
//     console.log(z);
//      let z;
//      console.log(z);
//  }());

// *undefined vs not defined (reference error): you can't tell from typeof method
// not defined : never defined
// 未定义的，也就是说突然间冒出来的
// undefined: you declare a varibale but without assign any value.
//不明确的，也就是不知道用来干嘛的
// console.log(abcd);

// -----------let vs const (const cant reassign a value after it is assigned.)--------------
// the below will work by using const becuase it
// const arr = [1, 2, 3, 4];

// for (const i of arr) {
//      // every iteraction creates a new block
//     console.log(i);

// }

// ----->how about function....it will also do hoisting
// console.log(foo());
// function foo(){return 1};

//! overall we prefer to use let and const rather than var

//!ignore this
// Ok, let's talk about a very important part, how about const or var a foo function
// hoisting function is diff with hositing var function, when you are
// arrow funtion just need to be careful, because you can not use the arrow
// function before you declare it.
// const foo = () => {}
// var foo = () => {}

//?---------------------- oop: Object Oriented Programming ---------------------------
// the old way to doing it before ES6
// function ！！名字大小写无所谓！！！也可以写成personFn js的构函常用写法(constructor function)  但是这个是ES6以前的写法
// function PersonFn(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const dio = new PersonFn('Dio', 20);
// console.log(dio);
// Q: what does the new keyword do? (like a constructor)

// !--------------------- ignore it 不用特别讲_proto_ ---------------------------
// something like this, not exactly.
// function personFn(name, age) {
//     let obj = {}
//     obj.name = name;
//     obj.age = age;
//     obj.__proto__.constructor = personFn; // Function constructor
//     return obj;
// }

// const jojo = new personFn('Jojo', 10);
// console.log(jojo);

// ------------------create 了一个object/class的function：run---------
// PersonFn.prototype.run = function() {
//     console.log(`${this.name} is running`);
// }

// dio.run();
// const jojo = new PersonFn('Jojo', 18);
// jojo.run();
// //看一下proto的东西
// console.log(dio); //? 看这个[[Prototype]]: Object 里面的constructor 里面的东西
// //console.log(dio.__proto__);

// * __proto__和 prototype不同的是： __proto__直接用实例来弄
// * __proto__这个东西通过这个chain，有dio传到了PersonFn
// * this stands for dio
// dio.__proto__.run = function() {
//     console.log(`${this.name} is running`);
// }
//!alternatively ！！但是不能写成PersonFn.walk ....
// dio.walk = function() {
//     console.log(`${this.name} is walking`);
// }
// dio.walk();

// // dio.run();
// //const jojo = new PersonFn('Jojo', 18);
// //jojo.run();

// console.log(dio.prototype === dio.__proto__);
// Q:how about this one??
// console.log(PersonFn.prototype === dio.__proto__);// true class.prototype or instance.__proto__
//-------------------------------------------------------------------------

//-------------------------------- ES6 constructor ----------------/
// -----------------------------------------------------------------------------
// *ES6之后的写法  lets move to es6 syntax
// *javascript does not have class structure just syntax sugar for constructor function
// *JS is not designed for oop but has the similar feature like oop

// * a class is just like a function, but with new features: constructor function, getter and setter.
// class Person {
// //*    # means private value but you dont need to have private values
//     #name;
//     #age;
//     height;
//     constructor(name, age, height) {
//     //* this will become the new instance/object if new instance is created.
//         this.#name = name;
//         this.#age = age;
//         this.height = height;
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
// console.log(p);
// // //* get method
// console.log(p.name);
// // //* set method
// p.name = 'Jojo';
// console.log(p.name);

//------------------------------ Inheritance ------------------------------------------------
// //* extends
// //* it inheritent from prototype, which inclues the properties and methods
// // *Check prototype
// const obj2 = {};
// console.log(obj2);

//* but the orginal one is from the object. --> prototype
// protected vs. private
// protected is for programmers communication not in language syntax level,
// but private is in the language level
// ? But if we inherit from CoffeeMachine, then we’ll have no direct access
// ? to #waterAmount. We’ll need to rely on waterAmount getter/setter:

// class Employee extends Person {
//     #company;
//     constructor(name, age, height, company) {
//         super(name, age, height);
//         this.#company = company;
//     }
// }
// ? super keyword --> it calls the parent constructor

// //* Employee.prototype = Person.prototype;
// //* change the constructor name
// //* EmployeeFn.prototype.constructor = EmployeeFn;

// const e = new Employee('Dio', 20, 5.9,'Apple');
// console.log(e);

// //? What if we want to add some methods
// class Employee2 extends Person {
//     #company
//     constructor(name, age, height, company) {
//         super(name, age, height);
//         this.#company = company;
//     }

//     getCompany() {
//         return this.#company ;
//     }
//     //不能get到private variable age
//     getAge() {
//         return this.age;
//     }
//     //能get 到public variable height
//     getHeight() {
//         return this.height;
//     }
// }

// const e2 = new Employee2('Dio', 30, 6.0,'Apple');
// console.log(e2.getAge());
// console.log(e2.getHeight());

// ?----------------poly morphism ------------------------
// 不用讲什么是 poly-morphism 但有人问 就说 . Like a man at the same time is a father,
// a husband, an employee. So the same person posses !!!different behavior!!!
// in different situations. This is called polymorphism.

// ?----------------overloading ------------------------ (这次没讲 011923)
// // js does not have overload (same name but different params)feature
// // but it has something called overiding

// so here is a very good example I want to show you guys.
// we have a instance from employee when it calling some function, it always search from function
// employee (Itsself)first then from person(Parent).
// which means there is an order. instance > class Employee > class Person
// class Person_ {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     get name() {
//         return this.name;
//     }
//     set name(newName) {
//         this.name = newName;
//     }
//     run() {
//         console.log(this.name + ' is running');
//     }

// }

// class Employee_ extends Person_ {
//     constructor(name, age, company) {
//         super(name, age);
//         this.company = company;
//     }

//     // 可以调换顺序看看 console的结果
//     getCompany() {
//         console.log('with param');
//         return this.company;
//     }

// }

// const e3 = new Employee_('Dio', 100, 'Apple');
// console.log(e3.getCompany()); // NaN (0 + undefined) 第一个getsalary直接忽略 因为有第二个

// the order code prototype chain
// e.getSalary = function(){
//     console.log("hello");
// }
// from instance to employee to person and overridding to the end of the same name function
// Person.prototype.jump = function() {
//     console.log(`${this.name} is jumping`);
// }

// function Employee2() {
//     Person.call(this);
// }
//get everything from its parent

// const e2 = new Employee2('Jojo', 200, 'Google');
// Employee2.prototype = Object.create(Person.prototype)

// console.log(e2.jump());

// ------------------abstraction ------------------------------
// (如果有人问的话) what is the difference between interface(multiple level) and abstract class (one level) in js???
// // js
// abstract class is for the inheritance but no instance. However, in js we dont have this kinda of concept
// js does not have a key word abstract private or public, we you face that in the typescript which will
// talked about in the angular traning.

// -------------------Day2------------------------------------------
// -------------------loop--------------------------------------
// const arr = [1, 2, 3];
// console.log(arr);

// *key-value pairs are properties such as 0: 1, 1: 2, and 2: 3
// *some ways to do the for loop
// *1 Q: can we use const in this case --> no
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// *2 Q: can we use const in this case, --> yes, everytime create a new index.
// * in: using key, so it is like arr['0'], corecion
// for (let index in arr) {
//     console.log(arr[index]);
//     console.log(typeof index);
// }
//* another example
// for (const key in obj) {
//     console.log(key, obj[key]); 
// }

// *3 Q: If somebody ask, can we use const in this case, e.g. (const ele of arr) --> yes,
// * let is good for best practice
// for (let ele of arr) {
//     console.log(ele);
// }

//* Same question, we can construct an object
// const obj = {name: 'Dio', age: 200 }
// console.log(obj.name, obj['name']);

// JavaScript syntax requires properties beginning with a digit to be accessed using bracket notation instead of dot notation.

//* forEach building method-------- but it is not orginal for loop ----------
//* But no break and continune inside of the functions...

// const arr = [1, 2, 3, 4, 5];
//* Q: where does this forEach come from ? (from the array class, foreach is a method of prototype)
// console.log(arr); // open the protoype and check the forEach method
// function(ele) is a callback funtion
// arr.forEach(function(ele) {
//     console.log(ele);
// });

//*forEach arguments in callback: current ele, current index, original array
//*ele is required , but other two are not required.
// const arr = [100, 200, 300];
// arr.forEach((ele, i, array) => {
//     array[i] = ele + 1;
//     console.log(ele, i, array, arr);
//     console.log(arr === array);
// })
// console.log(arr);
//*since this arr can be changed instead of creating a new array, so aviod muniplating orginal array

//* 同理 如果有三个参数的 myforEach
// Array.prototype.myforEach = function (callbackfn) {

//     for (let i = 0; i < this.length; i++) {
//         callbackfn(this[i], i, this);
//     }
// }
// arr.myforEach(function(ele,i,array){
//     array[i] = ele + 1;
// })
// console.log(arr);
// 同理 如果有三个参数的 Map 省略

//* build myForEach
//* Q: what is the arguments in forEach? what is the callback function?
//* inherit from

// Array.prototype.myforEach = function (callbackfn) {

//     for (let i = 0; i < this.length; i++) {
//         // console.log(this); // this is relative to the object: array
//         callbackfn(this[i], i, this);
//     }
// }
// const arr = [1, 2, 3, 4, 5];
// arr.myforEach(function (ele) {
//     console.log(ele);
// })

//* what is "this"?
//* this will target to the instace itself... in this situation, it is arr...

// !the difference between forEach and Map
// *map always generate new array. Below see the examples
// console.log( arr.forEach(function(ele) {
//     console.log(ele);
// }))
// console.log( arr.map(function(ele) {
//     console.log(ele);
// }))

//* build myMap
// Array.prototype.myMap = function (callbackfn) {
//     const arr = []
//     for (let i = 0; i < this.length; i++) {
//         arr.push(callbackfn(this[i]))
//     }
//     return arr;
// }
// const newarr = arr.myMap(function(ele) {
//     if (ele !== 4){
//         return ele + 2;
//     }
// })

// console.log(newarr);

//* Filter method
// const newarr = arr.filter(function(ele, i, array){
//     return ele > 3
// })
// console.log(newarr)

//*build up myFilter (it is one of my sep interview questions)
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

//!reduce() has 2 parameters. The last one is an initial value.

//* reducer is the callback function for reduce. It saves the previous value for new iteration (4 parameters)
//* example
// const str = 'abc';
// const reducer = function(acc, cur, i, array) {
//     return acc + cur + cur;
// }
// console.log(str.split('').reduce(reducer,''));

//*2example
// const numbers = [175, 50, 25];
// const reducer = function(acc, cur) {
//     return acc - cur;
// }
// console.log(numbers.reduce(reducer, 0));

//* build up myReduce with an ininial Value
// Array.prototype.myReduce = function (callbackfn, initVal) {
//     let acc = initVal;
//     for (let i = 0; i < this.length; i++) {
//         acc = callbackfn(acc, this[i], i, this);
//     }
//     return acc;
// }

// console.log(strarr.myReduce(reducer,''));

//* Q:what if we dont know about the initial value biuld up myReduce no matter it has initial or not
// Array.prototype.myReduce = function (...args) {
// //     let [ acc, index ] = args.length === 1 ? [ this[0], 1 ] : [ args[1], 0 ];
//     //*another way
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

// console.log(numbers.myReduce(reducer));

//---------------------------  destructure ---------------------------------
//* Q: we have something called constructor. does any body know what the destructure is in js?
//* It creates a pattern that describes the kind of value you are expecting and makes the assignment.
//* Array destructuring uses position.

// const [first, secondthird] = ["a", "b", "c"];
// console.log(first, third);

// const obj ={
//     name: "Jojo",
//     age: 18
// }

// *before es6, you can only do things like this for the assignment
// const name = obj.name;
// const theage = obj.age;
// console.log(name, theage);

// this is the destructure: a shorter syntax, you will find key and value in the
// const {name, age} = obj;
// lets change the sequence, and it wont affect anything, becasue the obj has key value pair.
// const {age, name} = obj;
// const {a, b} = obj;
// console.log(name, age);
// console.log(a, b);
//*destructuring will reduce some code. Or simplifies the code.

//*However, you can add some properties
// const {age, name, a, b = "Dio"} = obj;
// console.log(name, age, a, b);

// interview questions

// const {links} = {
//     id: 1,
//     name: 'Luke',
//     links: [
//         { name: 'wechat',       link: 'wechat.com'      },
//         { name: 'apple',        link: 'apple.com'       },
//         { name: 'cnn',          link: 'cnn.com'         },
//         { name: 'fox',          link: 'fox.com'         },
//         { name: 'hbo',          link: 'hbo.com'         },
//     ]
// };
// *
// console.log(links.find((ele) => ele.name === 'cnn').link);
// * using destructure
// console.log(links.find(({name}) => name === 'cnn').link);
// // console.log(links[1].name);

//------------------------------js day3----------------------------------------------------
//--------------------------- spread operator vs. rest parameter ---------------------------
// * rest parameter
// * arguments is an object (array like) to take care of all the parameters
// * it does not have forEach method, but it looks like an array
// * the original prototype is object

// * les see what does ...args do, also you can change it to ...args1 etc,
// function foo(...args1) {
//     console.log(arguments); //arguments is array like
//     console.log(arguments[4]);
//     console.log(...args1);
//     console.log(args1); // args1 is an array!!
// }
// foo(1, 2, 3, 4, "abc");

//*another this example
// function foo(num, ...args) {
//     console.log(...args);
//     console.log(args);
// }
// foo(1, 2, 3, 4, "abc");

// *spread operator
// * Q: what is spread oprator?
// * Q: waht does ... mean?  (copy, is it shallow copy or deep copy?)
// * first level shallow copy
// const arr = [1, 2, 3];
// const arr1 =[...arr, 4, 5];
// const arr2 = [...arr, 4, 5];
// console.log(arr1, arr2);


// * what does [] do? (Creating a new array and get a new reference, same thing for {})

// let arr1 = [1, 2, 3];
// arr2 = arr1; // share the reference

// const obj = {
//     name: "Jojo", age: 18
// }
// const obj1 = {height: 6, ...obj};
// console.log(obj1 );

// some cases:

// const arr = [
//   'AAPL',
//   'MSFT',
//   'BAC',
//   ['JPM', 'TSLA'],
//   ['DOW', 'COIN', 'MMM']
// ]

// function flatten (arr) {
//   return arr.reduce((acc, cur) => {if (Array.isArray(cur)) {
//     return [...acc, ...cur]
//   }else {
//     return [...acc, cur]
//   }
// }, [])
// }

// console.log(flatten(arr))

// practice reduce
// const arr = [
//   {name: 'AA', age: 1},
//   {name: 'BB', age: 2},
//   {name: 'CC', age: 3},
// ];

// const foo = (arr) => {
//   return arr.reduce((acc, cur)=> {
//     return {...acc, [cur.name]: cur.age}
//   }, {})
// }

// console.log(foo(arr));


// --------------------------------object copy----------------------------------
// * shallow copy : share the same reference.
// * In other words, the memory addresses are the same
// const obj = {name: 'Jojo', age: 18}
// // just copy the refence
// const obj1 = obj;
// obj1.name = 'Dio';
// console.log(obj);

// * Q: how about spread operator (only deep copy the first level)

// * (The spread operator makes deep copies of data if the data is not nested.)

// const obj = {
//     name: 'Jojo',
//     age: 18,
//     links: [1, 2, 3],
//     date: new Date(), // new Data(obj.date)
//     foo: function() {
//         console.log('this is foo');
//     }
// };
// const obj2 = {...obj};
// console.log(obj);
// console.log(obj2);
// console.log(obj == obj2); // == to cheack the reference

// * if you want to compare the content of obj, json strigify needs the order to be the same
// * maybe you will ask how to compare the value. _.isequal()
// * in angular, we can use clone.

// *only deep copy the first level for the reference of the object,
// *but for the seond level (e.g. links), it will share the reference for links

// * also you can check the reference for links
// console.log(obj.links == obj2.links);
// obj2.name = 'Dio'; // does not effect
// console.log(obj);
// obj2.links = [100, 200, 300]; // does not effect
// console.log(obj);
//* how about the next one
// obj2.links[0] = 100; // it changed!!!!
// console.log(obj);

// * so the question is like do we have any other methods????
// * 第一个方法 deep copy
// * change the original obj to a string and then change it back
// console.log(obj, JSON.parse(JSON.stringify(obj)));
// const obj2 = JSON.parse(JSON.stringify(obj)); // lose the date
// console.log(obj == obj2); // == to cheack the reference
// * also you can check the reference for links
// console.log(obj.links == obj2.links);

// deep copy: Lodash | _.cloneDeep() Method

//----------------------------------iife----------------------------------------
//? The definition (save some codes, create private scopes)
// Immediately-Invoked Function Expressions(IIFE)
// (function() {
//     console.log(5);
// })();

// (() => {
//     console.log(5);
// })();

// create private scope, copy from online
// (function () {
//     function generateMagicNumber() {
//         return Math.floor(Math.random() * 100) + 900;
//     }

//     console.log("This is your magic number: " + generateMagicNumber());

//     var favoriteNumber = 5;
//     console.log("Twice your favorite number is " + favoriteNumber * 2);
// })();

// generateMagicNumber() // wont working

//--------------------------------closure------------------------------------
// ? MDN website (gives you access to an outer function's scope from an inner function. )
// * definition
// * and you just can not see it.
// ? outer means parent function & inner means child function
// ? help the return part to hold some logic
// function init() {
//     var name = 'Mozilla';
//     function displayName() {
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
// }
// init();

// *  This is a closure! it does not have a return part
// *  to the instance of the function displayName() that is created when makeFunc is run.

// * change samething as last one
// function makeFunc() {
//   var name = 'Mozilla';
//   return function() {
//     console.log(name);
//   }
// }

// var myFunc = makeFunc();
// myFunc();

//currying
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); // 20

// currying example it is working as clousre to save some argment values.
// function add (x, y) {

//     return (x + y)

//   }

// console.log(add(10, 20));

// function curriedAdd (x) {

//     return function(y) {

//       return x + y

//     }
// }
// console.log(curriedAdd(10)(20));

// ? interview question:  write the function runAll

// const callback1 = a => a + 2;
// const callback2 = b => b * 2;
// const callback3 = c => c / 3;

// use whatever callback you want...
// console.log(runAll(callback1, callback2, callback3)(10));

// function runAll(...args) {
//     // 由参数的话 格式就这样 return function 没法改
//     return function (num) {
//         let res = num;
//         for (let i in args){
//             res =args[i](res);
//         }
//         return res;
//       }
// }
// // * using reduce is neater!
// function runAll(...args) {

//     return function (num) {
//         return args.reduce((acc, cb) => cb(acc), num);
//     }
// }

//?  Interview questions: num之后就不能返回所加的值了，显示 out of limits
// //case 1
// const targetFn = (a) => console.log(a);
// //case 2
// // const targetFn = (a, b, c, d) => console.log(a + b + c + d); // add four args

// const fn = limitedFunction(3, targetFn);

// function limitedFunction(limitNum, cb) {
//     let counter = limitNum;
//     return function(i){
//         if (counter > 0){
//             counter -= 1;
//             return cb(i);
//         } else{
//         console.log("out of limits");
//         }
//     }
// }
// fn(4);
// fn(5);
// fn(1);
// fn(4);

// ----------------------------js day4-----------------------------------
//-------------------------------this-------------------------------------
// * Q: what is this keyword? (window)
// console.log(this);
// //* this is also window (bec), which is gloabl environment
// (function() {
//     console.log(this);
// })();

// const myObj = {
//     name: 'Dio',
//     age: 18,

//     foo: function() {
//         console.log(this); // this points to obj

//         const bar = function() {
//             console.log(this);// this will point to Window Global. it is parent its a function.

//             const baz = function() {
//               console.log(this); // window
//           }
//           baz();
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
//         console.log(this); // this will target to the instance
//     }
//     //* no instace needed. will target to class
//     static statisShowThis() {
//         console.log(this);
//     }
// }
// const p = new Person('Jojo');
// p.showThis();
// Person.statisShowThis();

// //* Q: how about this one? --> same as the class
// function PersonFn(name, age) {
//     this.name = name;
//     this.age = age;
// }

// PersonFn.prototype.run = function() {
//     console.log(this);
// }

// const dio = new PersonFn('Dio', 20);
// console.log(dio);
// dio.run;

// * Lets make a summary. Three ways to use this keyword
// * 1. Function: if "this" keyword in the function, it will point to global object
// * 2. Object: if the function belongs to/is a direct child of an object, the "this" keyword will point to the object.
// * 3.1 Class: if "this" is in the class, it will point to the instance.
// * 3.2 Class: if you use static, it will point to the class

//------------------------------------call apply bind -----------------------
// *bind  // -->lazyloading: have to generate a new variable
// const obj = {
//     pi: 3.14,
//     getPi() {
//         return this.pi; // point to object
//     }
// }
// //*this will go to the window object
// function getPerimeter(radius) {
//     console.log(this.getPi() * 2 * radius);
// }
// getPerimeter(20);

// //*  bind involve one arg, -->the target you want to point to
// //* lady loading here is hold or wait until someone use this method.
// const newGetPerimeter = getPerimeter.bind(obj);
// newGetPerimeter(20);

// getPerimeter.call(obj, 20);

// ******************call apply   ------> they are eagerloading, you dont need to have declare first
// * apply and call only difference is one will invole an array.
// const obj2 = {
//     area: 1000,
//     getArea() {
//         return this.area;
//     }
// }
// function getNum(num0, num1, num2) {
//     console.log(this.getArea(), num0, num1, num2);
// }

// function getNum(...args) {
//   console.log(this.getArea(), ...args);
// }

// getNum.call(obj2, 1, 2, 3);
// // * apply is also eager loading but only two args: obj and array
// getNum.apply(obj2, [1, 2, 3]);

//----------------------------- more examples call  bind---------------------------------
// const obj3 = {
//     name: 'Dio',
//     age: 18,

//     foo: function() {
//         console.log(this); // this one will point to obj

//         (function() {
//             console.log(this); // if no call, it will point to windows
//         }).call(this);  // directly use it, just the syntax this = obj (you can change this to obj)
//       //* bind 和下面的一模一样
//         const bar = function(){
//             console.log(this);
//         }
//         const newbar = bar.bind(this);
//         newbar();
//     }
// }
// obj.foo();

// ES6 arrow function class let const promise

//--------------------------------------arrow function  ES6 ----------------------
// With arrow functions the this keyword always represents the object that defined the arrow function.
// const foo = a => b => a + b;
// // * example 1
// const obj = {
//     name: 'Dio',
//     age: 18,

//     foo: function() {
//         const bar = function(){
//             console.log(this);
//         }
//         const newbar = bar.bind(this);
//         newbar();
//         // With arrow functions the this keyword always represents the object that defined the arrow function.
//        const baz = () => {
//             console.log(this);
//        }
//        baz();
//     }
// }
// obj.foo();

// ! -------------an this example ---------------
// Array.prototype.myforEach =  (callbackfn) => {

//     for (let i = 0; i < this.length; i++) {
//         console.log(this); // this is relative to the object: Array, but we want instance instead. so it will never work
//         callbackfn(this[i]);
//     }
// }
// const arr = [1, 2, 3, 4, 5];
// arr.myforEach(function (ele) {
//     console.log(ele);
// })

//!---------------ignore it----------------------------
// this is also currying.
// const arr = [1, 2, 3];

// const bar = (num) => {
//     return ele => {
//         console.log(ele + num);
//     }
// }

// arr.forEach(bar(12));

//!-------------------------------------Event loop------------------------------
//* Q: what is event loop??? / or what are the async functions?
//* let us do an example first, setTimeout
// ! 第一个args必须是个function 不能只是console.log(...)

// console.log(0);
// setTimeout(function(){
//     console.log(1);
// }, 1000) // change to 1 later
// console.log(2);
// setTimeout(function(){
//     console.log(3);
// }, 2000)
// console.log(4);

// !Then: Event loop: Call stack | Async Api | Task Queue
// !!!!!! Q: what does 1000s mean??? (First! send the whole setTimeout to async api!!! )!!!!!
// After 1 sec, the callback will be sent to the task queue.
// task queue will check whether the call stack is empty or not. if it is empty, the things in the task queue will be sent to callstack
// Sometimes, if you have infinite loop, you may does not have chance to call console.log(1)

//? interview question: (after 2s print 5)
//setTimeout helps to send the foo into task queue after i*1000 seconds, but i = 5 will run first
// let i = 2;
// function foo() {
//     console.log(i)
// }
// setTimeout(foo, i*1000)
// i = 5;

//? Q: how about like this setTimeout(foo(), i*1000)

// let i = 2;
// function foo() {
//     console.log(i)
// }
// setTimeout(foo(), i*1000)
// i = 5;

// function foo() {
//     console.log(1);
// }
// console.log(foo);  //foo-> this foo function as you can see in the console there is a "f"
// console.log(foo()); // console.log(console.log(1));

//? async api acts like a threshold/transfer station. decide whether the code goes to task queue
//? Now you know what the event loop is
// ? Interview question: (hot)
//  function foo() {
//     for (var i = 1; i < 5 ; i++){
//         setTimeout(() => console.log(i),i*1000);
//     }
//  }

// foo();

// *Can somebody explain how it works?

// *async api, or web api:  hold的功能 时间到了 就push到task queue

// *等到call stack is empty (很快就empty了 一起全走了) OR you can say the sync function has finished

// *task queue, message queue (queue) 先进先出 。
// *The task queue will Wait for call stack is empty （一般很快都empty）, after call stack is empty,
// *the task queue will push all the items into call stack ---> This is event loop!
// *为什么要回到call stack， 因为回到call stack才会 excute console.log

// *But when you are using "let" the time will help to scope the i in a block, wont share the values in the function

// Another way to change it, help change the scope
// for (var i = 0; i < 5 ; i ++){
// use iife to create scope
//     (function (v){
//         setTimeout(() => { console.log(v) }, v*1000);
//     })(i);
// }

// *interview question
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

// *looking for
// console.log(solution(first, second));
// {
//     { userid: 2, name: 'Velen', role: 'Mage'},
//     { userid: 4, name: 'Gul\'Dan', role: 'Worlock' },
//     { userid: 12,  name: 'Sylvanas', role: 'Hunter' },
//     { userid: 23, name: 'Muradin', role: null},
//     ...
// };

// function solution (firstarr, secondarr) {
//     // const arr = firstarr.contact(secondarr);
//     const arr = [...firstarr, ...secondarr];
//     // the most important is to create a map
//     //override the key again and again
//     const map = {};
//     arr.forEach(ele => {
//         map[ele.userid] = {
//             name: null, role: null, // ...{name: null, role: null}
//             //*覆盖作用, Merge two maps. The last repeated key stay.
//             //* 第二次碰到重复的id的时候，要替换之前的，所以就要加满
//             ...map[ele.userid],
//            //* 这个就是当前的
//             ...ele
//         };

//     })
//     return map;

// }

// console.log(solution(first, second));

//-----------------------JS day5 -----------------------------------------------
//--------callback function & callback hell & Promise & My Promise--------------------
// const foo = () => console.log('foo showup');
// //? math.floor-> get the smaller integer, math.random-> get a random number from 0-1
// const randomNum = () => Math.floor((Math.random() * 6));

// const callFnInRandomTime = (callback) => {
//     const timer = randomNum();
//     console.log(`${timer}s`);

//     setTimeout(callback, timer * 1000);
// }

// callFnInRandomTime(foo);
// //* introduce call back hell
// callFnInRandomTime(() => {
//     callFnInRandomTime(foo);
// });
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

//? how to avoid the callback hell? -> Promise. But before that, we are going to talk about api call

// -------------------------XHR----------------------------------

// Q: do you know what is XHR? (XML HttpRequest) -> to request data from server
//? let us copy the code and wrap the method in a function
// ? also todolist json placeholder

// ? in js how to make http request, for example fetch, there is one way called XHR. new an object
// const getToDoFormJsonPlaceHolder = (id, callback) => {
//   var xhttp = new XMLHttpRequest();
//   //execute a function to be  every time the status of the XMLHttpRequest object changes:
//   xhttp.onreadystatechange = function () {
//     // readyState is talking about the state of client side.
//     if (this.readyState == 4 && this.status == 200) {
//       // try without JSON.parse()
//       // try callback(xhttp) then xhttp.response
//       callback(xhttp.response); // from string to js object
//     }
//   };
//   xhttp.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true); // open the request, async or sync
//   xhttp.send();
// }
// Q: what is JSON? -->data format, JavaScript Object Notation. help us to do the data communication
// Q: Why does JSON is popular? --> 1. JS natively support JSON. in other words, we can use js to convert JSON format data.
// 2. JSON is light weight
// ? JSON.parse(): converting JSON strings into JavaScript objects.
// ? JSON.stringify(): converting  an object into a JSON string.

// const print = (ele) => {
//   console.log(ele);
// }
// ?you can not control the time when fetching the data.
// ?it is like settimeout(() => {}, but the httprequest time is random. Always changed )
// ? so lets try to run it. (Everytime it will respond differently)
// getToDoFormJsonPlaceHolder(4, print);
// getToDoFormJsonPlaceHolder(15, print);
// getToDoFormJsonPlaceHolder(78, print);

// this will lead to callback hell as well
// getToDoFormJsonPlaceHolder(4, (data) => {
//     print(data);
//     getToDoFormJsonPlaceHolder(16, (data) => {
//         print(data);
//     });
// });

//-------------------------------------Promise & My Promise -------------------------
//* Q: what is promise -> 1, avoid callback hell;
//* 2, object return completed/resolve or failure/rejected and results for async events
//* 3 status: pending, fulfilled and rejected
//* https://javascript.info/promise-basics

// the callback fn called executor. Hover the promise, you can see it returns a new promise
// const promise = new Promise(
//   (resolve, reject) => {
// console.log('hello');
// });

//* there is no need to have declare a promise. You dont need to creat an instance of a promise
// new Promise((resolve, reject) => {
//     console.log('hello');
//     });
//* two important methods: then(),catch(),

// class MyPromise {
//     constructor(executor){
//
//         executor();
//     }
//     then () {}
//     catch() {}
//     finally() {}
// }

//? resolve will hold some data, and transfer the data to .then()
//? In other words, resolve will help to handle the async data
// ? .then() will return another promise, so it can chain .then() again
// }).then((data)=>{
//     console.log(data);
//     return 'test1';
// }).then((data)=>{
//     console.log(data);
//     return 'test2';
// })

//------------catch
// new Promise((resolve, reject) => {
//     console.log(a);

//     resolve('hello')
// }).then((name) => {
//     console.log(name);
// }).catch(err => console.log('err: ', err));

// ?or

// new Promise((resolve, reject) => {
//   reject('a mistake');

//   resolve('hello')
// }).then((name) => {
//   console.log(name);
// }).catch(err => console.log('err: ', err));

// -------------question -------------------------
// console.log(1111);

// new Promise((resolve, reject) => {
//     console.log(2222);

//     resolve(3333)
// }).then((str) => {
//     console.log(str);
//     return '4444';
// }).then((name) => {
//     console.log(name);
// }).catch(err => console.log('err: ', err));

// console.log(5555);

// !! hello 那句并不是 async. 整个promise是立即执行 run immediately
// new Promise((resolve, reject) => {
//     console.log('hello');
//     resolve('world');
// }

// * using promise example
// const getToDo = (id) => {
//     return new Promise((resolve, reject) => {
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 resolve(JSON.parse(xhttp.response));
//             }
//         };
//         xhttp.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
//         xhttp.send();
//     });
// };

// const myprint = (ele) => {
//     console.log(ele);
// };

// ? this is callback hell, and you never want to write your promise in this way.
// getToDo(4).then((data) => {
//     myprint(data);
//     return getToDo(15).then((data) => {
//         myprint(data);
//         return getToDo(78).then((data) => {
//             myprint(data);
//         });
//     });
// });

//* But this way is much better, and it avoid callback hell style
// getToDo(4)
//     .then(data => {
//         myprint(data);
//         return getToDo(15);
//     })
//     .then(data => {
//         myprint(data);
//         return getToDo(78);
//     })
//     .then(data => {
//         myprint(data);
//     })

//-------------promise.all() return a single promise as an array------------
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// // expected output: Array [3, 42, "foo"]

// ?-------------------------- async await... syntax sugar of promise-----------------------

// (async () => {
//         //* wait the get function done, and pass the resolve result to todo
//         //? you have to have a function and put the "async" keyword ahead of the function
//         //? the function after await is a promise, you can use .then(data), but todo is the data
//         const todo = await getToDo(1);
//         console.log(todo);
// })();

// * the way to catch error for async await
// (async () => {
//     try {
//         // wait the data come back and then run next todo
//         const todo5 = await getToDo(5);
//         console.log(todo5);

//         const todo12 = await getToDo(12);
//         console.log(todo12);

//         const todo78 = await getToDo(78);
//         console.log(todo78);
//     } catch (error) {
//         console.log(error);
//     }
// })();

// for async/await: go to the website: https://javascript.info/async-await
// async function f() {
//     // return  1

//     let promise = new Promise((resolve, reject) => {
//      return 1;
//     });

//     let result = await promise;

//     alert;

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {return "done"}, 1000)
// });

// let result = await promise;

// alert;
//   }

//   f().then(alert);

// !------------------------------Build MyPromise----------------------------

class MyPromise {
  thenCallBackqueue = [];
  catchCallBackqueue = [];
  currentData = undefined;

  constructor(executor) {
    try {
      executor(this.resolve.bind(this), this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(resData) {
    setTimeout(() => {
      this.currentData = resData;
      while (this.thenCallBackqueue.length) {
        const cb = this.thenCallBackqueue.shift();

        if (this.currentData instanceof MyPromise) {
          this.currentData.then((data) => {
            this.currentData = cb(data);
          });
        } else {
          this.currentData = cb(this.currentData);
        }
      }
    }, 0);
  }

  reject = (rejData) => {
    setTimeout(() => {
      const cb = this.catchCallBackqueue.shift();
      cb(rejData);
    }, 0);
  };

  then(thenFn) {
    this.thenCallBackqueue.push(thenFn);
    return this;
  }
  catch(catchFn) {
    this.catchCallBackqueue.push(catchFn);
    return this;
  }
}
//---------------example -------------------------
const randomNum = () => Math.floor(Math.random() * 6);
new MyPromise((resolve, reject) => {
  const timer = randomNum();
  console.log(timer);

  if (timer > 2) {
    reject("this is from reject" + timer);
  } else resolve("this is from resolve" + timer);
  // console.log(a);
})
  .then((data) => {
    console.log(data);
    return new MyPromise((res, rej) => {
      res(4);
    });
  })
  .then((data) => {
    console.log(data);
  })
  .catch(console.log);

//!-----------------------------MyFetch----------------------------
//? 1. copy the fetch method from todo fake backend
//? 2. without options

// function MyFetch(url) {
//   return new Promise((resolve, reject) => {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         const responseData = {
//           json: function () {
//             return JSON.parse(xhttp.response);
//           }
//         }
//         resolve(responseData);
//       }
//     };
//     xhttp.open("GET", url);
//     xhttp.send();
//   });
// }

// MyFetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//? 3. Add options

function MyFetch(url, options) {
  let method = options && options.method ? options.method : "GET";
  

  return new Promise((resolve, reject) => {
    
    var xhttp = new XMLHttpRequest();
    xhttp.open(method, url);

    if (options && options.headers) {
      Object.keys(options.headers).forEach((key) => {
        xhttp.setRequestHeader(key, options.headers[key]);
      });
    }

    xhttp.onreadystatechange = function () {
      // ? could be 201: 
      if (this.readyState == 4 && this.status >= 200 && this.status < 300) {
        const responseData = {
          json: function () {
            return JSON.parse(xhttp.response);
          }
        }
        resolve(responseData);
      }
    };
    
    // body part should stay in the send() method
    options && options.body ? xhttp.send(options.body) : xhttp.send();
  });
}


// MyFetch('https://jsonplaceholder.typicode.com/posts', {
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
MyFetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

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

// ?~~~~~~~~~~~~~~~~~~~ interview question ~~~~~~~~~~~~~~~~~~~
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
