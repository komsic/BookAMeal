let isNavHidden = true;
let navOp = () => {
    if (isNavHidden) {
        document.getElementById("nav").style.display = "flex";
        isNavHidden = false;
    } else {
        document.getElementById("nav").style.display = "none";
        isNavHidden = true;
    }
}

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

let noBtn = document.getElementById('btn+ve');
noBtn.onclick = () => {
    span.onclick();
}

let yesBtn = document.getElementById('btn-ve');
yesBtn.onclick = () => {
    span.onclick();
}

let recentOrdersCanceled = document.getElementsByClassName("cancel");

Array.from(recentOrdersCanceled).forEach(cancelBtn => {
    cancelBtn.onclick = function() {
        modal.style.display = "block";
    }
});