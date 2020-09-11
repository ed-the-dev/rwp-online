var sections = document.getElementsByClassName("content");
var displayHeight = document.documentElement.clientHeight;


function scrolling() {
  var winScroll = document.getElementById("article").scrollTop;
  var height = document.getElementById("article").scrollHeight - document.getElementById("article").clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

  var welcome = document.getElementById('welcome').getBoundingClientRect();
  var services = document.getElementById('services').getBoundingClientRect();
  var aboutRwp = document.getElementById('about-rwp').getBoundingClientRect();
  var contact = document.getElementById('contact').getBoundingClientRect();
  var careers = document.getElementById('careers').getBoundingClientRect();
  var company = document.getElementById('company').getBoundingClientRect();

  // Ternary Operator
  // ( condition ) ? run this code : run this code instead

  let welcomeArea = (welcome.top < 0) ? welcome.bottom : height - welcome.bottom;
  let servicesArea = (services.top < 0) ? services.bottom : height - services.bottom;
  let aboutRwpArea = (aboutRwp.top < 0) ? aboutRwp.bottom : height - aboutRwp.bottom;
  let contactArea = (contact.top < 0) ? contact.bottom : height - contact.bottom;
  let careersArea = (careers.top < 0) ? careers.bottom : height - careers.bottom;
  let companyArea = (company.top < 0) ? company.bottom : height - company.bottom;

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

    }

  // A N I M A T E  O N  S C R O L L //

  for (var i = 0; i < sections.length; i++) {
    if (isSectinVp(sections.item(i))) {
      elements = sections.item(i).getElementsByClassName("show-on-scroll");
      for (var j = 0; j < elements.length; j++) {
        elements.item(j).classList.add('is-visible');
      }
    } else {
      elements = sections.item(i).getElementsByClassName("show-on-scroll");
      for (var j = 0; j < elements.length; j++) {
        elements.item(j).classList.remove('is-visible');
      }
    }
  }
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

function showMap() {
  console.log("Button Clicked");
  document.getElementById("withmap").classList.add("show")
}

function hideMap(){
  document.getElementById("withmap").classList.remove("show")
}

function isSectinVp(section){
  if(section.getBoundingClientRect().top > -1 && section.getBoundingClientRect().top <= displayHeight){
    return true;
  } else {
    return false;
  }
}
