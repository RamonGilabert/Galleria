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

  var movementInterval = window.setInterval(moveGalleria, 5000);
  function moveGalleria() {
    var link = null;
    links.forEach(function(element) {
      if (element.classList.contains("current")) {
        link = element;
      }
    })

    var value = links.indexOf(link);

    if (value === links.length - 1) {
      value = 0;
    } else {
      value = value + 1;
    }

    links.forEach(function(element) { element.classList.remove("current"); })

    var currentLink = links[value];
    currentLink.classList.add("current");

    var translation = -100 * value;
    galleryContainer.style.transform = "translateX(" + translation + "%)";
  }

  links[0].classList.add("current");
})
