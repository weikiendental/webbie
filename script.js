// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeBtn")[0];

var bye = document.getElementById("bye");
var bye2 = document.getElementById("bye2");
var bye3 = document.getElementById("bye3");
var slog = document.getElementById("sloganDiv");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "flex";
    bye.style.display = "none";
    bye2.style.display = "none";
    bye3.style.display = "none";
    btn.style.display = "none";
    slog.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    bye.style.display = "block";
    bye2.style.display = "block";
    bye3.style.display = "block";
    btn.style.display = "block";
    slog.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



var KPTee = document.getElementById("KPTee");
var openKPTee = document.getElementById("openKPTee");
var KPTeecare = document.getElementById("KPTeecare");
var openKPTeecare = document.getElementById("openKPTeecare");

openKPTee.onclick = function() {
    KPTee.style.display = "flex";
    openKPTee.style.backgroundColor = "#DA674A";
    openKPTee.style.color = "#E5E4DE";
    openKPTeecare.style.backgroundColor = "Transparent";
    openKPTeecare.style.color = "#000000";
    KPTeecare.style.display = "none";
}

openKPTeecare.onclick = function() {
    KPTeecare.style.display = "flex";
    openKPTeecare.style.backgroundColor = "#DA674A";
    openKPTeecare.style.color = "#E5E4DE";
    openKPTee.style.backgroundColor = "Transparent";
    openKPTee.style.color = "#000000";
    KPTee.style.display = "none";
}


