export function loadPage() {
  const body = document.querySelector("body");
  const content = document.getElementById("content");
  const navBar = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.id = "home-button";
  navBar.appendChild(homeButton);

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.id = "menu-button";
  navBar.appendChild(menuButton);

  content.appendChild(navBar);
}
