function myFunction() {
  var x = document.getElementById("myTopnav");
  if (!x.className.includes(" responsive")) {
    x.className += " responsive";
  } else {
    x.className = x.className.replace(' responsive', '');
    console.log(x.className);
  }
}