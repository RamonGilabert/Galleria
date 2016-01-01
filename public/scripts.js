document.addEventListener("DOMContentLoaded", function() {
  var dotNavigation = document.getElementById("dot-navigation");
  var links = Array.prototype.slice.call(dotNavigation.getElementsByTagName("a"));

  var galleryContainer = document.getElementById("galleria-container");

  links.forEach(function(element) {
    element.addEventListener("click", function() {
      links.forEach(function(element) { element.classList.remove("current"); })

      this.classList.add("current");
      var value = links.indexOf(this);

      var translation = -100 * value;
      galleryContainer.style.transform = "translateX(" + translation + "%)";
    });
  })

  links[0].classList.add("current");
})
