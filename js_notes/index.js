
// ECMAscript: syntax ES6
// Javascript = ECMAscript + Web.api
// Nodejs = ECMAscript + Node.api

// // Primitive Data
// // sting number boolean undefined null symbol

// var str = 'abc'; 
// console.log(typeof str);
// var copystr = str;
// console.log(typeof copystr);
// console.log('string: typeof instance === ', typeof 'string');
// console.log('number: typeof instance === ', typeof 911);
// console.log('boolean: typeof instance === ', typeof true);
// console.log('undefined: typeof instance === ', typeof undefined); //
// console.log(typeof null); 

// undefined is where no notion of the thing exists; 
// it has no type, and it's never been referenced before in that scope;
//  null is where the thing is known to exist, 
//  but it's not known what the value is.

// primitive data example
// let a = 5;
// function foo(input){
//     input = 6;
//     console.log(input);
// }
// foo(a);
// console.log(a);
// let b = 5;
// let c = b;
// b = 6;
// console.log(b, c);

// // Object Data -------------------------
// how to create an object in js some students dont know how to create obj, 
// you need to learn more by yourself after class
// // plain obj or use class to create obj
// var obj = {}
// // prototype chain
// console.log(obj);
// // not a plain object, instead class object
// class myObject {
//     constructor() {

//     }
// }
// var obj2 = new myObject();
// console.log(obj2);

//Q:---what is the type of function?
// what is the type of array?
// let arr = [1, 2, 3];
// console.log(typeof(arr));

// var copyobj = obj;
// //
// // passing by reference: arr, function, object
// it wont let you pass reference through the arguments of a function
// var obj = {
//     name: 'Dio',
// }
// function bar(obj) {
//     // create an new obj but only with the scope
//     obj = {name: 'Jojo'}
//     console.log(obj);
// }
// bar(obj);
// console.log(obj);

// // coercion 类型相互转换

// console.log(typeof ('0' - '1'));
// console.log(true + false); 

// var num = 2342342342413;
// // 314...
// var num2 = +(num + '').split('').reverse().join('');
// console.log(typeof num2);

// equality == vs. ===
// dont know convert string to num or num to string
// console.log('1' == 1); // true


// console.log(undefined == null);
// console.log(null == false);
// console.log(typeof NaN); 

// console.log(false == NaN);
// console.log(isNaN('apple') === isNaN('banana'));
// console.log(NaN == NaN);

// always use === 


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
// undefined: you declare a varibale but without assign it.
// console.log(abcd);
// Q: what if you change keyword var to let 
// Q: let vs const (const cant reassign a value after it is assigned.)

// but you can change/mutate inside of the obj. so just be more clear about the concepts
// const obj = {name:'Dio' }
// obj.name = 'Jojo';
// console.log(obj);
// object defineproperty. With some methods, you can't change it... it is advanced topic

// (if someone mentioned) java use complier and check everything first, but js use interpreter//


// let and const
// function foo() {

//     if (true) {
//         console.log(num);
//         let/const num = 62;
//     }
//     console.log(num);
// }
// foo();

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
// //alternatively
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
// // encapsulation 
// // ES6之后的写法  class
// // javascript does not have class structure just syntax sugar for constructor function
// // 
// class Person {
//     #name;
//     #age;
//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }
//     get name() {
//         return this.#name;
//     }
//     set name(newName) {
//         this.#name = newName;
//     }
//     run() {
//         console.log(this.#name + ' is running');
//         console.log(this.#name, 'is running');

//         console.log(`${this.#name} is running`);
//     }
// }

// //gonna talk about keyword call later..
// function EmployeeFn(name, age, company) {
//     PersonFn.call(this, name, age);
//     this.company = company;
// }
// //extends
// EmployeeFn.prototype = PersonFn.prototype;
// //change the constructor name
// EmployeeFn.prototype.constructor = EmployeeFn;
// const e = new EmployeeFn('Dio',200,'Jump');
// console.log(e);

// for loop
// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (let ele of arr) {
//     console.log(ele);
// }
// //by this way we can construct an object
// for (const index in arr) {
//     console.log(arr[index]);
// }
// const obj ={
//     name: 'Dio',
//     age: 200
// }
// for (const key in obj) {
//     //you cant do things like: obj.key, becuase key is a variable
//     console.log(key, obj[key]);
// }
// //自带方法 forEach building method****** but it is not orginal for loop!!!!!!!

// //forEach cant use break and continune inside of the functions...
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// //function(ele is a callback funtion)
// arr.forEach(function(ele) {
//     console.log(ele);
// });
// //create my forEach
// Array.prototype.myforEach = function (callbackfn) {

//     for (let i = 0; i < this.length; i++) {
//         //告诉你 callback function里面的参数 this[i]。格式就这样！
//         callbackfn(this[i]);
//     }
// }
// arr.myforEach(function (ele) {
//     console.log(ele);
// })
// //what is "this"?
// // this will target to the instace itself... in this situation, it is arr...

// // the difference between forEach and map
//map always generate new array
// console.log( arr.forEach(function(ele) {
//     // console.log(ele);
// }))
// console.log( arr.map(function(ele) {
//     // console.log(ele);
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

// know forEach method: current ele, current index, original array
//ele is require, but other two are not required.
// arr.forEach(function(ele,i,array){
//     array[i] = ele + 1;
// })
// console.log(arr);
//同理 如果有三个参数的 forEach
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

// // reduce() has 4 parameters...

// //reducer is the callback function for reduce. 你是通过reducer才加的值 
// //如果换一个callback 可能就减了
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

/*************************************destructor */
// const obj ={
//     key:"Jojo",
//     value:18
// }
// let {key, value} = obj;
// console.log(key);

/*************************************spread operator vs. rest parameter */
// //spread operator
// const arr = [1, 2, 3];
// const arr1 =[0, ...arr];
// const arr2 = [...arr, 4, 5];
// console.log(arr2);
// // their references are not the same
// console.log(arr1 === arr2);

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


/*************************************iife */
// (function() {
//     return console.log(5)
// }())
// (function() {
//     return console.log(5)
// })()


/*************************************closure */
// // example from MDN website
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


/*************************************this */
// const obj = {
//     name: 'Dio',
//     age: 18,

//     foo: function() {
//         console.log(this); // this goes to obj

//         const bar = function() {
//             console.log(this);// this will goes to Window Global...
//         }
//         bar(); 
//     }
// }
// obj.foo();

/*************************************call bind*/
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

/*************************************call apply bind */
// //bind
// const obj ={
//     pi: 3.14,
//     getPi() {
//         return this.pi
//     }
// }
// function getPi(radius) {
//     console.log(this.getPi()*radius);
// }

// // getPi(20);
// const newGetPi = getPi.bind(obj); // lazyloading  you cant change bind to call

// //call apply   ----------> eagerloading
// const obj ={
//     a: 1000,
//     getSome() {
//         return this.a
//     }
// }
// function getSome(num0, num1, num2) {
//     console.log(this.getSome(), num0, num1, num2);
// }

// getSome.call(obj, 1, 2, 3);
// getSome.apply(obj, [1, 2, 3]);



// ES6 arrow function class let const promise
/************************************* arrow function  ES6 */
// const foo = a => b => a + b;

// function bar (){
//     console.log(arguments);
// }

// const foo = (...args) => console.log(args);

// console.log(foo());

/***interview*************************************currying */
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

/***interview*************************************Event loop */
// var and let has different scope

// for (var i = 0; i < 5 ; i ++){
//     setTimeout(() => { console.log(i) }, i*1000);
// }

// call stack first! stack: for , for setTimeout, After setTimeout is done and out, for out.  
/*
async api, or web api:  等的功能 时间到了 就push到task queue
first round: () => { console.log(i) } , 0
second round:() => { console.log(i) } , 1
thrid round: () => { console.log(i) } , 2
four round: () => { console.log(i) } , 3
five round: () => { console.log(i) } , 4
*/
/*
task queue, message queue (queue) 先进先出 。
// The task queue will Wait for call stack is empty, after call stack is empty,
the task queue will push all the items into call stack again---> This is event loop! //
// 为什么要回到stack， 因为回到stack才会consloe 东西 那么，这时候stack是不会等的。 有一个就出一个 下面的视频也有
https://www.youtube.com/watch?v=8aGhZQkoFbQ&list=RDQMlEeL_gAWOPo&start_radio=1&ab_channel=JSConf
[first round, second round, thrid round, four round, five round...]

So when you are using "var" the stack is empty and the i is ready being 5. 
But when you are using "let" the time will help to hold the i.....
*/
// Another way to change it
// for (var i = 0; i < 5 ; i ++){

//     (function (v){
//         setTimeout(() => { console.log(v) }, v*1000);
//     })(i);

// }

// /*************************************interview question */
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


/***JS day5 callback function & callback hell & Promise & My Promise ******/
// const getToDoFormJsonPlaceHolder = (id, callback) => {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       // Typical action to be performed when the document is ready:
//       callback(JSON.parse(xhttp.response));
//     }
//   };
//   xhttp.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
//   xhttp.send();
// }

// const print = (ele) => {
//   console.log(ele);
// }
// //you can not control the time when fetching the data. 
// // it is like settimeout(() => {}, random!!!! )
// getToDoFormJsonPlaceHolder(4, print);
// getToDoFormJsonPlaceHolder(15, print);
// getToDoFormJsonPlaceHolder(78, print);

// hold data then you dont need to define data. 这样做就会包函数进来。。
// getToDoFormJsonPlaceHolder(4, (data) => {print(data)});

// getToDoFormJsonPlaceHolder(4, (data) => {
//     print(data);
//     getToDoFormJsonPlaceHolder(15, (data) => {
//         print(data);
//     }); 
// });

// /////Promise & My Promise //////////
// const promise = new Promise((resolve, reject) => {
// console.log('hello');
// });


// //you can also write like this:
// //resolve and reject are two callback functions. 
// //three build in methods: then(),catch(),finally()
// new Promise((resolve, reject) => {
//     console.log('hello');
//     resolve('world');

// }).then((data)=>{
//     console.log(data);
//     return 'test1';
// }).then((data)=>{
//     console.log(data);
//     return 'test2';
// })
// /////// using promise
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

// const print = (ele) => {
//     console.log(ele);
// }
// this is callback hell again!!!!!!
// getToDoFormJsonPlaceHolder(4)
//     .then(data =>{
//         print(data);
//         return getToDoFormJsonPlaceHolder(15)
//         .then(data =>{
//             print(data);
//             return getToDoFormJsonPlaceHolder(78)
//             .then(data =>{
//                 print(data);
//              })
//          })
//     })
// this is the right promise way...
// getToDoFormJsonPlaceHolder(4)
//     .then(data => {
//         print(data); 
//         return getToDoFormJsonPlaceHolder(15);
//     })
//     .then(data => {
//         print(data); 
//         return getToDoFormJsonPlaceHolder(78);
//     })
//     .then(data => {
//         print(data); 

//     })

// //async await syntax sugar
//// build your Mypromise

// // Mypromise  final questions for fb and amazon interview
// class MyPromise{
//     // use an array to hold the callback method...
//     thencallbackqueue = [];

//     //make your life easier,换汤不换药。。
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


/********************************MyFetch*****/
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
