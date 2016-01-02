document.addEventListener("DOMContentLoaded", function() {

  function galleria(milliseconds) {
    var dotNavigation = document.getElementById("dot-navigation");
    var links = Array.prototype.slice.call(dotNavigation.getElementsByTagName("a"));
    var galleryContainer = document.getElementById("galleria-container");
    var movementInterval = window.setInterval(moveGalleria, milliseconds);

    links.forEach(function(element) {
      element.addEventListener("click", function() {
        window.clearInterval(movementInterval);
        configureGalleria(this, links.indexOf(this));
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
      configureGalleria(links[value], value);
    }

    function configureGalleria(link, value) {
      links.forEach(function(element) { element.classList.remove("current"); })

      link.classList.add("current");

      var translation = -100 * value;
      galleryContainer.style.transform = "translateX(" + translation + "%)";
    }

    links[0].classList.add("current");
  }

  galleria(5000);
})
