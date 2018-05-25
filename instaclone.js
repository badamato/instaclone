var THUMB_IMG = "[data-indiv-img]";
var MAIN_IMG = "[data-target-main]";  
var MY_MODAL = "[data-myModal]";
var IMG_01 = "[data-img01]";
var CAPTION = "[data-caption]";


var navItems = document.querySelectorAll(THUMB_IMG);
var imgTarget = document.querySelector(MAIN_IMG);
var modal = document.querySelector(MY_MODAL);
var modalImg = document.querySelector(IMG_01);
var captionText = document.querySelector(CAPTION);
var span = document.getElementsByClassName("close")[0];



navItems.forEach(function (nav) {
  nav.addEventListener("click", function (event) {
    event.preventDefault();
    imgTarget.setAttribute("src", nav.getAttribute("href"));

    var imageInside = nav.querySelector("img");
    imgTarget.setAttribute("alt", imageInside.getAttribute("alt"))
  })
});

imgTarget.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

span.onclick = function() { 
    modal.style.display = "none";
}