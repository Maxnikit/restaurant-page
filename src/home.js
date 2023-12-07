export function loadHome() {
  const content = document.getElementById("content");
  const header = document.createElement("h1");
  const image = document.createElement("img");
  const description = document.createElement("p");
  const hours = document.createElement("p");
  const location = document.createElement("p");
  header.textContent = "Durrr Burger";
  image.src = "./assets/durrrBurger.png";
  image.width = "400";
  description.textContent =
    "Welcome to Durrr Burger, where every visit is a flavor-packed journey! Our iconic burger chain, scattered across Fortnite's diverse landscapes, boasts more than just mouthwatering burgers; it's an immersive experience. With our juicy signature Durrr Burger stealing the show, accompanied by crispy fries and refreshing drinks, your taste buds are in for a treat. But Durrr Burger isn't just about the food—it's a cultural hub. Snap a pic with our friendly mascot, soak in the vibrant atmosphere, and create unforgettable moments in a place where great food and adventure collide. Join us at Durrr Burger for an unforgettable fusion of taste and fun!";
  hours.textContent = "Hours: 11am - 10pm";
  location.textContent = "Greasy Grove, Risky Reels, Retail Row";

  content.appendChild(header);
  content.appendChild(image);
  content.appendChild(description);
  content.appendChild(hours);
  content.appendChild(location);
}
