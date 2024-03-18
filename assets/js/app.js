const kunEl = document.querySelector(".kun")
const tunEl = document.querySelector(".tun")
const containerEl = document.querySelector(".container")
const backgroundEl = document.querySelector(".background_color")
const colorEl = document.querySelector(".color")

kunEl.addEventListener('click', () => {
    containerEl.style.backgroundColor = "white"
    backgroundEl.style.backgroundColor = "white"
    colorEl.style.color = "black"
})

tunEl.addEventListener('click', () => {
    backgroundEl.style.backgroundColor = "black"
    containerEl.style.backgroundColor = "black"
    colorEl.style.color = "white"

})