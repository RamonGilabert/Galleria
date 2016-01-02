document.addEventListener("DOMContentLoaded", function() {

  var milliseconds = 5000;
  var dotNavigation = document.getElementById("dot-navigation");
  var links = Array.prototype.slice.call(dotNavigation.getElementsByTagName("a"));
  var galleryContainer = document.getElementById("galleria-container");
  var movementInterval = window.setInterval(moveGalleria, milliseconds);

  links.forEach(function(element) {
    element.addEventListener("click", function() {
      var value = links.indexOf(this);

      window.clearInterval(movementInterval);
      configureGalleria(this, value);
      movementInterval = window.setInterval(moveGalleria, milliseconds);
    });
  })

  function moveGalleria() {
    var link = null;
    links.forEach(function(element) {
      if (element.classList.contains("current")) {
        link = element;
      }
    })

    var value = links.indexOf(link);
    value = (value === links.length - 1) ? 0 : value + 1;

    var currentLink = links[value];
    configureGalleria(currentLink, value);
  }

  function configureGalleria(link, value) {
    links.forEach(function(element) { element.classList.remove("current"); })

    link.classList.add("current");

    var translation = -100 * value;
    galleryContainer.style.transform = "translateX(" + translation + "%)";
  }

  links[0].classList.add("current");
})
