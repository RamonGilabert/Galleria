document.addEventListener("DOMContentLoaded", function() {
  var dotNavigation = document.getElementsByClassName("dot-navigation")[0];
  var firstLink = dotNavigation.getElementsByTagName("a")[0];
  var secondLink = dotNavigation.getElementsByTagName("a")[1];
  var thirdLink = dotNavigation.getElementsByTagName("a")[2];
  var galleryContainer = document.getElementsByClassName("galleria-container")[0];

  function linkClicked() {
    firstLink.classList.remove("current");
    secondLink.classList.remove("current");
    thirdLink.classList.remove("current");
    this.classList.add("current");

    if (this === firstLink) {
      galleryContainer.style.transform = "translateX(0%)";
    } else if (this === secondLink) {
      galleryContainer.style.transform = "translateX(-100%)";
    } else {
      galleryContainer.style.transform = "translateX(-200%)";
    }
  }

  firstLink.addEventListener("click", linkClicked);
  secondLink.addEventListener("click", linkClicked);
  thirdLink.addEventListener("click", linkClicked);
  firstLink.classList.add("current");
})
