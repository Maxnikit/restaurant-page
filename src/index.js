import { loadPage } from "./page-load";
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";
import "./style.css";
loadPage();
loadHome();

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");
const homePage = document.querySelector("#homePage");
const menuPage = document.querySelector("#menuPage");
const contactPage = document.querySelector("#contactPage");

homeButton.addEventListener("click", function () {
  console.log("home button clicked");
  removeContent();
  loadHome();
});

menuButton.addEventListener("click", function () {
  console.log("menu button clicked");
  removeContent();
  loadMenu();
});

contactButton.addEventListener("click", function () {
  console.log("contact button clicked");
  removeContent();
  loadContact();
});

function removeContent() {
  const secondChild = document.querySelector("#content > *:nth-child(2)");
  secondChild.remove();
}
