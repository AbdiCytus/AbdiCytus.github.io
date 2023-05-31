const mode = document.getElementById("mode");

const body = document.querySelector("body")
const head = document.querySelector(".head");
const bg = document.querySelector(".head-bg");
const nav = document.querySelector(".nav-container");
const regards = document.querySelector(".head-h1-regards");
const name = document.querySelector(".head-h1-name");
const subname = document.querySelector(".head-h3");
const headParag = document.querySelector(".head-parag");
const github = document.querySelector(".github");
const ig = document.querySelector(".ig");
const email = document.querySelector(".email");

const about = document.querySelector(".about");
const pfpbg = document.querySelector(".profile-bg");
const aboutTitle = document.querySelector(".about-title");

const projects = document.querySelector(".projects");
const projectsTitle = document.querySelector(".projects-title");
const cards = document.getElementsByClassName("card");
const cardsTitle = document.getElementsByClassName("card-text");
const cardsbtn = document.getElementsByClassName("card-btn");

mode.onclick = () => {
    if (mode.innerHTML === "DAY") {
        mode.innerHTML = "NIGHT"
        bg.src = "images/Header Background(dark).jpg"
        github.src = "images/github logo(white).png"
        ig.src = "images/instagram logo(white).png"
        email.src = "images/email logo(white).png"
        body.classList.add("pure-black")
        head.classList.add("black")
        nav.classList.add("black")
        regards.classList.add("gray")
        name.classList.add("white")
        subname.classList.add("white")
        headParag.classList.add("gray")
        about.classList.add("black")
        pfpbg.classList.add("pure-black")
        aboutTitle.classList.add("pure-black")
        aboutTitle.classList.add("white")
        projects.classList.add("black")
        projectsTitle.classList.add("black")
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.add("pure-black")
            cardsTitle[i].classList.add("white")
        }  
        
    } else {
        mode.innerHTML = "DAY"
        bg.src = "images/Header Background.jpg"
        github.src = "images/github logo.png"
        ig.src = "images/instagram logo.png"
        email.src = "images/email logo.png"
        body.classList.remove("pure-black")
        head.classList.remove("black")
        nav.classList.remove("black")
        regards.classList.remove("gray")
        name.classList.remove("white")
        subname.classList.remove("white")
        headParag.classList.remove("gray")
        pfpbg.classList.remove("pure-black")
        about.classList.remove("black")
        aboutTitle.classList.remove("pure-black")
        aboutTitle.classList.remove("white")
        projects.classList.remove("black")
        projectsTitle.classList.remove("black")
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove("pure-black") 
            cardsTitle[i].classList.remove("white")    
        }  
    }
}