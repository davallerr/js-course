// lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/


////////////////////////////////////////////////////////////////////////////////
// lecture: variables 2
/*
var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty-six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

//var lastName = prompt('What is the last name?');

//console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
*/


////////////////////////////////////////////////////////////////////////////////
// lecture: operators
/*
var now = 2017;
var birthYear = now - 26;

birthyear = now - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/


////////////////////////////////////////////////////////////////////////////////
// lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'no';

if(isMarried === 'yes') {
  console.log(name + ' is married!');
} else {
  console.log(name + ' will hopefully marry soon TT');
}

isMarried = false;


if(isMarried) {
  console.log('HECKIN YEAH!');
} else {
  console.log('NAH');
}


if(isMarried) {
  console.log('HECKIN YEAH!');
}

if(23 === '23') {
  console.log('something to print...');
}
*/


////////////////////////////////////////////////////////////////////////////////
// lecture: boolean logic and switch
/*
var age = 20;

if(age<20) {
  console.log('John is a teenager.');
} else if(age >= 20 && age < 30) {
  console.log('John is a young man.');
} else {
  console.log('John is a man.');
}

var job = 'teacher';

job = prompt('What does John do?');

switch(job) {
  case 'teacher':
    console.log('John teaches kids.');
    break;
  case 'driver':
    console.log('John drives a cab.');
    break;
  case 'cop':
    console.log('John fights crimes.');
    break;
  default:
    console.log('John does something else.');
}
*/


////////////////////////////////////////////////////////////////////////////////
// coding challenge: height and age game
/*
var playerOneHeight = prompt('What is Player One\'s height in centimeters?');
var playerOneAge = prompt('What is Player One\'s age?');
var playerOneScore = playerOneHeight + (playerOneAge * 5);
console.log('Player One score: ' + playerOneScore);

var playerTwoHeight = prompt('What is Player Two\'s height in centimeters?');
var playerTwoAge = prompt('What is Player Two\'s age?');
var playerTwoScore = playerTwoHeight + (playerTwoAge * 5);
console.log('Player Two score: ' + playerTwoScore);

var playerThreeHeight = prompt('What is Player Three\'s height in centimeters?');
var playerThreeAge = prompt('What is Player Three\'s age?');
var playerThreeScore = playerThreeHeight + (playerThreeAge * 5);
console.log('Player Three score: ' + playerThreeScore);

if(playerOneScore > playerTwoScore && playerOneScore > playerThreeScore) {
  console.log('Player One wins with ' + playerOneScore + ' points!');
} else if(playerTwoScore > playerOneScore && playerTwoScore > playerThreeScore) {
  console.log('Player Two wins with ' + playerTwoScore + ' points!');
} else if(playerThreeScore > playerOneScore && playerThreeScore > playerTwoScore) {
  console.log('Player Three wins with ' + playerThreeScore + ' points!');
} else if(playerOneScore === playerTwoScore && playerOneScore > playerThreeScore) {
  console.log('It\'s a draw between Player One and Player Two at ' + playerOneScore + ' points!');
} else if(playerOneScore === playerThreeScore && playerOneScore > playerTwoScore) {
  console.log('It\'s a draw between Player One and Player Three at ' + playerOneScore + ' points!');
} else if(playerTwoScore === playerThreeScore && playerTwoScore > playerOneScore) {
  console.log('It\'s a draw between Player Two and Player Three at ' + playerTwoScore + ' points!');
} else {
  console.log('idk what happened, contact your local dumb game support technician!');
}
*/


////////////////////////////////////////////////////////////////////////////////
// lecture: functions
/*
function calculateAge(yearOfBirth) {
  var age = 2017 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

console.log(ageJohn);
console.log(ageMike);
console.log(ageMary);

function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if(retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' years.');
  } else {
    console.log(name + ' is already retired.');
  }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/


////////////////////////////////////////////////////////////////////////////////
// lecture: statements and expressions
/*
// function statement: performs an action
function somFun(par) {
  // code
}

// function expression: produces a value/outcome
var someFun = function(par) {
  // code
}
*/


////////////////////////////////////////////////////////////////////////////////
// lecture: arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[1]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr');
john.pop();
john.shift();
console.log(john);

// alert(john.indexOf('Smith'));

if(john.indexOf('teacher') === -1) {
  console.log('John is not a teacher.');
}
*/


////////////////////////////////////////////////////////////////////////////////
// lecture: objects
/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();

jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/

////////////////////////////////////////////////////////////////////////////////
// lecture: objects and methods
/*
// v1.0

var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
    return 2017 - this.yearOfBirth;
  }
};

// console.log(john.calculateAge(1920));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);


// v2.0
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
    // return 2017 - this.yearOfBirth;
    this.age = 2017 - this.yearOfBirth;
  }
};

john.calculateAge();
console.log(john);

var mike = {
  yearOfBirth: 1950,
  calculateAge: function() {
    // return 2017 - this.yearOfBirth;
    this.age = 2017 - this.yearOfBirth;
  }
};

mike.calculateAge();
console.log(mike);
*/


////////////////////////////////////////////////////////////////////////////////
// lecture: loops
/*
for(var i=0; i<10; i++) {
  console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for(var i=0; i<names.length; i++) {
  console.log(names[i]);
}

for(var i = names.length - 1; i>=0; i--) {
  console.log(names[i]);
}

var i = 0;
while(i < names.length) {
  console.log(names[i]);
  i++;
}

for(var i=1; i<=5; i++) {
  console.log(i);

  if(i===3) {
    break;
  }
}

for(var i=1; i<=5; i++) {
  if(i===3) {
    continue;
  }

  console.log(i);
}
*/


////////////////////////////////////////////////////////////////////////////////
// code challenge 2: birth year arrays

var years = [1990, 1984, 2012, 2001, 1955];
var ages = [];

for(var i=0; i<years.length; i++) {
  ages.push(2017 - years[i]);
}
console.log(ages);

for(var i=0; i<ages.length; i++) {
  if(ages[i] >= 18) {
    console.log('Person ' + i + ' is of age at ' + ages[i] + ' years old.');
  } else {
    console.log('Person ' + i + ' is under age at ' + ages[i] + ' years old.');
  }
}

function printFullAge(yearsArr) {
  var ages = [];
  var ageBooleans = [];

  for(var i=0; i<yearsArr.length; i++) {
    ages.push(2017 - yearsArr[i]);
  }

  for(var i=0; i<ages.length; i++) {
    if(ages[i] >= 18) {
      console.log('Person ' + i + ' is of age at ' + ages[i] + ' years old.');
      ageBooleans.push(true);
    } else {
      console.log('Person ' + i + ' is under age at ' + ages[i] + ' years old.');
      ageBooleans.push(false);
    }
  }

  return ageBooleans;
};

var full_1 = printFullAge([2000, 1899, 1972]);
var full_2 = printFullAge([1968, 1993, 2013, 2007, 1989]);

console.log(full_1);
console.log(full_2);



////////////////////////////////////////////////////////////////////////////////
