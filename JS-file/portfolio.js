function navFunction() {
    var x = document.getElementById("nav-bar");
    if (x.className === "nav-menu") {
      x.className += " responsive";
   } else {
      x.className = "nav-menu";
    }
}

function scrollToTop() {
  window.scrollTo(0, 0);
}
