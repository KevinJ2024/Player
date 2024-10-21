const audio = document.getElementById("audio")
const play = document.getElementById("play")
const pause = document.getElementById("pause")
const forwad = document.getElementById("forwad")
const rewind = document.getElementById("rewind")
const stop = document.getElementById("stop")

play.addEventListener("click", ()=> audio.play())

pause.addEventListener("click", ()=> audio.pause())

rewind.addEventListener("click", ()=> audio.currentTime -= 10)

forwad.addEventListener("click", ()=> audio.currentTime += 10)

stop.addEventListener("click", ()=>{
    audio.pause()
    audio.currentTime = 0
})