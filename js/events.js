//define functions here
function getIt() {
$('p').on("click", function() {

  alert("Hey!");
  return;
});
}

function frameIt() {

  $('img').on("load", function() {

    $('img').append(".tasty")

  });
}

function pressIt() {
  var key = 71;
  $('form').on('keydown', function(key) {

    if (key.which == 71) {
      alert('G was pressed')
      return;
    }
  });

}

function submitIt() {

  $('form').on('submit', function() {

    alert("Your form is going to be submitted now.")
    return;
  })

}


$(document).ready(function() {

getIt();

pressIt();
// call functions here

});
