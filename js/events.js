//define functions here
function getIt() {
$('p').on("click", function() {

  alert("Hey!");
  return;
});
}

function frameIt() {

  $('.tasty').on("load", function() {

const img = window.$('img')

  });
}

function pressIt(key) {

  $('form').on('keydown', function() {
  
    if (key.which == 71) {
      alert('G was pressed')
      return;
    }
  });


}


$(document).ready(function(){

getIt();

pressIt();
// call functions here

});
