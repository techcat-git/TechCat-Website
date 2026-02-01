function image1() {
    document.getElementById("image").src = "1.png";
}

function image2() {
    document.getElementById("image").src = "2.png";
}

function image3() {
    document.getElementById("image").src = "3.png";
}

function image4() {
    document.getElementById("image").src = "4.png";
}

function input(event) {
event.preventDefault();
const inputcontent = parseInt(document.getElementById("inputcontent").value);

if (inputcontent === 1) {
document.getElementById("image").src = "1.png";
}
else if (inputcontent === 2) {
document.getElementById("image").src = "2.png";
}
else if (inputcontent === 3) {
document.getElementById("image").src = "3.png";
}
else if (inputcontent === 4) {
document.getElementById("image").src = "4.png";
}
else {
document.getElementById("image").src = "1.png";
}

}
