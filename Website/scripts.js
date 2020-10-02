// var sections = document.getElementsByClassName("content");
var displayHeight = document.documentElement.clientHeight;
var height = document.getElementById("article").scrollHeight - document.getElementById("article").clientHeight;
let currentSec = 'welcome';


// viewport height a bit funky but will be easily amended when I set the height of the header in pixels

function scrolling() {
  var winScroll = document.getElementById("article").scrollTop;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

  adjSects = getSections(currentSec);

  // console.log(adjSects);

  var bbs = [];
  var areas = [];
  for (var i = 0; i <adjSects.length; i++){
    // console.log(adjSects[i]);
    bbs[i] = document.getElementById(adjSects[i]).getBoundingClientRect();
    areas[i] = (bbs[i].top < 64) ? bbs[i].bottom - 64 : displayHeight - bbs[i].top - 64;
  }

  let section = adjSects[indexOfMax(areas)];

  if (section == currentSec){
    // do nothing
  } else {
    currentSec = section;

    console.log("Section = " + section);

    switch (section) {
      case 'welcome': // welcome
        document.getElementById("snwelcome").classList.add('current');
        document.getElementById("snservices").classList.remove('current');

        elements = document.getElementById('welcome').getElementsByClassName("show-on-scroll");
        for (var j = 0; j < elements.length; j++) {
          elements.item(j).classList.add('is-visible');
        }

        elements = document.getElementById('services').getElementsByClassName("show-on-scroll");
        for (var j = 0; j < elements.length; j++) {
          elements.item(j).classList.remove('is-visible');
        }

        break;

      case 'services': // services
        document.getElementById("snwelcome").classList.remove('current');
        document.getElementById("snservices").classList.add('current');
        document.getElementById("snabout-rwp").classList.remove('current');

        elements = document.getElementById('welcome').getElementsByClassName("show-on-scroll");
        for (var j = 0; j < elements.length; j++) {
          elements.item(j).classList.remove('is-visible');
        }

        elements = document.getElementById('services').getElementsByClassName("show-on-scroll");
        for (var j = 0; j < elements.length; j++) {
          elements.item(j).classList.add('is-visible');
        }

        elements = document.getElementById('about-rwp').getElementsByClassName("show-on-scroll");
        for (var j = 0; j < elements.length; j++) {
          elements.item(j).classList.remove('is-visible');
        }

        break;

      case 'about-rwp': // aboutRwp
        document.getElementById("snservices").classList.remove('current');
        document.getElementById("snabout-rwp").classList.add('current');
        document.getElementById("sncontact").classList.remove('current');

        elements = document.getElementById('services').getElementsByClassName("show-on-scroll");
        for (var j = 0; j < elements.length; j++) {
          elements.item(j).classList.remove('is-visible');
        }

        elements = document.getElementById('about-rwp').getElementsByClassName("show-on-scroll");
        for (var j = 0; j < elements.length; j++) {
          elements.item(j).classList.add('is-visible');
        }

        elements = document.getElementById('contact').getElementsByClassName("show-on-scroll");
        for (var j = 0; j < elements.length; j++) {
          elements.item(j).classList.remove('is-visible');
        }

        break;

      case 'contact': // contact
        document.getElementById("snabout-rwp").classList.remove('current');
        document.getElementById("sncontact").classList.add('current');
        document.getElementById("sncareers").classList.remove('current');

        elements = document.getElementById('about-rwp').getElementsByClassName("show-on-scroll");
        for (var j = 0; j < elements.length; j++) {
          elements.item(j).classList.remove('is-visible');
        }

        elements = document.getElementById('contact').getElementsByClassName("show-on-scroll");
        for (var j = 0; j < elements.length; j++) {
          elements.item(j).classList.add('is-visible');
        }

        elements = document.getElementById('careers').getElementsByClassName("show-on-scroll");
        for (var j = 0; j < elements.length; j++) {
          elements.item(j).classList.remove('is-visible');
        }

        break;

      case 'careers': // careers
        document.getElementById("sncontact").classList.remove('current');
        document.getElementById("sncareers").classList.add('current');
        document.getElementById("sncompany").classList.remove('current');

        elements = document.getElementById('contact').getElementsByClassName("show-on-scroll");
        for (var j = 0; j < elements.length; j++) {
          elements.item(j).classList.remove('is-visible');
        }

        elements = document.getElementById('careers').getElementsByClassName("show-on-scroll");
        for (var j = 0; j < elements.length; j++) {
          elements.item(j).classList.add('is-visible');
        }

        elements = document.getElementById('company').getElementsByClassName("show-on-scroll");
        for (var j = 0; j < elements.length; j++) {
          elements.item(j).classList.remove('is-visible');
        }

        break;

      case 'company': // company
        document.getElementById("sncareers").classList.remove('current');
        document.getElementById("sncompany").classList.add('current');

        elements = document.getElementById('careers').getElementsByClassName("show-on-scroll");
        for (var j = 0; j < elements.length; j++) {
          elements.item(j).classList.remove('is-visible');
        }

        elements = document.getElementById('company').getElementsByClassName("show-on-scroll");
        for (var j = 0; j < elements.length; j++) {
          elements.item(j).classList.add('is-visible');
        }

        break;

      }
  }

}


  // var welcome = document.getElementById('welcome').getBoundingClientRect();
  // var services = document.getElementById('services').getBoundingClientRect();
  // var aboutRwp = document.getElementById('about-rwp').getBoundingClientRect();
  // var contact = document.getElementById('contact').getBoundingClientRect();
  // var careers = document.getElementById('careers').getBoundingClientRect();
  // var company = document.getElementById('company').getBoundingClientRect();

  // Ternary Operator
  // ( condition ) ? run this code : run this code instead

  // let welcomeArea = (welcome.top < 0) ? welcome.bottom : displayHeight - welcome.top;
  // let servicesArea = (services.top < 0) ? services.bottom : displayHeight - services.top;
  // let aboutRwpArea = (aboutRwp.top < 0) ? aboutRwp.bottom : displayHeight - aboutRwp.top;
  // let contactArea = (contact.top < 0) ? contact.bottom : displayHeight - contact.top;
  // let careersArea = (careers.top < 0) ? careers.bottom : displayHeight - careers.top;
  // let companyArea = (company.top < 0) ? company.bottom : displayHeight - company.top;

  // let areas = [welcomeArea, servicesArea, aboutRwpArea, contactArea, careersArea, companyArea];


  // for (var i = 0; i < areas.length; i++){
  //   if (i == section){
  //     elements = sections.item(i).getElementsByClassName("show-on-scroll");
  //     for (var j = 0; j < elements.length; j++) {
  //       elements.item(j).classList.add('is-visible');
  //     }
  //   } else {
  //     elements = sections.item(i).getElementsByClassName("show-on-scroll");
  //     for (var j = 0; j < elements.length; j++) {
  //       elements.item(j).classList.remove('is-visible');
  //     }
  //   }
  // }





function openNav() {
  // document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").classList.add("show")
  document.getElementById("withmap").classList.remove("show")
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  // document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").classList.remove("show")

}


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

function getSections(section){
  switch(section){
    case 'welcome':
      return ['welcome','services'];
      // break;

    case 'services':
      return ['welcome', 'services', 'about-rwp'];
      // break;

    case 'about-rwp':
      return ['services', 'about-rwp', 'contact'];
      // break;

    case 'contact':
      return ['about-rwp', 'contact', 'careers'];
      // break;

    case 'careers':
      return ['contact', 'careers', 'company'];

    case 'company':
      return ['careers', 'company'];
  }
}
