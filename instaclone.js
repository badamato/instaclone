var katImages = "[data-kat]";
var imagesFrame = "[data-target]";

var navItems = document.querySelectorAll(katImages);
var imgTarget = document.querySelector(imagesFrame);

navItems.forEach(function (nav) {
  nav.addEventListener('click', function (event) {
    event.preventDefault();
    imgTarget.setAttribute('src', nav.getAttribute('href'));
  })
});

