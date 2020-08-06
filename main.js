const topBgLoader = document.querySelector(".top-bg");
const bottomBgLoader = document.querySelector(".bottom-bg");
const text = document.querySelector(".text");
const loader = document.querySelector(".loader");
const heroImage = document.querySelector(".hero-image");
const border = document.querySelector(".border");
const headerTitleName = document.querySelector(".header-title-name");
const headerTitleWorks = document.querySelector(".header-title-works");
const sectionContentHeading = document.querySelector(
  ".section-content-heading"
);
const socialLinks = document.querySelector(".social-links");
const headerPortfolio = document.querySelector(".header-portfolio");

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const fifth = document.querySelector(".fifth");

const uno = document.querySelector(".uno");
const dos = document.querySelector(".dos");
const tres = document.querySelector(".tres");
const kwatro = document.querySelector(".kwatro");
const sinko = document.querySelector(".sinko");

const uniqueOne = document.querySelector(".unique-one");
const uniqueTwo = document.querySelector(".unique-two");
const uniqueThree = document.querySelector(".unique-three");
const uniqueFour = document.querySelector(".unique-four");
const uniqueFive = document.querySelector(".unique-five");
const mouseCursorImage = document.querySelector(".mouseCursorImage");

window.addEventListener("mousemove", newcursor);
function newcursor(e) {
  mouseCursorImage.style.top = e.pageY + "px";
  mouseCursorImage.style.left = e.pageX + "px";
}

text.addEventListener("animationend", () => {
  topBgLoader.style.animation = "topBgAnimation  1s ease forwards";
  bottomBgLoader.style.animation = "bottomBgAnimation  1s ease forwards";
});

topBgLoader.addEventListener("animationend", () => {
  loader.style.display = "none";
  document.querySelector("body").style.pointerEvents = "all";
  document.querySelector("body").style.overflowY = "scroll";
  heroImage.style.animation = "heroImage  1s ease-in forwards";
});
heroImage.addEventListener("animationend", () => {
  border.style.animation = "border  1s ease-in forwards";
  headerTitleName.style.animation = "titleAppear  1s ease-in forwards";
  headerTitleWorks.style.animation = "titleAppear  1s ease-in forwards";
  sectionContentHeading.style.animation = "contentHeading  1s ease-in forwards";
});
border.addEventListener("animationend", () => {
  socialLinks.style.animation = "titleAppear 1s ease-in forwards";
});

uno.addEventListener("mouseover", function () {
  let width = window.innerWidth;
  if (width > 800) {
    first.classList.add("animate");
    uniqueOne.textContent =
      "Pontus Rudolfson Pontus Rudolfson Pontus Rudolfson Pontus Rudolfson Pontus Rudolfson Pontus Rudolfson Pontus Rudolfson";
    document.querySelector("body").style.backgroundColor = "#b4b4b4";
    mouseCursorImage.style.backgroundImage = "url('images/manYellow.jpg')";
    mouseCursorImage.classList.add("mouseCursorImage");
    mouseCursorImage.style.display = "inline";
    document.querySelector("body").style.cursor = "none";
  }
});
uno.addEventListener("mouseleave", function () {
  first.classList.remove("animate");
  uniqueOne.textContent = "Pontus Rudolfson";
  document.querySelector("body").style.backgroundColor = "#ec5033";
  mouseCursorImage.classList.remove("mouseCursorImage");
  mouseCursorImage.style.display = "none";
  document.querySelector("body").style.cursor = "auto";
});
//
dos.addEventListener("mouseover", function () {
  let width = window.innerWidth;
  if (width > 800) {
    second.classList.add("animate");
    uniqueTwo.textContent =
      "Scavolini Store Stockholm Scavolini Store Stockholm Scavolini Store Stockholm Scavolini Store Stockholm Scavolini Store Stockholm Scavolini Store Stockholm";
    mouseCursorImage.classList.add("mouseCursorImage");
    mouseCursorImage.style.backgroundImage = "url('images/kitchen.jpg')";
    mouseCursorImage.style.display = "inline";
    document.querySelector("body").style.backgroundColor = "#855e57";
    document.querySelector("body").style.cursor = "none";
  }
});
dos.addEventListener("mouseleave", function () {
  second.classList.remove("animate");
  uniqueTwo.textContent = "Scavolini Store Stockholm";
  mouseCursorImage.classList.remove("mouseCursorImage");
  mouseCursorImage.style.display = "none";
  document.querySelector("body").style.backgroundColor = "#ec5033";
  document.querySelector("body").style.cursor = "auto";
});
//
tres.addEventListener("mouseover", function () {
  let width = window.innerWidth;
  if (width > 800) {
    third.classList.add("animate");
    uniqueThree.textContent =
      "Kolmarden Interactive Map Kolmarden Interactive Map Kolmarden Interactive Map Kolmarden Interactive Map Kolmarden Interactive Map Kolmarden Interactive Map";
    mouseCursorImage.classList.add("mouseCursorImage");
    mouseCursorImage.style.backgroundImage = "url('images/playGround.jpg')";
    mouseCursorImage.style.display = "inline";
    document.querySelector("body").style.backgroundColor = "#559563";
    document.querySelector("body").style.cursor = "none";
  }
});
tres.addEventListener("mouseleave", function () {
  third.classList.remove("animate");
  uniqueThree.textContent = "Kolmarden Interactive Map";
  mouseCursorImage.classList.remove("mouseCursorImage");
  mouseCursorImage.style.display = "none";
  document.querySelector("body").style.backgroundColor = "#ec5033";
  document.querySelector("body").style.cursor = "auto";
});
//
kwatro.addEventListener("mouseover", function () {
  let width = window.innerWidth;
  if (width > 800) {
    fourth.classList.add("animate");
    uniqueFour.textContent =
      "Magnetus Magnetus Magnetus Magnetus Magnetus Magnetus Magnetus Magnetus Magnetus Magnetus Magnetus Magnetus";
    mouseCursorImage.classList.add("mouseCursorImage");
    mouseCursorImage.style.backgroundImage = "url('images/manila.jpg')";
    mouseCursorImage.style.display = "inline";
    document.querySelector("body").style.backgroundColor = "#878787";
    document.querySelector("body").style.cursor = "none";
  }
});
kwatro.addEventListener("mouseleave", function () {
  fourth.classList.remove("animate");
  uniqueFour.textContent = "Magnetus";
  mouseCursorImage.classList.remove("mouseCursorImage");
  mouseCursorImage.style.display = "none";
  document.querySelector("body").style.backgroundColor = "#ec5033";
  document.querySelector("body").style.cursor = "auto";
});
//
sinko.addEventListener("mouseover", function () {
  let width = window.innerWidth;
  if (width > 800) {
    fifth.classList.add("animate");
    uniqueFive.textContent =
      "Digital Visit at Pantamera Digital Visit at Pantamera Digital Visit at Pantamera Digital Visit at Pantamera Digital Visit at Pantamera Digital Visit at Pantamera";
    mouseCursorImage.classList.add("mouseCursorImage");
    mouseCursorImage.style.backgroundImage = "url('images/factory.jpg')";
    mouseCursorImage.style.display = "inline";
    document.querySelector("body").style.backgroundColor = "#dcc86b";
    document.querySelector("body").style.cursor = "none";
  }
});
sinko.addEventListener("mouseleave", function () {
  fifth.classList.remove("animate");
  uniqueFive.textContent = "Digital Visit at Pantamera";
  mouseCursorImage.classList.remove("mouseCursorImage");
  mouseCursorImage.style.display = "none";
  document.querySelector("body").style.backgroundColor = "#ec5033";
  document.querySelector("body").style.cursor = "auto";
});
function resetHeight() {
  // reset the body height to that of the inner browser
  document.body.style.height = window.innerHeight + "px";
}
// reset the height whenever the window's resized
window.addEventListener("resize", resetHeight);
// called to initially set the height.
resetHeight();
