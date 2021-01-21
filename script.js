// console.log("hello World");
const header = document.getElementsByClassName("header")[0]
const input = document.getElementById("idInput")
const firstButton = document.getElementById("btn1")
const idInput = document.querySelector("#idInput")
const buttonClass = document.querySelectorAll(".button")
//console.log(buttonClass);

firstButton.onclick = () => {
    console.log("button clicked", input.value);
    input.value = ""
    header.style.backgroundColor = "grey"
}


