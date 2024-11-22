let boxes = document.querySelectorAll(".box")
let startBtn = document.getElementById("startBtn")
let resetBtn = document.getElementById("resetBtn")
let stopBtn = document.getElementById("stopBtn")

let intervalId
function startAnimation() {
    intervalId = setInterval(() => {
        boxes.forEach((box) => {
            const randomHeight = Math.floor(Math.random()*200)+50
            console.log(randomHeight)
            box.style.height = `${randomHeight}px`
        })
    },500)
}
function stopAnimation(){
    clearInterval(intervalId)
}
function resetAnimation(){
    stopAnimation()
    boxes.forEach((box)=>{
        box.style.height = "250px"
    })
}
startBtn.addEventListener("click", startAnimation)
stopBtn.addEventListener('click',stopAnimation)
resetBtn.addEventListener("click", resetAnimation)