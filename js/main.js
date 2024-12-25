function myFunc() {
  var x = document.getElementById("mynav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
  var t = document.getElementById("active");
  if (t.classList.contains("active")) {
    t.classList.remove("active");
  } else {
    t.classList.add(" active");
  }
}
