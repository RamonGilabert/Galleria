document.addEventListener("DOMContentLoaded", function() {
  var dotNavigation = document.getElementsByClassName("dot-navigation")[0];

  dotNavigation.addEventListener("click", function() {
    var links = dotNavigation.getElementsByTagName("a");

    for (i = 0; i < links.length; i++) {
      links[i].classList.toggle("current");
    }
  });
})
