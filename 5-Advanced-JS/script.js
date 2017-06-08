// 5-advanced-js


////////////////////////////////////////////////////
// lecture 52: function constructor
////////////////////////////////////////////////////

/*
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() {
  console.log(2017 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log('john ' + john.lastName);
console.log('jane ' + jane.lastName);
console.log('mark ' + mark.lastName);
*/


////////////////////////////////////////////////////
// lecture 53: prototype chain in console
////////////////////////////////////////////////////


////////////////////////////////////////////////////
// lecture 54: creating objects object.create
////////////////////////////////////////////////////

/*
var personProto = {
  calculateAge: function() {
    console.log(2017 - this.yearOfBirth);
  }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: {value: 'Jane'},
  yearOfBirth: {value: 1969},
  job: {value: 'designer'}
});
*/


////////////////////////////////////////////////////
// lecture 55: primitives vs objects
////////////////////////////////////////////////////

/*
var a = 23;
var b = a;
a = 46;

// primitives
// b is not affected by change of variable a
// primitive value was copied and assigned, not continually referenced
console.log(a);
console.log(b);

// objects
var obj1 = {
  name: 'John',
  age: 26
}

// obj2 is a reference to obj1, not a new object
// both obj1 and obj2 are just references to the object content in the memory
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// functions
var age = 27;
var obj = {
  name: 'David',
  city: 'Portland'
};

// age cannot be changed by function because it holds a primitive
// object value can be changed because it is a reference
function change(a, b) {
  a = 30;
  b.city = 'Pal Around Town';
}

change(age, obj);
console.log(age);
console.log(obj.city);
*/


////////////////////////////////////////////////////
// lecture 56: passing functions as arguments
////////////////////////////////////////////////////

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for(var i=0; i<arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

// callback functions -- meant to be called as argument of another function
function calculateAge(el) {
  return 2017 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if(el >= 18 && el <= 81) {
    return Math.round(206.9 - (.67 * el));
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(years);
console.log(ages);
console.log(fullAges);
console.log(rates);
*/


////////////////////////////////////////////////////
// lecture 57: functions returning functions
////////////////////////////////////////////////////

/*
function interviewQuestion(job) {
  if(job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if(job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function(name) {
      console.log('Hello ' + name +  ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

// collapsed in one call, evaluated left to right
// first returns the teacherQuestion function and immediately calls it with Mark as argument
interviewQuestion('teacher')('Mark');
*/

////////////////////////////////////////////////////
// lecture 58: immediately invoked function expressions (IIFE)
////////////////////////////////////////////////////
// creates private scope to perform an action immediately without its data accessible from outside
// data privacy, and doesn't interfere with outside variables

/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();


// IIFE
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// console.log(score);

(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
*/


////////////////////////////////////////////////////
// lecture 59: closures
////////////////////////////////////////////////////
// retirement function runs, returning the anonymous function, and is popped off execution stack
// resulting anonymous function is stored in retirementUS variable
// invoking retirementUS calls that anonymous function
// anonymous function is still able to access parameters and variables declared in the scope of the retirement function, despite the retirement function having stopped its execution

// closure summary
// an inner function always has access to the variables and parameters of its outer function, even after the outer function has returned

/*
function retirement(retirementAge) {
  var a = ' years left until retirement';
  return function(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1989);
retirementGermany(1989);
retirementIceland(1989);

// retirement(66)(1989);

// interview questions function using closures
function interview(job) {
  return function(name) {
    if(job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else if(job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else {
      console.log('Hello ' + name +  ', what do you do?');
    }
  }
}

interview('teacher')('David');
*/


////////////////////////////////////////////////////
// lecture 60: bind, call, and apply
////////////////////////////////////////////////////

/*
var david = {
  name: 'David',
  age: 28,
  job: 'designer',
  presentation: function(style, timeOfDay) {
    if(style === 'formal') {
      console.log('Good ' + timeOfDay + ', ladies and gentlemen. I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
    } else if(style === 'friendly') {
      console.log('Hey! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '!');
    }
  }
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'boozehound'
};

david.presentation('formal', 'morning');
david.presentation('friendly', 'afternoon');

// the call method allows the first argument given to set the 'this' variable in the method
// here it changes 'this' in the presentation method from 'David' to 'Emily'
david.presentation.call(emily, 'friendly', 'evening');

// the apply method accepts arguments as an array
// will not work with how the presentation method is currently written
david.presentation.apply(emily, ['friendly', 'evening']);

// the bind method doesn't immediately call the function, but makes a copy to store it somewhere
// this uses bind to do something called carrying, where we make a function based on another function but with some preset parameters
var davidFriendly = david.presentation.bind(david, 'friendly');

davidFriendly('luncheon');
davidFriendly('night');

var emilyFormal = david.presentation.bind(emily, 'formal');

emilyFormal('boozy brunch');


// use bind to create callback function with preset argument
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for(var i=0; i<arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2017 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

// creates copy of isFullAge function with preset limit age of 20
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/
