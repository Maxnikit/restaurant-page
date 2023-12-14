import mascot from "../src/assets/mascot.png";
import mapImage from "../src/assets/map.png";

export function loadHome() {
  const content = document.getElementById("content");
  const homePage = document.createElement("div");
  const header = document.createElement("h1");
  const image = document.createElement("img");
  const description = document.createElement("p");
  const hoursHeader = document.createElement("p");
  const hours = document.createElement("p");
  const location = document.createElement("p");
  const map = document.createElement("img");
  const footer = document.querySelector("footer");

  homePage.id = "homePage";
  header.textContent = "Durrr Burger";
  image.id = "mascot";
  image.src = mascot;
  image.width = "400";
  description.id = "homeDescription";
  description.textContent =
    "Welcome to Durrr Burger, where every visit is a flavor-packed journey! Our iconic burger chain, scattered across Fortnite's diverse landscapes, boasts more than just mouthwatering burgers; it's an immersive experience. With our juicy signature Durrr Burger stealing the show, accompanied by crispy fries and refreshing drinks, your taste buds are in for a treat. But Durrr Burger isn't just about the food—it's a cultural hub. Snap a pic with our friendly mascot, soak in the vibrant atmosphere, and create unforgettable moments in a place where great food and adventure collide. Join us at Durrr Burger for an unforgettable fusion of taste and fun!";
  hoursHeader.id = "hoursHeader";
  hoursHeader.textContent = "Available hours:";
  hours.id = "hours";
  location.id = "location";
  location.textContent = "Location: Chapter 1, Greasy Grove";
  map.id = "map";
  map.src = mapImage;
  map.width = "300";

  homePage.appendChild(header);
  homePage.appendChild(image);
  homePage.appendChild(description);
  homePage.appendChild(hoursHeader);
  homePage.appendChild(hours);
  homePage.appendChild(location);
  homePage.appendChild(map);
  content.insertBefore(homePage, footer);
  displayDays();
  function displayDays() {
    const hoursArray = [
      "Monday: Closed",
      "Tuesday: 11:00 AM - 9:00 PM",
      "Wednesday: 11:00 AM - 9:00 PM",
      "Thursday: 11:00 AM - 9:00 PM",
      "Friday: 11:00 AM - 9:00 PM",
      "Saturday: 11:00 AM - 9:00 PM",
      "Sunday: 11:00 AM - 9:00 PM",
    ];
    for (let i = 0; i < hoursArray.length; i++) {
      const day = document.createElement("p");
      day.textContent = hoursArray[i];
      document.getElementById("hours").appendChild(day);
    }
  }
}
