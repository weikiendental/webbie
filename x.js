var bg = document.getElementById("bg");
var fg = document.getElementById("fg");
var longButton = document.getElementById("longButton");
var span = document.getElementById("closeBtn");

longButton.onclick = function () {
  bg.style.display = "none";
  fg.style.display = "flex";
}

span.onclick = function () {
  bg.style.display = "flex";
  fg.style.display = "none";
}

var KPTee = document.getElementById("KPTee");
var KPTeecare = document.getElementById("KPTeecare");
var KPTeeButton = document.getElementById("KPTeeButton");
var KPTeecareButton = document.getElementById("KPTeecareButton");

KPTeeButton.onclick = function () {
  KPTee.style.display = "flex";
  KPTeecare.style.display = "none";
  KPTeeButton.style.background = "#DA674A";
  KPTeeButton.style.color = "#E5E4DE";
  KPTeeButton.style.borderColor = "transparent";
  KPTeecareButton.style.background = "transparent";
  KPTeecareButton.style.color = "black";
  KPTeecareButton.style.borderColor = "black";
}

KPTeecareButton.onclick = function () {
  KPTeecare.style.display = "flex";
  KPTee.style.display = "none";
  KPTeecareButton.style.background = "#DA674A";
  KPTeecareButton.style.color = "#E5E4DE";
  KPTeecareButton.style.borderColor = "transparent";
  KPTeeButton.style.background = "transparent";
  KPTeeButton.style.color = "black";
  KPTeeButton.style.borderColor = "black";
}