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

var KPT = document.getElementById("KPT");
var KPTC = document.getElementById("KPTC");
var KPTfg = document.getElementById("KPTfg");
var KPTCfg = document.getElementById("KPTCfg");
var KPTBack = document.getElementById("KPTBack");
var KPTCBack = document.getElementById("KPTCBack");

KPT.onclick = function () {
  KPTfg.style.display = "flex";
  fg.style.display = "none";
}

KPTC.onclick = function () {
  KPTCfg.style.display = "flex";
  fg.style.display = "none";
}

KPTBack.onclick = function () {
  fg.style.display = "flex";
  KPTfg.style.display = "none";
}

KPTCBack.onclick = function () {
  fg.style.display = "flex";
  KPTCfg.style.display = "none";
}

const urlwa1 = "https://wa.me/60189597888?text=Hello I'd like to make an appointment";
const urlwa2 = "https://wa.me/60189575888?text=Hello I'd like to make an appointment";

var KPTj = document.getElementById("KPTj");
var KPTCj = document.getElementById("KPTCj");
var KPTabt = document.getElementById("KPTabt");
var KPTCabt = document.getElementById("KPTCabt");
var KPTabtBack = document.getElementById("KPTabtBack");
var KPTCabtBack = document.getElementById("KPTCabtBack");

KPTj.onclick = function () {
  KPTabt.style.display = "flex";
  KPTfg.style.display = "none";
}

KPTCj.onclick = function () {
  KPTCabt.style.display = "flex";
  KPTCfg.style.display = "none";
}

KPTabtBack.onclick = function () {
  KPTfg.style.display = "flex";
  KPTabt.style.display = "none";
}

KPTCabtBack.onclick = function () {
  KPTCfg.style.display = "flex";
  KPTCabt.style.display = "none";
}