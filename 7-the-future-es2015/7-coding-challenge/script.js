///////////////////////////////////////////////////////////
// 108: coding challenge
///////////////////////////////////////////////////////////
// small town administration in charge of parks and streets
// 3 parks and 4 streets
// each has a name and build year

/*
create final report with:

1 tree density of each park (divide trees by park area)
2 average age of each park (sum of all ages divided by number of parks)
3 name of park that has more than 1000 trees
4 total and average length of streets
5 size classification of all streets: tiny, small, normal, big, huge
  if size is unknown, default is normal

print data to console

ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc
*/

let parks = new Map();

parks.set('key', 'value');

parks.prototype.newFunction = function(key, value) {
  console.log(`new function says ${key} and ${value}`);
};

let street = new Map();

class Park {
  constructor(age, area, trees) {
    this.age = age;
    this.area = area;
    this.trees = trees;
  }

  calculateDensity() {
    console.log(this.trees / this.area);
  }
}

parks.key.newFunction();
