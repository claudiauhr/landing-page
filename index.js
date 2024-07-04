const leftArrow = window.document.getElementById("left-arrow")
const Leo = window.document.getElementById("Leo")
const Sam = window.document.getElementById("Sam")
const Bruna = window.document.getElementById("Bruna")
const rightArrow = window.document.getElementById("right-arrow")

function RollToRight() {
    Leo.style = "display:none"
    Bruna.style = "display:flex"
    leftArrow.style = "display:flex"
    rightArrow.style = "display:none"
}
