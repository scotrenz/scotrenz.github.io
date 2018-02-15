// import DirectionReveal from "direction-reveal";

// const directionRevealSwing = DirectionReveal({
//     selector: '.direction-reveal',              // Container element selector.
//     itemSelector: '.direction-reveal__card',    // Item element selector.
//     animationName: 'swing',                     // Animation CSS class.
//     enableTouch: true,                          // Adds touch event to show content on first click then follow link on the second click.
//     touchThreshold: 250                         // Touch length must be less than this to trigger reveal which prevents the event triggering if user is scrolling.
//   });

var cards = document.querySelectorAll(".card"), i;

for (i = 0; i < cards.length; i++) {
  wiggle(cards[i])
  
};

function wiggle (card){
  card.addEventListener('mousemove', function (e) {
    var wh = window.innerHeight / 2,
    ww = window.innerWidth / 2,
    offX = this.offsetLeft,
    offY = this.offsetTop
    offW = this.offsetWidth/2;
    this.style.setProperty('--mouseX', (e.clientX - offX - offW) / 25);
    this.style.setProperty('--mouseY', (e.clientY - wh) / 25);
  
  });

card.addEventListener('mouseleave', function (e) {

  this.style.setProperty('--mouseX', 0);
  this.style.setProperty('--mouseY', 0);

});
}



// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  var x = document.getElementById("mobileNav");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

//Google Map API
function myMap() {
    myCenter = new google.maps.LatLng(40.7831, -73.9712);
    var mapOptions = {
      center: myCenter,
      zoom: 11,
      scrollwheel: false,
      draggable: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(
      document.getElementById("googleMap"),
      mapOptions
    );
  
    var marker = new google.maps.Marker({
      position: myCenter
    });
    marker.setMap(map);
  }