
// character creation variables
var element = '';
var weapon = '';
var familiar = '';

var selectHead = document.getElementById('select-head');
var selectImg1 = document.getElementById('select-1-img');
var selectCap1 = document.getElementById('select-1-cap');
var selectImg2 = document.getElementById('select-2-img');
var selectCap2 = document.getElementById('select-2-cap');
var selectImg3 = document.getElementById('select-3-img');
var selectCap3 = document.getElementById('select-3-cap');
var selectImg4 = document.getElementById('select-4-img');
var selectCap4 = document.getElementById('select-4-cap');
var resultCap = document.getElementById('result-cap');
var resultImg = document.getElementById('result-img');

// choose element function
function selectElement() {
  element = '';
  weapon = '';
  familiar = '';

  console.log('selecting element');
  console.log('element: ' + element);
  console.log('weapon: ' + weapon);
  console.log('familiar: ' + familiar);

  // populate options
  selectHead.innerHTML = 'Select Your Element';
  selectImg1.setAttribute('src', 'img/element-fire.jpg');
  selectCap1.innerHTML = 'FIRE';
  selectImg2.setAttribute('src', 'img/element-water.jpg');
  selectCap2.innerHTML = 'WATER';
  selectImg3.setAttribute('src', 'img/element-earth.jpg');
  selectCap3.innerHTML = 'EARTH';
  selectImg4.setAttribute('src', 'img/element-air.jpg');
  selectCap4.innerHTML = 'AIR';

  // set variables based on image click
  selectImg1.onclick = function() {element = 'fire';}
  selectImg2.onclick = function() {element = 'water';}
  selectImg3.onclick = function() {element = 'earth';}
  selectImg4.onclick = function() {element = 'air';}
}

// choose weapon function
function selectWeapon() {
  console.log('selecting weapon');
  console.log('element: ' + element);
  console.log('weapon: ' + weapon);
  console.log('familiar: ' + familiar);

  // populate options
  selectHead.innerHTML = 'Select Your Weapon';
  selectImg1.setAttribute('src', 'img/weapon-sword.jpg');
  selectCap1.innerHTML = 'SWORD';
  selectImg2.setAttribute('src', 'img/weapon-axe.jpg');
  selectCap2.innerHTML = 'AXE';
  selectImg3.setAttribute('src', 'img/weapon-staff.jpg');
  selectCap3.innerHTML = 'STAFF';
  selectImg4.setAttribute('src', 'img/weapon-dagger.jpg');
  selectCap4.innerHTML = 'DAGGER';

  // set variables based on image click
  selectImg1.onclick = function() {weapon = 'sword';}
  selectImg2.onclick = function() {weapon = 'axe';}
  selectImg3.onclick = function() {weapon = 'staff';}
  selectImg4.onclick = function() {weapon = 'dagger';}
}

// choose familiar function
function selectFamiliar() {
  console.log('selecting familiar');
  console.log('element: ' + element);
  console.log('weapon: ' + weapon);
  console.log('familiar: ' + familiar);

  // populate options
  selectHead.innerHTML = 'Select Your Familiar';
  selectImg1.setAttribute('src', 'img/familiar-wolf.jpg');
  selectCap1.innerHTML = 'WOLF';
  selectImg2.setAttribute('src', 'img/familiar-tiger.jpg');
  selectCap2.innerHTML = 'TIGER';
  selectImg3.setAttribute('src', 'img/familiar-bear.jpg');
  selectCap3.innerHTML = 'BEAR';
  selectImg4.setAttribute('src', 'img/familiar-ghost.jpg');
  selectCap4.innerHTML = 'GHOST';

  // set variables based on image click
  selectImg1.onclick = function() {familiar = 'wolf';}
  selectImg2.onclick = function() {familiar = 'tiger';}
  selectImg3.onclick = function() {familiar = 'bear';}
  selectImg4.onclick = function() {familiar = 'ghost';}
}

// show result function
function showResult() {
  console.log('showing result...');
  console.log('element: ' + element);
  console.log('weapon: ' + weapon);
  console.log('familiar: ' + familiar);
  console.log(element + weapon + familiar);
  document.getElementById('result-head').innerHTML = 'Welcome, Hero';

  // displays results
  resultCap.innerHTML = 'Master of all things ' + element + ', ' + weapon + ', and ' + familiar;

  // retrieve final avatar image
  resultImg.setAttribute('src', 'img/results/' + element + '-' + weapon + '-' + familiar + '.jpg');

  /**********************************************************************
  proof of my foolishness

  // air
  if(element + weapon + familiar === 'AIRAXEBEAR') {
    resultImg.setAttribute('src', 'img/results/air-axe-bear.jpg');
  }
  if(element + weapon + familiar === 'AIRAXEGHOST') {
    resultImg.setAttribute('src', 'img/results/air-axe-ghost.jpg');
  }
  if(element + weapon + familiar === 'AIRAXETIGER') {
    resultImg.setAttribute('src', 'img/results/air-axe-tiger.jpg');
  }
  if(element + weapon + familiar === 'AIRAXEWOLF') {
    resultImg.setAttribute('src', 'img/results/air-axe-wolf.jpg');
  }
  if(element + weapon + familiar === 'AIRDAGGERBEAR') {
    resultImg.setAttribute('src', 'img/results/air-dagger-bear.jpg');
  }
  if(element + weapon + familiar === 'AIRDAGGERGHOST') {
    resultImg.setAttribute('src', 'img/results/air-dagger-ghost.jpg');
  }
  if(element + weapon + familiar === 'AIRDAGGERTIGER') {
    resultImg.setAttribute('src', 'img/results/air-dagger-tiger.jpg');
  }
  if(element + weapon + familiar === 'AIRDAGGERWOLF') {
    resultImg.setAttribute('src', 'img/results/air-dagger-wolf.jpg');
  }
  if(element + weapon + familiar === 'AIRSTAFFBEAR') {
    resultImg.setAttribute('src', 'img/results/air-staff-bear.jpg');
  }
  if(element + weapon + familiar === 'AIRSTAFFGHOST') {
    resultImg.setAttribute('src', 'img/results/air-staff-ghost.jpg');
  }
  if(element + weapon + familiar === 'AIRSTAFFTIGER') {
    resultImg.setAttribute('src', 'img/results/air-staff-tiger.jpg');
  }
  if(element + weapon + familiar === 'AIRSTAFFWOLF') {
    resultImg.setAttribute('src', 'img/results/air-staff-wolf.jpg');
  }
  if(element + weapon + familiar === 'AIRSWORDBEAR') {
    resultImg.setAttribute('src', 'img/results/air-sword-bear.jpg');
  }
  if(element + weapon + familiar === 'AIRSWORDGHOST') {
    resultImg.setAttribute('src', 'img/results/air-sword-ghost.jpg');
  }
  if(element + weapon + familiar === 'AIRSWORDTIGER') {
    resultImg.setAttribute('src', 'img/results/air-sword-tiger.jpg');
  }
  if(element + weapon + familiar === 'AIRSWORDWOLF') {
    resultImg.setAttribute('src', 'img/results/air-sword-wolf.jpg');
  }

  // earth
  if(element + weapon + familiar === 'EARTHAXEBEAR') {
    resultImg.setAttribute('src', 'img/results/earth-axe-bear.jpg');
  }
  if(element + weapon + familiar === 'EARTHAXEGHOST') {
    resultImg.setAttribute('src', 'img/results/earth-axe-ghost.jpg');
  }
  if(element + weapon + familiar === 'EARTHAXETIGER') {
    resultImg.setAttribute('src', 'img/results/earth-axe-tiger.jpg');
  }
  if(element + weapon + familiar === 'EARTHAXEWOLF') {
    resultImg.setAttribute('src', 'img/results/earth-axe-wolf.jpg');
  }
  if(element + weapon + familiar === 'EARTHDAGGERBEAR') {
    resultImg.setAttribute('src', 'img/results/earth-dagger-bear.jpg');
  }
  if(element + weapon + familiar === 'EARTHDAGGERGHOST') {
    resultImg.setAttribute('src', 'img/results/earth-dagger-ghost.jpg');
  }
  if(element + weapon + familiar === 'EARTHDAGGERTIGER') {
    resultImg.setAttribute('src', 'img/results/earth-dagger-tiger.jpg');
  }
  if(element + weapon + familiar === 'EARTHDAGGERWOLF') {
    resultImg.setAttribute('src', 'img/results/earth-dagger-wolf.jpg');
  }
  if(element + weapon + familiar === 'EARTHSTAFFBEAR') {
    resultImg.setAttribute('src', 'img/results/earth-staff-bear.jpg');
  }
  if(element + weapon + familiar === 'EARTHSTAFFGHOST') {
    resultImg.setAttribute('src', 'img/results/earth-staff-ghost.jpg');
  }
  if(element + weapon + familiar === 'EARTHSTAFFTIGER') {
    resultImg.setAttribute('src', 'img/results/earth-staff-tiger.jpg');
  }
  if(element + weapon + familiar === 'EARTHSTAFFWOLF') {
    resultImg.setAttribute('src', 'img/results/earth-staff-wolf.jpg');
  }
  if(element + weapon + familiar === 'EARTHSWORDBEAR') {
    resultImg.setAttribute('src', 'img/results/earth-sword-bear.jpg');
  }
  if(element + weapon + familiar === 'EARTHSWORDGHOST') {
    resultImg.setAttribute('src', 'img/results/earth-sword-ghost.jpg');
  }
  if(element + weapon + familiar === 'EARTHSWORDTIGER') {
    resultImg.setAttribute('src', 'img/results/earth-sword-tiger.jpg');
  }
  if(element + weapon + familiar === 'EARTHSWORDWOLF') {
    resultImg.setAttribute('src', 'img/results/earth-sword-wolf.jpg');
  }

  // fire
  if(element + weapon + familiar === 'FIREAXEBEAR') {
    resultImg.setAttribute('src', 'img/results/fire-axe-bear.jpg');
  }
  if(element + weapon + familiar === 'FIREAXEGHOST') {
    resultImg.setAttribute('src', 'img/results/fire-axe-ghost.jpg');
  }
  if(element + weapon + familiar === 'FIREAXETIGER') {
    resultImg.setAttribute('src', 'img/results/fire-axe-tiger.jpg');
  }
  if(element + weapon + familiar === 'FIREAXEWOLF') {
    resultImg.setAttribute('src', 'img/results/fire-axe-wolf.jpg');
  }
  if(element + weapon + familiar === 'FIREDAGGERBEAR') {
    resultImg.setAttribute('src', 'img/results/fire-dagger-bear.jpg');
  }
  if(element + weapon + familiar === 'FIREDAGGERGHOST') {
    resultImg.setAttribute('src', 'img/results/fire-dagger-ghost.jpg');
  }
  if(element + weapon + familiar === 'FIREDAGGERTIGER') {
    resultImg.setAttribute('src', 'img/results/fire-dagger-tiger.jpg');
  }
  if(element + weapon + familiar === 'FIREDAGGERWOLF') {
    resultImg.setAttribute('src', 'img/results/fire-dagger-wolf.jpg');
  }
  if(element + weapon + familiar === 'FIRESTAFFBEAR') {
    resultImg.setAttribute('src', 'img/results/fire-staff-bear.jpg');
  }
  if(element + weapon + familiar === 'FIRESTAFFGHOST') {
    resultImg.setAttribute('src', 'img/results/fire-staff-ghost.jpg');
  }
  if(element + weapon + familiar === 'FIRESTAFFTIGER') {
    resultImg.setAttribute('src', 'img/results/fire-staff-tiger.jpg');
  }
  if(element + weapon + familiar === 'FIRESTAFFWOLF') {
    resultImg.setAttribute('src', 'img/results/fire-staff-wolf.jpg');
  }
  if(element + weapon + familiar === 'FIRESWORDBEAR') {
    resultImg.setAttribute('src', 'img/results/fire-sword-bear.jpg');
  }
  if(element + weapon + familiar === 'FIRESWORDGHOST') {
    resultImg.setAttribute('src', 'img/results/fire-sword-ghost.jpg');
  }
  if(element + weapon + familiar === 'FIRESWORDTIGER') {
    resultImg.setAttribute('src', 'img/results/fire-sword-tiger.jpg');
  }
  if(element + weapon + familiar === 'FIRESWORDWOLF') {
    resultImg.setAttribute('src', 'img/results/fire-sword-wolf.jpg');
  }

  // water
  if(element + weapon + familiar === 'WATERAXEBEAR') {
    resultImg.setAttribute('src', 'img/results/water-axe-bear.jpg');
  }
  if(element + weapon + familiar === 'WATERAXEGHOST') {
    resultImg.setAttribute('src', 'img/results/water-axe-ghost.jpg');
  }
  if(element + weapon + familiar === 'WATERAXETIGER') {
    resultImg.setAttribute('src', 'img/results/water-axe-tiger.jpg');
  }
  if(element + weapon + familiar === 'WATERAXEWOLF') {
    resultImg.setAttribute('src', 'img/results/water-axe-wolf.jpg');
  }
  if(element + weapon + familiar === 'WATERDAGGERBEAR') {
    resultImg.setAttribute('src', 'img/results/water-dagger-bear.jpg');
  }
  if(element + weapon + familiar === 'WATERDAGGERGHOST') {
    resultImg.setAttribute('src', 'img/results/water-dagger-ghost.jpg');
  }
  if(element + weapon + familiar === 'WATERDAGGERTIGER') {
    resultImg.setAttribute('src', 'img/results/water-dagger-tiger.jpg');
  }
  if(element + weapon + familiar === 'WATERDAGGERWOLF') {
    resultImg.setAttribute('src', 'img/results/water-dagger-wolf.jpg');
  }
  if(element + weapon + familiar === 'WATERSTAFFBEAR') {
    resultImg.setAttribute('src', 'img/results/water-staff-bear.jpg');
  }
  if(element + weapon + familiar === 'WATERSTAFFGHOST') {
    resultImg.setAttribute('src', 'img/results/water-staff-ghost.jpg');
  }
  if(element + weapon + familiar === 'WATERSTAFFTIGER') {
    resultImg.setAttribute('src', 'img/results/water-staff-tiger.jpg');
  }
  if(element + weapon + familiar === 'WATERSTAFFWOLF') {
    resultImg.setAttribute('src', 'img/results/water-staff-wolf.jpg');
  }
  if(element + weapon + familiar === 'WATERSWORDBEAR') {
    resultImg.setAttribute('src', 'img/results/water-sword-bear.jpg');
  }
  if(element + weapon + familiar === 'WATERSWORDGHOST') {
    resultImg.setAttribute('src', 'img/results/water-sword-ghost.jpg');
  }
  if(element + weapon + familiar === 'WATERSWORDTIGER') {
    resultImg.setAttribute('src', 'img/results/water-sword-tiger.jpg');
  }
  if(element + weapon + familiar === 'WATERSWORDWOLF') {
    resultImg.setAttribute('src', 'img/results/water-sword-wolf.jpg');
  }
  **********************************************************************/
}

// check step function
function checkStep() {
  console.log('checking step...');
  if(element === '') {
    selectElement();
  } else if(weapon === '') {
    selectWeapon();
  } else if(familiar === '') {
    selectFamiliar();
  } else {
    showResult();
  }
}
