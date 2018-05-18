var katImages = "[data-kat]";
var imagesFrame = "[data-target]";
var overlayFrame = "[data-mynav]";


var navItems = document.querySelectorAll(katImages);
var imgTarget = document.querySelector(imagesFrame);
var overlay = document.querySelector(overlayFrame);


navItems.forEach(function (nav) {
  nav.addEventListener('click', function (event) {
    event.preventDefault();
    imgTarget.setAttribute('src', nav.getAttribute('href'));
  })
});

function openOverlay() {
  overlay.style.display = "block";
}

function closeOverlay() {
  overlay.style.display = "none";
}