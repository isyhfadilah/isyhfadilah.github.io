const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const tutup = document.querySelector("#tutup")

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("hidden")
    tutup.classList.toggle("hidden")
})

tutup.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("hidden")
    tutup.classList.toggle("hidden")
})