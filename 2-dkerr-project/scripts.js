document.addEventListener('DOMContentLoaded', function() {

  /* character creation function */

  function characterCreate() {

    var select1 = document.getElementById('select-1');
    var select2 = document.getElementById('select-2');
    var select3 = document.getElementById('select-3');
    var select4 = document.getElementById('select-4');

    var element = function() {
      select1.style.background = '/img/element-fire.jpg';
      select2.style.background = '/img/element-water.jpg';
      select3.style.background = '/img/element-earth.jpg';
      select4.style.background = '/img/element-air.jpg';
    }

  }

  document.getElementById('initialize').onclick = characterCreate();

});
