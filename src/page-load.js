export function loadPage() {
  const body = document.querySelector("body");
  const content = document.getElementById("content");

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.id = "home-button";
  body.appendChild(homeButton);

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.id = "menu-button";
  body.appendChild(menuButton);
}
