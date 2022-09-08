// -----------------------------Day1----------------------------
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
// console.log(typeof null); // object, but it is a bug of js, is a primitive value.

// ---------------forget about this part ----------------------
// *undefined vs null
// *undefined is where no notion of the thing exists;
// *it has no type, and it's never been referenced before in that scope!!!!
// *null is where the thing is known to exist, but we don't known what the value is.


// *undefined vs not defined (reference error)
// undefined: you declare a varibale but without assign it. there is no refrence.
// console.log(abcd);
// Q: what if you change keyword var to let
// Q: let vs const (const cant reassign a value after it is assigned.)

// --------------- ----------------------

// *primitive data example // passing by value means share the value. 
// let a = 5;
// function foo(input){
//     input = 6;
// }
// foo(a); // 6
// console.log(a); // 5 passing by value not passing by reference
// console.log(input); // go to garbage collection



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
// * share the reference
// var obj = {
//     name: 'Dio',
// }

// function bar(input) {
//     // 1
//     // input.name = 'Jojo';
//     // console.log(input);
// // 2
// input = {name: 'Jojo'}
// console.log(input === obj)
// ! // Q: we changed the reference but why it is not working??? it will create another input 
// }

// bar(obj);
// console.log(obj); // 

// ! If you still dont understand: https://www.javascripttutorial.net/javascript-pass-by-value/#:~:text=JavaScript%20pass%2Dby%2Dvalue%20or%20pass%2Dby%2Dreference&text=It%20means%20that%20JavaScript%20copies,variables%20outside%20of%20the%20function.
//---------------------------------------------------


//------------------using new key word to create an object, you will use a lot like this----------------------------------------
// class Todo {
//     constructor(title, id) {
        // this.title = title;
        // this.id  = id;
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
//------------------------------------------------------------------


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
//------------------------------coercion----------------------------------------

//*type coercion 类型相互转换
//*Type coercion is the process of converting value from one type to another

// console.log(typeof ('0' - '1')); // number
// console.log(true + false); // 1
//console.log(3 + 4 + "5"); // 75
// console.log(1 - '2'); // -1
// console.log(typeof(1 - '2'))
// console.log('2' - 1); // 1 
// console.log(typeof('2' - 1))

// Q: we have an interview question:
// var num = 2342342342413;
// var num2 = +(num + '').split('').reverse().join(''); // + ''变成string, 再+变成数字
// console.log(num2);

//--------------------------------- == vs. === -------------------------------------------

//* comprison table
//* https://dorey.github.io/JavaScript-Equality-Table/
//* == compare the values ignore the types, it is also called coercion.
//* but it does not really change the value type in this case.

// we are not sure about it: convert string to num or num to string, I think it depends.
// console.log('1' == 1); // true
// console.log("" == false) // ture
// console.log("" === false) // false

// always use ===

// * Q: how to declare a variable in js?
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

//---------------------- oop: Object Oriented Programming ---------------------------


// the old way to doing it before ES6
// function ！！名字大小写无所谓！！！也可以写成PersonFn js的构函常用写法(constructor function)  但是这个是ES6以前的写法
// function personFn(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const dio = new personFn('Dio', 20);
// console.log(dio);
// Q: what does the new keyword do? (like a constructor)

// ---------------------forget about it---------------------------
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


// *create 了一个object/class的function：run
// PersonFn.prototype.run = function() {
//     console.log(`${this.name} is running`);
// }

// dio.run();
// const jojo = new PersonFn('Jojo', 18);
// jojo.run();
// *给你看一下proto的东西
// console.log(dio);
// console.log(dio.__proto__);

// * __proto__和 prototype不同的是： __proto__直接用实例来弄
// * __proto__这个东西通过这个chain，有dio传到了PersonFn
// * this stands for dio
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
//-------------------------------------------------------------------------

//-------------------------------- ES6 constructor ----------------/
// -----------------------------------------------------------------------------
// *ES6之后的写法  class es5 syntax is wired lets move to es6 syntax
// *javascript does not have class structure just syntax sugar for constructor function
// *JS is not designed for oop but has the similar feature like oop

// * a class is just like a function, but with new features: constructor function, getter and setter.
// class Person {
// //*    private value but you dont need to have private values
//     #name;
//     #age;
//     #height;
//     constructor(name, age, height) {
    //* this will become the new instance/object if new instance is created.
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
// console.log(p);
// //* get method
// console.log(p.name);
// //* set method
// p.name = 'Jojo';
// console.log(p.name);

//------------------------------ Inheritance ------------------------------------------------
//* extends
//* it inheritent from prototype, which inclues the properties and methods
//* but the orginal one is from the object. open the console from chrome
// i think private value can not be created in the child for some reason
// class Employee extends Person {
//     constructor(name, age, height, company) {
//         super(name, age, height);
//         this.company = company;
//     }
// }

// * now lets do something like this  check the object prototype
// const obj = {};
// console.log({});

// //* Employee.prototype = Person.prototype;
// //* change the constructor name
// //* EmployeeFn.prototype.constructor = EmployeeFn;

// const e = new Employee('Dio',100,'Apple');
// console.log(e);

// class Employee2 extends Person {
//     constructor(name, age, height, company) {
//         super(name, age, height);
//         this.company = company;
//     }

//     getCompany() {
//         console.log('no param');
//         return this.company ;
//     }

//     getAge() {
//         return this.age;
//     }
// }



// const e2 = new Employee2('Dio',100, 14,'Apple');
// console.log(e2.getAge());


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

//     // 可以调换顺序看看 console的结果
//     getSalary() {
//         console.log('with param');
//         return this.company;
//     }

// }

// const e = new Employee('Dio', 100,  'Apple');
// console.log(e.getSalary()); // NaN (0 + undefined) 第一个getsalary直接忽略 因为有第二个

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
//     console.log(key, obj[key]); // you cant do things like: obj.key, becuase key is a variable
// }

// *3 Q: If somebody ask, can we use const in this case, e.g. (const ele of arr) --> yes,
// * let is good for best practice
// for (let ele of arr) {
//     console.log(ele);
// }

//* Same question, we can construct an object
// const obj = {name: 'Dio', age: 200 }
// console.log(obj.name, obj['name']);
// *Q: what is the difference between this two: obj.name vs. obj['name']
// * [] is for a variable, but . is for a given key or more like a sepecific key

//* forEach building method-------- but it is not orginal for loop ----------
//* But no break and continune inside of the functions...

// const arr = [1, 2, 3, 4, 5];
//* Q: where does this forEach come from ? (from the array class, foreach is a method of prototype)
// console.log(arr); // open the protoype and check the forEach method
// function(ele) is a callback funtion
// arr.forEach(function(ele) {
//     console.log(ele);
// });

//*forEach arguments: current ele, current index, original array
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
//         console.log(this); // this is relative to the object: array
//         callbackfn(this[i]);
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

//* also filter is an important method
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
////     let [ acc, index ] = args.length === 1 ? [ this[0], 1 ] : [ args[1], 0 ];
//     *another way
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

// console.log(strarr.myReduce(reducer,''))

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
// * using iife
// console.log(links.find(({name}) => name === 'cnn').link);
// // console.log(links[1].name);

//------------------------------js day3----------------------------------------------------
//--------------------------- spread operator vs. rest parameter ---------------------------
// * rest parameter
// * arguments is an object (array like) to take care of all the parameters
// * it does not have forEach method, but it looks like an array
// * the original prototype is object
// Q: what does array like mean ? it is array

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

// * their references are not the same
// console.log(arr1 === arr2);
// * Q: how about this one?
// console.log(arr1 == arr2); // false
// * what does [] do? (Creating a new array and get a new reference, same thing for {})

// let arr1 = [1, 2, 3];
// arr2 = arr1; // share the reference
// console.log(arr1 === arr2);

// const obj = {
//     name: "Jojo", age: 18
// }
// const obj1 = {height: 6, ...obj};
// console.log(obj1 );


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
// // The definition (save some codes, create private scope)

// (function() {
//     return console.log(5)
// }())
// (function() {
//     return console.log(5)
// })()


//--------------------------------closure------------------------------------
// * example from MDN website
// * definition
// * and you just can not see it.   outer means parent
// function init() {
//     var name = 'Mozilla'; 
//     function displayName() { 
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();

// *  This is a closure! In this case, myFunc is a reference
// *  to the instance of the function displayName() that is created when makeFunc is run.
// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }

//   var myFunc = makeFunc();
//   myFunc();

// * change samething as last one
//   function makeFunc() {
//     var name = 'Mozilla';
//     return function() {
//       console.log(name);
//     }
//   }

//   var myFunc = makeFunc();
//   myFunc();


// *  Interview questions: num之后就不能返回所加的值了，显示 out of limits 
// const targetFn = (a) => console.log(a);
// // const targetFn = (a, b, c, d) => console.log(a + b + c + d);
// const fn = limitedFunction(3, targetFn);

// function limitedFunction(num, cb) {
//     let counter = num;
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
// fn(1,2);
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
//         console.log(this); // this goes to obj

//         const bar = function() {
//             console.log(this);// this will goes to Window Global. it is parent its a function. 
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
//     //* no instace needed
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
// * 1. Function: if "this" keyword in the function, it will target to global object
// * 2. Object: if the function belongs to an object, the "this" keyword will target to the object.
// * 3.1 Class: if "this" is in the class, it will target to the instance.
// * 3.2 Class: if you use static, it will target to the class



//------------------------------------call apply bind -----------------------
// *bind  // -->lazyloading: have to generate a new variable
// const obj ={
//     pi: 3.14,
//     getPi() {
//         return this.pi;
//     }
// }
// //*this will go to the window object
// function getPerimeter(radius) {
//     console.log(this.getPi() * 2 * radius);
// }

// getPerimeter(20);
// //*  bind involve one arg, -->the target you want to refer to
// //* lady loading here is hold or wait until someone use this method.
// const newGetPerimeter = getPerimeter.bind(obj); 
// newGetPerimeter(20);

// getPerimeter.call(obj, 20);

// ******************call apply   ------> they are eagerloading, you dont need to have declare first
// * apply and call only difference is one will invole an array.
// const obj = {
//     area: 1000,
//     getArea() {
//         return this.area;
//     }
// }
// function getNum(num0, num1, num2) {
//     console.log(this.getArea(), num0, num1, num2);
// }


// getNum.call(obj, 1, 2, 3);
// * apply is also eager loading but only two args: obj and array
// getNum.apply(obj, [1, 2, 3]);

//----------------------------- more examples call  bind---------------------------------
// const obj = {
//     name: 'Dio',
//     age: 18,

//     foo: function() {
//         console.log(this); // this one will refer to obj

//         (function() {
//             console.log(this);
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
// * Q: you guys know what are arrow functions right ?
// With arrow functions the this keyword always represents the object that defined the arrow function.
// const foo = a => b => a + b;
// * example 1
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

// * example 2
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

//--------------------------------------currying-------------------------
// ! google it. It works closely with closure!
// * interview question


const callback1 = a => a + 2;
const callback2 = b => b * 2;
const callback3 = c => c / 3;

// use whatever callback you want...
console.log(runAll(callback1, callback2, callback3)(10));

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

// * using reduce is neater!
function runAll(...args) {

    return function (num) {
        return args.reduce((acc, cb) => cb(acc), num);
    }
}
//_---------------forget about it----------------------------
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

// *Can somebody explain how it works?
// *call stack is first in last out but it is about function invoke function or something, not line by line.
// *(dont get confused about stack!!!)one line code, will go in and go out immediately.

// *async api, or web api:  hold的功能 时间到了 就push到task queue

// *等到call stack is empty (很快就empty了 一起全走了) OR you can say the sync function has finished

// *task queue, message queue (queue) 先进先出 。
// *The task queue will Wait for call stack is empty （一般很快都empty）, after call stack is empty,
// *the task queue will push all the items into call stack ---> This is event loop!
// *为什么要回到stack， 因为回到stack才会consloe 东西 （所以这就叫做 loop)

// *But when you are using "let" the time will help to hold the i.....

// Another way to change it
// for (var i = 0; i < 5 ; i ++){

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

// // *looking for
// // console.log(solution(first, second));
// // [
// //     { userid: 2, name: 'Velen', role: 'Mage'},
// //     { userid: 4, name: 'Gul\'Dan', role: 'Worlock' },
// //     { userid: 12,  name: 'Sylvanas', role: 'Hunter' },
// //     { userid: 23, name: 'Muradin', role: null},
// //     ...
// // ];

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
// // callback function; callback hell
// const foo = () => console.log('foo showup');

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
//* Q: what is promise -> 1, avoid callback hell;
//* 2, object return completed/resolve or failure/rejected and results for async events
//* 3 status: pending, fulfilled and rejected

// const promise = new Promise((resolve, reject) => {
// console.log('hello');
// });

//* there is no need to have declare a promise. You dont need to creat an instance of a promise
// new Promise((resolve, reject) => {
//     console.log('hello');
//     });
//* three build in methods: then(),catch(),finally()

// class MyPromise {
//     constructor(executor){
//         executor();
//     }
//     then () {}
//     //catch()...
//     //finally()...
// }

// ! hello 那句并不是 async 整个promise是立即执行 run immediately
// new Promise((resolve, reject) => {
//     console.log('hello');
//     resolve('world');

//* resolve will hold some data, and transfer the data to .then()
// ! .then() will return another promise
// }).then((data)=>{
//     console.log(data);
//     return 'test1';
// }).then((data)=>{
//     console.log(data);
//     return 'test2';
// })

// * using promise example
// const getToDoFormJsonPlaceHolder = (id) => {
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
// * this is callback hell as well, and you never want to write your promise in this way.
// getToDoFormJsonPlaceHolder(4).then((data) => {
//     myprint(data); // or you can say console.log(data)
//     return getToDoFormJsonPlaceHolder(15).then((data) => {
//         myprint(data);
//         return getToDoFormJsonPlaceHolder(78).then((data) => {
//             myprint(data);
//         });
//     });
// });

//* But this way is much better, and it avoid callback hell style
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

// * async await... syntax sugar of promise


// (async () => {
//         * wait the get function done, and pass the resolve result to todo
//         * same as the promise, it passes the resolve data to .then()
//         const todo = await getToDoFormJsonPlaceHolder(1);
//         console.log(todo);
// })();

// * the way to catch error for async await
// (async () => {
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

// * give an example, what is the result
// console.log(1);
// new Promise((res, rej) => {
//     console.log(2);
//     res(3);
// }).then(data => console.log(data));
// console.log(4);

// --------------------Build your own MyPromise----------------------------

// class MyPromise{
//     //* use an array to hold the callback method...
//     thencallbackqueue = [];

    
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
//     //*.then 就是hold callback function... 所以你就avoid callback hell.
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
