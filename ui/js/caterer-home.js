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