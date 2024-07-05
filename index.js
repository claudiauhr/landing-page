const rightArrow = window.document.getElementById("right-arrow")
const Leo = window.document.getElementById("Leo")
const Sam = window.document.getElementById("Sam")
const Bruna = window.document.getElementById("Bruna")
const leftArrow = window.document.getElementById("left-arrow")

function RollToRight() {
    Leo.style = "display:none"
    Bruna.style = "display:flex"
    rightArrow.style = "display:none"
    leftArrow.style = "display:flex; margin-top:55px"
}

function RollToLeft() {
    Leo.style = "display:flex"
    Bruna.style = "display:none"
    rightArrow.style = "display:flex"
    leftArrow.style = "display:none"
}
