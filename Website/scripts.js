window.onscroll = function() {progressIndicator()};

function progressIndicator() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var displayHeight = document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("myBar").style.width = scrolled + "%";
// document.getElementById("logotopright").style.opacity = winScroll/displayHeight;
// console.log(winScroll);

var welcome = document.getElementById('welcome').getBoundingClientRect();
var aboutRwp = document.getElementById('about-rwp').getBoundingClientRect();
var services = document.getElementById('services').getBoundingClientRect();

console.log(
  "welcome\nwelcome.y = " + welcome.y + "\nwelcome.top = " + welcome.top+ "\nwelcome.bottom = " + welcome.bottom )
  // "\naboutRwp\naboutRwp.y = " + aboutRwp.y + "\naboutRwp.top = " + aboutRwp.top+ "\naboutRwp.bottom = " + aboutRwp.bottom)

// console.log(displayHeight)

// Ternary Operator
// ( condition ) ? run this code : run this code instead

console.log("\nHeight = " + height);

let welcomeArea = (welcome.top < 0) ? welcome.bottom : height - welcome.bottom;
let aboutRwpArea = (aboutRwp.top < 0) ? aboutRwp.bottom : height - aboutRwp.bottom;
let servicesArea = (services.top < 0) ? services.bottom : height - services.bottom;

console.log("\nwelcomeArea = " + welcomeArea);
console.log("\naboutRwpArea = " + aboutRwpArea);

let areas = [welcomeArea, aboutRwpArea, servicesArea];

let section = indexOfMax(areas);

// var sectionName;

switch (section) {
  case 0: // welcome
    // sectionName = "snwelcome";
    // document.getElementById("snwelcome").style.textDecoration = "underline";
    // document.getElementById("snabout-rwp").style.textDecoration = "none";
    document.getElementById("snwelcome").classList.add('current');
    document.getElementById("snabout-rwp").classList.remove('current');
    break;

  case 1: // aboutRwp
    // document.getElementById("snwelcome").style.textDecoration = "none";
    // document.getElementById("snabout-rwp").style.textDecoration = "underline";
    document.getElementById("snwelcome").classList.remove('current');
    document.getElementById("snabout-rwp").classList.add('current');
    document.getElementById("snservices").classList.remove('current');
    break;

  case 2: // services
    document.getElementById("snabout-rwp").classList.remove('current');
    document.getElementById("snservices").classList.add('current');
    // document.getElementById("snservices").classList.remove('current');

  // default:
}





  // I need the height of the display next. Then calculate which box is taking up the most space on the display.

}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";}


function indexOfMax(arr) {

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }
  return maxIndex;
}



// var about_rwp = document.getElementById('about-rwp');

// window.onscroll = function(){navigationEmph()};
//
// function navigationEmph(){
//
//
//   // console.log(boundin.top - bounding.bottom);
//
//
//

//
//   )
// }
