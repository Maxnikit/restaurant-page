import { loadPage } from "./page-load";
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { addButtons } from "./page-load";
import "./style.css";
loadPage();
loadHome();

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
// const aboutButton = document.querySelector("#about-web");

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

// aboutButton.addEventListener("click", function () {
//   render();
//   about();
//   pageLoad();
// });
function removeContent() {
  const parent = document.querySelector("#content");
  const currentPage = document.querySelector("currentPage");
  if (currentPage) {
    parent.removeChild(currentPage);
  }
}
