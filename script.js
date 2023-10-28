// Selector

const mode = document.getElementById("mode");
const menu = document.querySelector(".menu");
const headCanvas = document.querySelector(".head-canvas");
const mainCanvas = document.querySelector(".main");

// Hamburger Menu

const span2 = document.getElementsByTagName("span")[1];
const span3 = document.getElementsByTagName("span")[2];
const span1 = document.getElementsByTagName("span")[0];

// Header

const body = document.querySelector("body");
const head = document.querySelector(".head");
const bg = document.querySelector(".head");
const nav = document.querySelector(".nav-container");
const regards = document.querySelector(".head-h1-regards");
const name = document.querySelector(".head-h1-name");
const subname = document.querySelector(".head-h3");
const headParag = document.querySelector(".head-parag");
const github = document.querySelector(".github");
const ig = document.querySelector(".ig");
const email = document.querySelector(".email");

// Main(About)

const about = document.querySelector(".about");
const pfpbg = document.querySelector(".profile-bg");
const aboutTitle = document.querySelector(".about-title");

// Main(Projects)

const projects = document.querySelector(".projects");
const projectsTitle = document.querySelector(".projects-title");

// System

// Card Loop

for (let e = 0; e < 5; e++) {
  const cardElement = document.createElement("div");
  projects.appendChild(cardElement);
  cardElement.setAttribute("class", `card card${e + 1}`);
}
const cards = document.getElementsByClassName("card");

for (let e = 0; e < cards.length; e++) {
  const element = cards[e];

  const cardImages = document.createElement("div");
  const cardText = document.createElement("div");

  const loopImages = document.createElement("img");
  const loopH3 = document.createElement("h3");
  const loopP = document.createElement("p");
  const loopBtn = document.createElement("div");

  const loopLink = document.createElement("a");

  element.appendChild(cardImages);
  element.appendChild(cardText);

  cardImages.appendChild(loopImages);
  cardText.appendChild(loopH3);
  cardText.appendChild(loopP);
  cardText.appendChild(loopBtn);

  loopBtn.appendChild(loopLink);

  cardImages.setAttribute("class", "card-img");
  cardText.setAttribute("class", "card-text");

  loopImages.setAttribute("class", "img-project");
  loopImages.setAttribute("src", "images/Gab Project.webp");

  loopH3.innerHTML = `Project ${e + 1}`;
  loopP.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  loopBtn.setAttribute("class", "card-btn");

  loopLink.innerHTML = "View";
  loopLink.style.color = "white";
}

const cardImages = document.getElementsByClassName("img-project");
const cardsTitle = document.getElementsByClassName("card-text");
const cardsbtn = document.getElementsByClassName("card-btn");

// Data Projects
const project1 = {
  img: (cardImages[0].src = "images/Seele - HSR.webp"),
  title: (cardsTitle[0].querySelector("h3").innerHTML = "Gacha Generator"),
  desc: (cardsTitle[0].querySelector("p").innerHTML =
    "Honkai: StarRail gacha generator fanmade by AbdiCytus."),
  link: cardsbtn[0]
    .querySelector("a")
    .setAttribute("href", "https://hsr-gacha-generator.netlify.app"),
  target: cardsbtn[0].querySelector("a").setAttribute("target", "_blank"),
  adjust: {
    button: (cardsTitle[0].querySelector("p").style.marginBottom = "10px"),
  },
};

// Hamburger Menu

menu.onclick = () => {
  nav.classList.toggle("slide");
  span2.classList.toggle("display-none");
  span1.classList.toggle("line-1");
  span3.classList.toggle("line-2");
};

headCanvas.onclick = () => {
  if (nav.classList.contains("slide")) {
    nav.classList.remove("slide");
    span2.classList.remove("display-none");
    span1.classList.remove("line-1");
    span3.classList.remove("line-2");
  }
};

mainCanvas.onclick = () => {
  if (nav.classList.contains("slide")) {
    nav.classList.remove("slide");
    span2.classList.remove("display-none");
    span1.classList.remove("line-1");
    span3.classList.remove("line-2");
  }
};

// Dark Mode

mode.onclick = () => {
  if (mode.innerHTML === "DAY") {
    mode.innerHTML = "NIGHT";
    bg.classList.add("dark-head");
    menu.style.backgroundColor = "#212121";
    github.src = "images/github logo(white).webp";
    ig.src = "images/instagram logo(white).webp";
    email.src = "images/email logo(white).webp";
    body.classList.add("pure-black");
    head.classList.add("black");
    nav.classList.add("black");
    regards.classList.add("gray");
    name.classList.add("white");
    subname.classList.add("white");
    headParag.classList.add("gray");
    about.classList.add("black");
    pfpbg.classList.add("pure-black");
    aboutTitle.classList.add("pure-black");
    aboutTitle.classList.add("white");
    projects.classList.add("black");
    projectsTitle.classList.add("black");
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.add("pure-black");
      cardsTitle[i].classList.add("white");
    }
  } else {
    mode.innerHTML = "DAY";
    bg.classList.remove("dark-head");
    menu.style.backgroundColor = "#3f51b5";
    github.src = "images/github logo.webp";
    ig.src = "images/instagram logo.webp";
    email.src = "images/email logo.webp";
    body.classList.remove("pure-black");
    head.classList.remove("black");
    nav.classList.remove("black");
    regards.classList.remove("gray");
    name.classList.remove("white");
    subname.classList.remove("white");
    headParag.classList.remove("gray");
    pfpbg.classList.remove("pure-black");
    about.classList.remove("black");
    aboutTitle.classList.remove("pure-black");
    aboutTitle.classList.remove("white");
    projects.classList.remove("black");
    projectsTitle.classList.remove("black");
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove("pure-black");
      cardsTitle[i].classList.remove("white");
    }
  }
};
