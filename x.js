var bg = document.getElementById("bg");
var fg = document.getElementById("fg");
var longButton = document.getElementById("longButton");
var span = document.getElementById("closeBtn");
var KPTee = document.getElementById("KPTee");
var KPTeecare = document.getElementById("KPTeecare");
var KPTeeButton = document.getElementById("KPTeeButton");
var KPTeecareButton = document.getElementById("KPTeecareButton");
var KPT = document.getElementById("KPT");
var KPTC = document.getElementById("KPTC");
var KPTfg = document.getElementById("KPTfg");
var KPTCfg = document.getElementById("KPTCfg");
var KPTBack = document.getElementById("KPTBack");
var KPTCBack = document.getElementById("KPTCBack");
var KPTj = document.getElementById("KPTj");
var KPTCj = document.getElementById("KPTCj");
var KPTabt = document.getElementById("KPTabt");
var KPTCabt = document.getElementById("KPTCabt");
var KPTabtBack = document.getElementById("KPTabtBack");
var KPTCabtBack = document.getElementById("KPTCabtBack");

// Use unique keys for localStorage
var bgKey = "bgDisplay";
var fgKey = "fgDisplay";
var KPTeeKey = "KPTeeDisplay";
var KPTeecareKey = "KPTeecareDisplay";
var KPTfgKey = "KPTfgDisplay";
var KPTCfgKey = "KPTCfgDisplay";
var KPTabtKey = "KPTabtDisplay";
var KPTCabtKey = "KPTCabtDisplay";

// Check and apply stored values
if (localStorage.getItem(bgKey) === 'flex') {
  bg.style.display = 'flex';
  fg.style.display = 'none';
  localStorage.setItem(KPTeeKey, 'flex');
  localStorage.setItem(KPTeecareKey, 'none');
  KPTeeButton.style.background = "#DA674A";
  KPTeeButton.style.color = "#E5E4DE";
  KPTeeButton.style.borderColor = "transparent";
  KPTeecareButton.style.background = "transparent";
  KPTeecareButton.style.color = "black";
  KPTeecareButton.style.borderColor = "black";
} else if (localStorage.getItem(fgKey) === 'flex') {
  fg.style.display = 'flex';
  bg.style.display = 'none';
  if (localStorage.getItem(KPTeeKey) === 'flex') {
    KPTee.style.display = 'flex';
    KPTeecare.style.display = 'none';
    KPTeeButton.style.background = "#DA674A";
    KPTeeButton.style.color = "#E5E4DE";
    KPTeeButton.style.borderColor = "transparent";
    KPTeecareButton.style.background = "transparent";
    KPTeecareButton.style.color = "black";
    KPTeecareButton.style.borderColor = "black";
  } else if (localStorage.getItem(KPTeecareKey) === 'flex') {
    KPTeecare.style.display = 'flex';
    KPTee.style.display = 'none';
    KPTeecareButton.style.background = "#DA674A";
    KPTeecareButton.style.color = "#E5E4DE";
    KPTeecareButton.style.borderColor = "transparent";
    KPTeeButton.style.background = "transparent";
    KPTeeButton.style.color = "black";
    KPTeeButton.style.borderColor = "black";
  }
} else if (localStorage.getItem(KPTfgKey) === 'flex') {
  bg.style.display = 'none';
  fg.style.display = 'none';
  KPTfg.style.display = 'flex';
} else if (localStorage.getItem(KPTCfgKey) === 'flex') {
  bg.style.display = 'none';
  fg.style.display = 'none';
  KPTCfg.style.display = 'flex';
} else if (localStorage.getItem(KPTabtKey) === 'flex') {
  bg.style.display = 'none';
  fg.style.display = 'none';
  KPTfg.style.display = 'none';
  KPTabt.style.display = 'flex';
} else if (localStorage.getItem(KPTCabtKey) === 'flex') {
  bg.style.display = 'none';
  fg.style.display = 'none';
  KPTCfg.style.display = 'none';
  KPTCabt.style.display = 'flex';
} else {
  // Set default states if no values are stored
  bg.style.display = 'flex';
  fg.style.display = 'none';
}

// Event listener for longButton
longButton.onclick = function () {
  bg.style.display = "none";
  fg.style.display = "flex";
  KPTee.style.display = "flex";
  KPTeecare.style.display = "none";
  localStorage.setItem(bgKey, 'none');
  localStorage.setItem(fgKey, 'flex');
}

// Event listener for span
span.onclick = function () {
  bg.style.display = "flex";
  fg.style.display = "none";
  KPTee.style.display = "none";
  KPTeecare.style.display = "none";
  KPTeeButton.style.background = "#DA674A";
  KPTeeButton.style.color = "#E5E4DE";
  KPTeeButton.style.borderColor = "transparent";
  KPTeecareButton.style.background = "transparent";
  KPTeecareButton.style.color = "black";
  KPTeecareButton.style.borderColor = "black";
  localStorage.setItem(bgKey, 'flex');
  localStorage.setItem(fgKey, 'none');
  localStorage.setItem(KPTeeKey, 'flex');
  localStorage.setItem(KPTeecareKey, 'none');
}

KPTeeButton.onclick = function () {
  KPTee.style.display = "flex";
  KPTeecare.style.display = "none";
  KPTeeButton.style.background = "#DA674A";
  KPTeeButton.style.color = "#E5E4DE";
  KPTeeButton.style.borderColor = "transparent";
  KPTeecareButton.style.background = "transparent";
  KPTeecareButton.style.color = "black";
  KPTeecareButton.style.borderColor = "black";
  localStorage.setItem(bgKey, 'none');
  localStorage.setItem(fgKey, 'flex');
  localStorage.setItem(KPTeeKey, 'flex');
  localStorage.setItem(KPTeecareKey, 'none');
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
  localStorage.setItem(bgKey, 'none');
  localStorage.setItem(fgKey, 'flex');
  localStorage.setItem(KPTeeKey, 'none');
  localStorage.setItem(KPTeecareKey, 'flex');
}



KPT.onclick = function () {
  KPTfg.style.display = "flex";
  fg.style.display = "none";
  localStorage.setItem(fgKey, 'none');
  localStorage.setItem(KPTeeKey, 'none');
  localStorage.setItem(KPTfgKey, 'flex');
  localStorage.setItem(KPTeecareKey, 'none');
  localStorage.setItem(KPTCfgKey, 'none');
}

KPTC.onclick = function () {
  KPTCfg.style.display = "flex";
  fg.style.display = "none";
  localStorage.setItem(fgKey, 'none');
  localStorage.setItem(KPTeecareKey, 'none');
  localStorage.setItem(KPTCfgKey, 'flex');
  localStorage.setItem(KPTeeKey, 'none');
  localStorage.setItem(KPTfgKey, 'none');
}

KPTBack.onclick = function () {
  fg.style.display = "flex";
  KPTfg.style.display = "none";
  localStorage.setItem(fgKey, 'flex');
  localStorage.setItem(KPTeeKey, 'flex');
  localStorage.setItem(KPTfgKey, 'none');
  localStorage.setItem(KPTeecareKey, 'none');
  localStorage.setItem(KPTCfgKey, 'none');
}

KPTCBack.onclick = function () {
  fg.style.display = "flex";
  KPTCfg.style.display = "none";
  localStorage.setItem(fgKey, 'flex');
  localStorage.setItem(KPTeecareKey, 'flex');
  localStorage.setItem(KPTCfgKey, 'none');
  localStorage.setItem(KPTeeKey, 'none');
  localStorage.setItem(KPTfgKey, 'none');
}

const urlwa1 = "https://wa.me/60189597888?text=Hello I'd like to make an appointment";
const urlwa2 = "https://wa.me/60189575888?text=Hello I'd like to make an appointment";

KPTj.onclick = function () {
  KPTabt.style.display = "flex";
  KPTfg.style.display = "none";
  localStorage.setItem(KPTfgKey, 'none');
  localStorage.setItem(KPTabtKey, 'flex');
  localStorage.setItem(KPTCfgKey, 'none');
  localStorage.setItem(KPTCabtKey, 'none');
}

KPTCj.onclick = function () {
  KPTCabt.style.display = "flex";
  KPTCfg.style.display = "none";
  localStorage.setItem(KPTfgKey, 'none');
  localStorage.setItem(KPTabtKey, 'none');
  localStorage.setItem(KPTCfgKey, 'none');
  localStorage.setItem(KPTCabtKey, 'flex');
}

KPTabtBack.onclick = function () {
  KPTfg.style.display = "flex";
  KPTabt.style.display = "none";
  localStorage.setItem(KPTfgKey, 'flex');
  localStorage.setItem(KPTabtKey, 'none');
  localStorage.setItem(KPTCfgKey, 'none');
  localStorage.setItem(KPTCabtKey, 'none');
}

KPTCabtBack.onclick = function () {
  KPTCfg.style.display = "flex";
  KPTCabt.style.display = "none";
  localStorage.setItem(KPTfgKey, 'none');
  localStorage.setItem(KPTabtKey, 'none');
  localStorage.setItem(KPTCfgKey, 'flex');
  localStorage.setItem(KPTCabtKey, 'none');
}

// Debugging: log the localStorage values
console.log('bgKey:', localStorage.getItem(bgKey));
console.log('fgKey:', localStorage.getItem(fgKey));
console.log('KPTeeKey:', localStorage.getItem(KPTeeKey));
console.log('KPTeecareKey:', localStorage.getItem(KPTeecareKey));
console.log('KPTfgKey:', localStorage.getItem(KPTfgKey));
console.log('KPTCfgKey:', localStorage.getItem(KPTCfgKey));
console.log('KPTabtKey:', localStorage.getItem(KPTabtKey));
console.log('KPTCabtKey:', localStorage.getItem(KPTCabtKey));