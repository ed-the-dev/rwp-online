// var forEach = function (array, callback, scope) {
//   for (var i = 0; i < array.length; i++) {
//     callback.call(scope, i, array[i]); // passes back stuff we need
//   }
// };
//
// var containers = document.querySelectorAll(".container");
//
// forEach(containers, function(index, value) {
//   value.addEventListener("click", function() {
//     this.classList.toggle("alert-is-shown");
//   });
// });

function myFunction() {
  // console
  document.getElementById("ham").classList.add("alert-is-shown")
  console.log(document.getElementById("ham"));
}
