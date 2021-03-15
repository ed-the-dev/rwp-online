var displayHeight = document.documentElement.clientHeight;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

var winScroll = document.documentElement.scrollTop;
var scrolled = (winScroll / height) * 100;


// Checking current section for correct theme on reload.

let currentSec = ''


_sections = ['welcome','services','about-rwp','contact','careers','company'];
var _bbs = [];
var _areas = [];
for (var i = 0; i <_sections.length; i++){
  _bbs[i] = document.getElementById(_sections[i]).getBoundingClientRect();
  _areas[i] = (_bbs[i].top < 64) ? _bbs[i].bottom - 64 : displayHeight - _bbs[i].top - 64;
}

currentSec = _sections[indexOfMax(_areas)];

console.log("location of careers = " + document.getElementById('careers').getBoundingClientRect().top);

switch (currentSec) {
  case 'welcome': // welcome
    document.getElementById("snwelcome").classList.add('current');
    document.body.classList.add('change');
    document.getElementById("drawingone").classList.add('showdrawing');
    break;

  case 'services': // services
    document.getElementById("snservices").classList.add('current');
    document.body.classList.remove('change');
    break;

  case 'about-rwp': // aboutRwp
    document.getElementById("snabout-rwp").classList.add('current');
    document.body.classList.add('change');
    break;

  case 'contact': // contact
    document.getElementById("sncontact").classList.add('current');
    document.body.classList.remove('change');
    break;

  case 'careers': // careers
    document.getElementById("sncareers").classList.add('current');
    document.body.classList.add('change');
    break;

  case 'company': // company
    document.getElementById("sncompany").classList.add('current');
    document.body.classList.remove('change');
    break;
}

// window.onscroll = function(){scrolling()};
window.onscroll = function(){onScroll()};


var latestKnownScrollY = 0,
	ticking = false;

function onScroll() {
	latestKnownScrollY = window.scrollY;
	requestTick();
}

function requestTick() {
	if(!ticking) {
		requestAnimationFrame(update);
	}
	ticking = true;
}

function update() {


	var currentScrollY = latestKnownScrollY;

  document.getElementById("myBar").style.width = scrolled + "%";

  adjSects = getSections(currentSec);
  console.log("currentSec in my scrolling function = " + currentSec);

  var bbs = [];
  var areas = [];
  for (var i = 0; i <adjSects.length; i++){
    bbs[i] = document.getElementById(adjSects[i]).getBoundingClientRect();
    areas[i] = (bbs[i].top < 64) ? bbs[i].bottom - 64 : displayHeight - bbs[i].top - 64;
  }

  let section = adjSects[indexOfMax(areas)];

  if (section == currentSec){
  } else {
    currentSec = section;

    console.log("Section = " + section);

    switch (section) {
      case 'welcome': // welcome
        document.getElementById("snwelcome").classList.add('current');
        document.getElementById("snservices").classList.remove('current');
        document.body.classList.add('change');
        document.getElementById("drawingone").classList.add('showdrawing');
        document.getElementById("drawingtwo").classList.remove('showdrawing');
        break;

      case 'services': // services
        document.getElementById("snwelcome").classList.remove('current');
        document.getElementById("snservices").classList.add('current');
        document.getElementById("snabout-rwp").classList.remove('current');
        document.body.classList.remove('change');
        document.getElementById("drawingone").classList.remove('showdrawing');
        document.getElementById("drawingtwo").classList.add('showdrawing');
        document.getElementById("drawingthree").classList.remove('showdrawing');


        break;

      case 'about-rwp': // aboutRwp
        document.getElementById("snservices").classList.remove('current');
        document.getElementById("snabout-rwp").classList.add('current');
        document.getElementById("sncontact").classList.remove('current');
        document.body.classList.add('change');
        document.getElementById("drawingtwo").classList.remove('showdrawing');
        document.getElementById("drawingthree").classList.add('showdrawing');
        document.getElementById("drawingfour").classList.remove('showdrawing');
        break;

      case 'contact': // contact
        document.getElementById("snabout-rwp").classList.remove('current');
        document.getElementById("sncontact").classList.add('current');
        document.getElementById("sncareers").classList.remove('current');
        document.body.classList.remove('change');
        document.getElementById("drawingthree").classList.remove('showdrawing');
        document.getElementById("drawingfour").classList.add('showdrawing');
        document.getElementById("drawingfive").classList.remove('showdrawing');
        break;

      case 'careers': // careers
        document.getElementById("sncontact").classList.remove('current');
        document.getElementById("sncareers").classList.add('current');
        document.getElementById("sncompany").classList.remove('current');
        document.body.classList.add('change');
        document.getElementById("drawingfour").classList.remove('showdrawing');
        document.getElementById("drawingfive").classList.add('showdrawing');
        document.getElementById("drawingsix").classList.remove('showdrawing');
        break;

      case 'company': // company
        document.getElementById("sncareers").classList.remove('current');
        document.getElementById("sncompany").classList.add('current');
        document.body.classList.remove('change');
        document.getElementById("drawingfive").classList.remove('showdrawing');
        document.getElementById("drawingsix").classList.add('showdrawing');
        break;

    }
  }

  // reset the tick so we can
	// capture the next onScroll
	ticking = false;
}

function scrollBtn(){
  console.log("Function triggered");
  // document.getElementById("inner").classList.add('clickInner')
  // document.getElementById("outer").classList.add('clickOuter')
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

  duration =  Math.abs(diff) < 1000 ? 500 : 1000

  // Easing function: easeInOutCubic
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
