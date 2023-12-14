import frenchBowlImage from "../src/assets/frenchBowl.png";
import frenchBurgerImage from "../src/assets/frenchBurger.png";
import iceCreamImage from "../src/assets/iceCream.png";
import cokeImage from "../src/assets/cola.png";
import birthdayCakeImage from "../src/assets/birthdayCake.png";
import vBuckImage from "../src/assets/icons8-v-bucks-48.png";

export function loadMenu() {
  const content = document.getElementById("content");
  const menuPage = document.createElement("div");
  const header = document.createElement("h1");
  const footer = document.querySelector("footer");

  menuPage.id = "menuPage";
  header.textContent = "Menu";
  menuPage.appendChild(header);
  displayMenu();
  content.insertBefore(menuPage, footer);
  function displayMenu() {
    const foodArray = [
      {
        name: "French Bowl",
        price: 200,
        image: frenchBowlImage,
        description:
          "Indulge in a bowl brimming with golden, crispy french fries, seasoned to perfection for a savory delight.",
      },
      {
        name: "French Burger",
        price: 400,
        image: frenchBurgerImage,
        description:
          "A delicious twist on the classic burger - crispy french fries tucked inside a juicy patty, delivering the perfect crunch with every bite.",
      },
      {
        name: "Ice Cream",
        price: 200,
        image: iceCreamImage,
        description:
          "Treat yourself to a delightful cone of creamy, sweet ice cream, the perfect cool and satisfying dessert.",
      },
      {
        name: "Coca Cola",
        price: 100,
        image: cokeImage,
        description:
          "Quench your thirst with a refreshing cup of ice-cold Coca-Cola, the ideal companion to any meal.",
      },
      {
        name: "Birthday Cake",
        price: 1000,
        image: birthdayCakeImage,
        description:
          "Celebrate in style with three colossal burgers adorned with festive candles, making every bite a party!",
      },
    ];
    for (let i = 0; i < foodArray.length; i++) {
      const card = document.createElement("div");
      const name = document.createElement("h2");
      const price = document.createElement("price");
      const priceIcon = document.createElement("img");
      const priceText = document.createElement("div");
      const image = document.createElement("img");
      const description = document.createElement("p");

      card.className = "menu-card";
      name.textContent = foodArray[i].name;
      priceIcon.src = vBuckImage;
      priceText.textContent = foodArray[i].price;
      price.appendChild(priceIcon);
      price.appendChild(priceText);
      image.src = foodArray[i].image;
      image.className = "menu-image";
      description.textContent = foodArray[i].description;

      card.appendChild(name);
      card.appendChild(price);
      card.appendChild(image);
      card.appendChild(description);

      menuPage.appendChild(card);
    }
  }
}
