let isNavHidden = true;
let navOp = () => {
    if (isNavHidden) {
        document.getElementById("nav").style.display = "initial";
        isNavHidden = false;
        console.log(isNavHidden);
    } else {
        document.getElementById("nav").style.display = "none";
        isNavHidden = true;
        console.log(isNavHidden);
    }
}