var currentYear = new Date().getFullYear();

console.log(currentYear);
document.getElementById("copyright").innerHTML =
  "KO Exchange © " + currentYear + ". All rights reserved.";
