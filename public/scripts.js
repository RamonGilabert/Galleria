document.addEventListener("DOMContentLoaded", function() {
  var dotNavigation = document.getElementsByClassName("dot-navigation")[0];
  var links = dotNavigation.getElementsByTagName("a");

  for (i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      this.classList.toggle("current");
    });
  }
})
