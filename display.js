const urlParams = new URLSearchParams(window.location.search);
const input1 = urlParams.get("input1");
const input2 = urlParams.get("input2");
const input3 = urlParams.get("input3");
const input4 = urlParams.get("input4");
const input5 = urlParams.get("input5");
const input6 = urlParams.get("input6");
const input7 = urlParams.get("input7");
document.getElementById("input1").textContent = input1;
document.getElementById("input2").textContent = input2;
document.getElementById("input3").textContent = input3;
document.getElementById("input4").textContent = input4;
document.getElementById("input5").textContent = input5;
document.getElementById("input6").textContent = input6;
document.getElementById("input7").textContent = input7;

function myFunction() {
    location.replace("prac.html")
}