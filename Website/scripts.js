window.onscroll = function() {progressIndicator()};

function progressIndicator() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var displayHeight = document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("myBar").style.width = scrolled + "%";

var welcome = document.getElementById('welcome').getBoundingClientRect();
var services = document.getElementById('services').getBoundingClientRect();
var aboutRwp = document.getElementById('about-rwp').getBoundingClientRect();
var contact = document.getElementById('contact').getBoundingClientRect();
var careers = document.getElementById('careers').getBoundingClientRect();
var company = document.getElementById('company').getBoundingClientRect();


console.log(
  "welcome\nwelcome.y = " + welcome.y + "\nwelcome.top = " + welcome.top+ "\nwelcome.bottom = " + welcome.bottom )
  // "\naboutRwp\naboutRwp.y = " + aboutRwp.y + "\naboutRwp.top = " + aboutRwp.top+ "\naboutRwp.bottom = " + aboutRwp.bottom)


// Ternary Operator
// ( condition ) ? run this code : run this code instead

let welcomeArea = (welcome.top < 0) ? welcome.bottom : height - welcome.bottom;
let servicesArea = (services.top < 0) ? services.bottom : height - services.bottom;
let aboutRwpArea = (aboutRwp.top < 0) ? aboutRwp.bottom : height - aboutRwp.bottom;
let contactArea = (contact.top < 0) ? contact.bottom : height - contact.bottom;
let careersArea = (careers.top < 0) ? careers.bottom : height - careers.bottom;
let companyArea = (company.top < 0) ? company.bottom : height - company.bottom;



console.log("\nHeight = " + height);
console.log("\nwelcomeArea = " + welcomeArea);
console.log("\naboutRwpArea = " + aboutRwpArea);

let areas = [welcomeArea, servicesArea, aboutRwpArea, contactArea, careersArea, companyArea];
let section = indexOfMax(areas);

switch (section) {
  case 0: // welcome
    document.getElementById("snwelcome").classList.add('current');
    document.getElementById("snservices").classList.remove('current');
    break;

  case 1: // services
    document.getElementById("snwelcome").classList.remove('current');
    document.getElementById("snservices").classList.add('current');
    document.getElementById("snabout-rwp").classList.remove('current');
    break;

  case 2: // aboutRwp
    document.getElementById("snservices").classList.remove('current');
    document.getElementById("snabout-rwp").classList.add('current');
    document.getElementById("sncontact").classList.remove('current');
    break;

  case 3: // contact
    document.getElementById("snabout-rwp").classList.remove('current');
    document.getElementById("sncontact").classList.add('current');
    document.getElementById("sncareers").classList.remove('current');
    break;

  case 4: // careers
    document.getElementById("sncontact").classList.remove('current');
    document.getElementById("sncareers").classList.add('current');
    document.getElementById("sncompany").classList.remove('current');
    break;

  case 5: // company
    document.getElementById("sncareers").classList.remove('current');
    document.getElementById("sncompany").classList.add('current');
    break;


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
