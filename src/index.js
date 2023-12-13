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
  const parent = document.querySelector("#content");
  const currentPage = document.querySelector("currentPage");
  if (currentPage) {
    parent.removeChild(currentPage);
  }
}
