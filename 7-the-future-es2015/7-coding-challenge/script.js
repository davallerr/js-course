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

class Feature {
  constructor(name, yearBuilt) {
    this.name = name;
    this.yearBuilt = yearBuilt;
  }
}

class Park extends Feature {
  constructor(name, yearBuilt, area, trees) {
    super(name, yearBuilt);
    this.area = area;
    this.trees = trees;
  }

  treeDensity() {
    const density = Math.round(this.trees / this.area * 100) / 100;
    console.log(`The park ${this.name} density: ${density} trees per square mile`);
  }
}

class Street extends Feature {
  constructor(name, yearBuilt, length, size = 3) {
    super(name, yearBuilt);
    this.length = length;
    this.size = size;
  }

  streetSize() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(`The street ${this.name} is ${classification.get(this.size)}`);
  }
}

function calcAvg(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
  return [sum, Math.round(sum / arr.length * 100) / 100];
}

const parks = [ new Park('Park Park', 1794, 1.2, 821),
                new Park('Stark Park', 2011, 4.8, 2506),
                new Park('Quark Park', 2017, .1, 6)];

const streets = [ new Street('Drury Lane', 1820, 1.6, 5),
                  new Street('Mulholland Drive', 2001, 2.9, 4),
                  new Street('Hell Highway', 1979, 666),
                  new Street('Easy Street', 1968, .1, 1)];

function parkReport(parks) {
  console.log('//////////////PARKS//////////////');
  // density
  parks.forEach(el => el.treeDensity());
  // avg age
  const ages = parks.map(el => new Date().getFullYear() - el.yearBuilt);
  const [ageTotal, ageAvg] = calcAvg(ages);
  console.log(`${parks.length} parks with an average age of ${ageAvg} years`);
  // parks with >1k trees
  const i = parks.map(el => el.trees).findIndex(el => el >= 1000);
  console.log(`${parks[i].name} has more than 1,000 trees`);
}

function streetReport(streets) {
  console.log('//////////////STREETS//////////////');
  // total and avg length
  const [lengthTotal, lengthAvg] = calcAvg(streets.map(el => el.length));
  console.log(`${streets.length} streets with total length of ${lengthTotal} miles and average length of ${lengthAvg} miles`);
  // size classification
  streets.forEach(el => el.streetSize());
}

parkReport(parks);
streetReport(streets);
