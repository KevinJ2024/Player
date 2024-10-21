import { playList } from "./songs.js"

const audio = document.getElementById("audio")
const play = document.getElementById("play")
const pause = document.getElementById("pause")
const forward = document.getElementById("forward")
const rewind = document.getElementById("rewind")
const stop = document.getElementById("stop")
const previous = document.getElementById("previous")
const next = document.getElementById("next")

let currentIndex = 0

window.addEventListener("DOMContentLoaded", () => makePlaylist(playList[currentIndex]))

previous.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + playList.length) % playList.length 
    makePlaylist(playList[currentIndex])
})

play.addEventListener("click", () => audio.play())

pause.addEventListener("click", () => audio.pause())

rewind.addEventListener("click", () => audio.currentTime -= 10)

forward.addEventListener("click", () => audio.currentTime += 10)

next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % playList.length 
    makePlaylist(playList[currentIndex])
})

stop.addEventListener("click", () => {
    audio.pause()
    audio.currentTime = 0
})

function makePlaylist(song) {
    const container = document.createElement("div")
    container.classList.add("container-album")

    const title = document.createElement("h2")
    title.classList.add("player__song")
    title.textContent = song.title

    const artist = document.createElement("h3")
    artist.classList.add("player__artist")
    artist.textContent = song.artist

    const img = document.createElement("img")
    img.classList.add("player__img")
    img.src = song.img

    audio.src = song.song 
    audio.load() 

    container.appendChild(img)
    container.appendChild(title)
    container.appendChild(artist)

    const playerContainer = document.querySelector("h1")
    playerContainer.innerHTML = "" 
    playerContainer.appendChild(container)
}
