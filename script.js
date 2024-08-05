//your JS code here. If required.
function updateSize(){
let size = document.querySelector(".size")
let width = window.innerWidth
let height = window.innerHeight
size.innerText = `Width: ${width} and Height: ${height}`
}

window.addEventListener("resize", updateSize)
updateSize()