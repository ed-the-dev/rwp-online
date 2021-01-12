// var sections = document.getElementsByClassName("content");
var displayHeight = document.documentElement.clientHeight;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let currentSec = 'welcome';

window.onscroll = function(){scrolling()};

function scrolling() {
  var winScroll = document.documentElement.scrollTop;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

  adjSects = getSections(currentSec);

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
        document.body.classList.add('change');  

        break;

      case 'services': // services
        document.getElementById("snwelcome").classList.remove('current');
        document.getElementById("snservices").classList.add('current');
        document.getElementById("snabout-rwp").classList.remove('current');
        document.body.classList.remove('change');

        break;

      case 'about-rwp': // aboutRwp
        document.getElementById("snservices").classList.remove('current');
        document.getElementById("snabout-rwp").classList.add('current');
        document.getElementById("sncontact").classList.remove('current');
        document.body.classList.add('change');

        break;

      case 'contact': // contact
        document.getElementById("snabout-rwp").classList.remove('current');
        document.getElementById("sncontact").classList.add('current');
        document.getElementById("sncareers").classList.remove('current');
        document.body.classList.remove('change');


        break;

      case 'careers': // careers
        document.getElementById("sncontact").classList.remove('current');
        document.getElementById("sncareers").classList.add('current');
        document.getElementById("sncompany").classList.remove('current');
        document.body.classList.add('change');


        break;

      case 'company': // company
        document.getElementById("sncareers").classList.remove('current');
        document.getElementById("sncompany").classList.add('current');
        document.body.classList.remove('change');


        break;

    }
  }
}


function openNav() {
  // document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").classList.add("show")
  document.getElementById("withmap").classList.remove("show")
}

/* Set the width of the side navigation to 0 */
function closeNav() {
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

function doScrolling(element) {

  duration = 1000
	var startingY = window.pageYOffset
  console.log("Starting Y = " + startingY)
  var string = element.toString();
  var elementY = window.pageYOffset + document.getElementById(string).getBoundingClientRect().top;

  // If element is close to page's bottom then window will scroll only to some position above the element.
  var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
  console.log("Document Body Scrollheight = " + document.body.scrollHeight);
  console.log("Element's Top (elementY)  = " + elementY)
  console.log("Window Inner Height = " + window.innerHeight);
  console.log("Target Y = " + targetY);
	var diff = targetY - startingY;
  console.log("Difference = " + diff);

  // duration = Math.abs(diff);
  duration =  Math.abs(diff) < 1000 ? 500 : 1000


  // Easing function: easeInOutCubic
  // From: https://gist.github.com/gre/1650294
  var easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
  var start

  if (!diff) return

	// Bootstrap our animation - it will get called right before next frame shall be rendered.
	window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    // Elapsed miliseconds since start of scrolling.
    var time = timestamp - start
		// Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1)
    // Apply the easing.
    // It can cause bad-looking slow frames in browser performance tool, so be careful.
    percent = easing(percent)

    window.scrollTo(0, startingY + diff * percent)

		// Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}
