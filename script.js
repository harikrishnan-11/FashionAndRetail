//toggle

let togglebtn = document.querySelector(".menu-btn")
let closebtn = document.querySelector(".close-btn")
let togglebtn2 = document.querySelector(".menu-btn2")
let closebtn2 = document.querySelector(".close-btn2")
let menus = document.querySelector(".nav-links")
let nav = document.querySelector(".right-nav")
let navlink = document.querySelector(".nav-links ")
let container = document.querySelector(".container2")

togglebtn.addEventListener("click", () => {
    closebtn.style.display = "block"
    menus.style.display = "flex"
    togglebtn.style.display = "none"

})

closebtn.addEventListener("click", () => {
    closebtn.style.display = "none"
    menus.style.display = "none"
    togglebtn.style.display = "block"

})

togglebtn2.addEventListener("click", () => {
    closebtn2.style.display = "block"
    nav.style.display = "flex"
    togglebtn2.style.display = "none"

})

closebtn2.addEventListener("click", () => {
    closebtn2.style.display = "none"
    nav.style.display = "none"
    togglebtn2.style.display = "block"

})

window.addEventListener("resize", () => {
    if (innerWidth > 1220) {
        closebtn.style.display = "none"
        menus.style.display = "flex"
        togglebtn.style.display = "none"
        closebtn2.style.display = "none"
        togglebtn2.style.display = "none"
         nav.style.display = "flex"

    }

    else if (innerWidth < 1220 && innerWidth > 640) {
        closebtn.style.display = "none"
        menus.style.display = "none"
        togglebtn.style.display = "block"
        togglebtn2.style.display = "none"
        closebtn2.style.display = "none"
         nav.style.display = "flex"

    }

    else if (innerWidth < 640) {
        closebtn2.style.display = "none"
        nav.style.display = "none"
        togglebtn2.style.display = "block"
        closebtn.style.display = "none"
        menus.style.display = "flex"
        togglebtn.style.display = "none"
    }

    else {

        closebtn2.style.display = "none"
        nav.style.display = "none"
        togglebtn2.style.display = "none"
    }

})



// Hero section

let hero = document.querySelector(".hero")
let image = ["./src/home.webp", "./src/home1.png"]
let clslist = document.querySelectorAll(".hero-content")
let index = 0

setInterval(() => {
    index++
    if (index >= image.length) {
        index = 0
    }
    hero.style.backgroundImage = `url(${image[index]})`


    clslist.forEach((item) => {
        item.classList.remove("active")
    })

    clslist[index].classList.add("active")

}, 3000)


let arrow1 = document.querySelector(".arr1")
let arrow2 = document.querySelector(".arr2")

arrow1.addEventListener("click", () => {
    index++
    if (index >= image.length) {
        index = 0
    }
    hero.style.backgroundImage = `url(${image[index]})`


    clslist.forEach((item) => {
        item.classList.remove("active")
    })

    clslist[index].classList.add("active")

})

arrow2.addEventListener("click", () => {
    index--
    if (index < 0) {
        index = image.length - 1
    }
    hero.style.backgroundImage = `url(${image[index]})`


    clslist.forEach((item) => {
        item.classList.remove("active")
    })

    clslist[index].classList.add("active")

})