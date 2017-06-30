// section 7 - the future ecmascript2015


///////////////////////////////////////////////////////////
// 95: let and const
///////////////////////////////////////////////////////////
// function-scoped vs block-scoped
// block: code wrapped in curly braces
// let can be declared and then set in different block and still be used
// const can't be declared without being initialized
// hoisting works differently
// variables no longer created and set as undefined before they are declared
// temporal dead zone: variables are hoisted, but can't be accessed at all

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

/*
// ES5
function driversLicense5(passedTest) {
  if(passedTest) {
    console.log(firstName);
    var firstName = 'John';
    var yearOfBirth = 1990;
  }
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicense5(true);

// ES6 console.log errors because variables defined in if block
function driversLicense6(passedTest) {
  if(passedTest) {
    let firstName = 'John';
    const yearOfBirth = 1990;
  }
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicense6(true);

// ES6 let works because declared outside of if block
// ES6 const error can't be declared without being initialized
function driversLicense6(passedTest) {
  console.log(firstName);
  let firstName;
  const yearOfBirth = 1990;
  if(passedTest) {
    firstName = 'John';
  }
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicense6(true);
*/


// ES6 block-scope variables - they are actually 2 different variables
/*
let i = 23;
for(let i=0; i<5; i++) {
  console.log(i);
}
console.log(i);
*/


///////////////////////////////////////////////////////////
// 96: blocks and IIFEs
///////////////////////////////////////////////////////////

// block-scoping allows for much simpler data privacy

/*
// ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}
console.log(a + b);
console.log(c);

// ES5
(function() {
  var c = 3;
})();
*/


///////////////////////////////////////////////////////////
// 97: strings in ES6
///////////////////////////////////////////////////////////

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2017 - year;
}

// template literals
// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');
// ES6
// back-ticks let you use ${} to insert variables in strings
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

// new string methods
// startsWith
// endsWith
// includes
// repeat
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));
*/


///////////////////////////////////////////////////////////
// 98: arrow functions
///////////////////////////////////////////////////////////

/*
const years = [1900, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
  return 2017 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2017 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2017 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
*/


///////////////////////////////////////////////////////////
// 99: arrow functions2 - lexical 'this' keyword
///////////////////////////////////////////////////////////
// arrow functions don't get their own 'this' keyword
// they use the one in the function they're written in


/*
// ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    // ES5 workaround so 'this' doesn't point to window object
    var self = this;
    document.querySelector('.green').addEventListener('click', function() {
      // because this event listener function isn't a method of the object, just a regular function call, the 'this' keyword points to the global object (window object in this case)
      // var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  }
}

box5.clickMe();
*/

/*
// ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}

// box6.clickMe();
*/

// using arrow function to define object's method keeps it from having its own 'this' keyword
/*
const box66 = {
  color: 'green',
  position: 1,
  clickMe: () => {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}

box66.clickMe();
*/

/*
function Person(name) {
  this.name = name;
}
*/

/*
// ES5
// calling map anonymous function leads to 'this' leading to global object (window)
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(function(el) {
    return this.name + ' is friends with ' + el;
  });
  console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);
*/

/*
// ES5
// use bind method to create copy of function with 'this' variable manually defined
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(function(el) {
    return this.name + ' is friends with ' + el;
  }.bind(this));
  console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);
*/

/*
// ES6
// function inside of map method no longer has its own 'this' keyword
// So it pulls it from its surroundings, the friends method for the Person object
Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map(el => `${this.name} is friends with ${el}`);
  console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('Mike').myFriends6(friends);
*/


///////////////////////////////////////////////////////////
// 100: destructuring
///////////////////////////////////////////////////////////
// extract data out of data structure or array

/*
// ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];
*/

/*
// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
  firstName: 'John',
  lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/


///////////////////////////////////////////////////////////
// 101: arrays in ES6
///////////////////////////////////////////////////////////
// get array from node list: Array.from()
// new kind of loop: for(const cur in array)
// new method: find and findIndex

/*
const boxes = document.querySelectorAll('.box');

// getting array from node list

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = 'dodgerblue';
});


// ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/


// looping over array

/*
// ES5
for(var i=0; i<boxesArr5.length; i++) {
  if(boxesArr5[i].className === 'box blue') {
    continue;
  }
  boxesArr5[i].textContent = 'I changed to blue!';
}

// ES6
for(const cur of boxesArr6) {
  if(cur.className.includes('blue')) {
    continue;
  }
  cur.textContent = 'I changed to blue!';
}
*/


// finding stuff in arrays
/*
// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
  return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/


///////////////////////////////////////////////////////////
// 102: spread operator
///////////////////////////////////////////////////////////
// expand elements of an array in arguments and function calls

/*
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
// ... expands array into its components
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/


///////////////////////////////////////////////////////////
// 103: rest parameters
///////////////////////////////////////////////////////////
// allow us to pass arbitrary number of arguments into function and use them in it
// looks the same as spread operator, but does the opposite
// receives single values and transforms them into an array when a function with multiple parameters is called

/*
// ES5
function isFullAge5() {
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function(cur) {
    console.log((2017 - cur) >= 18);
  });
}

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);


// ES6
function isFullAge6(...years) {
  years.forEach(cur => console.log((2017 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);
*/


// when you know one of the parameters, but unknown amount of other parameters
/*
// ES5
function isFullAge5(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1);
  argsArr.forEach(function(cur) {
    console.log((2017 - cur) >= limit);
  });
}

isFullAge5(16, 1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);


// ES6
function isFullAge6(limit, ...years) {
  years.forEach(cur => console.log((2017 - cur) >= limit));
}

isFullAge6(21, 1990, 1999, 1965, 2016, 1987);
*/


///////////////////////////////////////////////////////////
// 104: default parameters
///////////////////////////////////////////////////////////
// can now set default value within parameter list
// no need for if statement to check if it's undefined

/*
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

  lastName === undefined ? lastName = 'Smith' : lastName = lastName;
  nationality === undefined ? nationality = 'American' : naitionality = nationality;

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
console.log(john);

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
console.log(emily);
*/

/*
// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
console.log(john);

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
console.log(emily);
*/


///////////////////////////////////////////////////////////
// 105: maps
///////////////////////////////////////////////////////////
// new data structure for hash map key:value data structure
// don't have to use object for them
// therefore no longer limited to strings for keys
// maps are iterable, loopable
// easy to remove data from map without splice business

/*
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer, idiot.');
question.set(false, 'Wrong, try again, genius.');

console.log(question.get('question'));
// console.log(question.size);

if(question.has(4)) {
  // question.delete(4);
  // console.log('Answer 4 is here');
}

// question.clear();

// question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

// entries business also works for arrays

for(let [key, value] of question.entries()) {
  if(typeof(key) === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));
*/


///////////////////////////////////////////////////////////
// 106: classes
///////////////////////////////////////////////////////////
// synthetic sugar for prototypical inheritance
// easier to make objects based on blueprints
// class definitions are not hoisted
// cannot add properties to classes

/*
// ES5
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');


// ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }

  static greeting() {
    console.log('Hey there!');
  }
}

const john6 = new Person6('John', 1990, 'teacher');


john5.calculateAge();
john6.calculateAge();

Person6.greeting();
*/


///////////////////////////////////////////////////////////
// 107: classes with subclasses
///////////////////////////////////////////////////////////
// extends and super

/*
// ES5
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
  this.medals++;
  console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


// ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6('John', 1990, 'simmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
*/
