

// Adding

var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter;}
})();

function myFunction(){
  document.getElementById("number").innerHTML = add();
}

// Subtracting


var minus = (function () {
  var counter = 0;
  return function () {counter -= 1; return counter;}
})();

function yourFunction(){
  document.getElementById("number").innerHTML = minus();
}
