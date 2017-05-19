
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
