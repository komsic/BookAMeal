let modal = document.getElementById('myModal');

let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let buy = document.getElementById("buy");
buy.onclick = function() {
    modal.style.display = "block";
}