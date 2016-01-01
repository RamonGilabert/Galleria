document.addEventListener("DOMContentLoaded", function() {
  var dotNavigation = document.getElementsByClassName("dot-navigation")[0];
  var links = dotNavigation.getElementsByTagName("a");

  var galleryContainer = document.getElementsByClassName("galleria-container")[0];

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      for (var i = 0; i < links.length; i++) { links[i].classList.remove("current"); }

      this.classList.add("current");

      var translation = -100 * value;

      if (this === links[0]) {
        galleryContainer.style.transform = "translateX(" + translation + "%)";
      } else if (this === links[1]) {
        galleryContainer.style.transform = "translateX(-100%)";
      } else {
        galleryContainer.style.transform = "translateX(-200%)";
      }
    });
  }

  links[0].classList.add("current");
})
