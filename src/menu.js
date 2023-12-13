export function loadMenu() {
  const content = document.getElementById("content");
  const currentPage = document.createElement("currentPage");
  const header = document.createElement("h1");

  header.textContent = "Menu";

  currentPage.appendChild(header);
  displayMenu();
  content.appendChild(currentPage);
  function displayMenu() {
    const foodArray = [
      {
        name: "French Bowl",
        price: 200,
        image: "../src/assets/frenchBowl.png",
        description:
          "Indulge in a bowl brimming with golden, crispy french fries, seasoned to perfection for a savory delight.",
      },
      {
        name: "French Burger",
        price: 400,
        image: "../src/assets/frenchBurger.png",
        description:
          "A delicious twist on the classic burger - crispy french fries tucked inside a juicy patty, delivering the perfect crunch with every bite.",
      },
      {
        name: "Ice Cream",
        price: 200,
        image: "../src/assets/iceCream.png",
        description:
          "Treat yourself to a delightful cone of creamy, sweet ice cream, the perfect cool and satisfying dessert.",
      },
      {
        name: "Coca Cola",
        price: 100,
        image: "../src/assets/cola.png",
        description:
          "Quench your thirst with a refreshing cup of ice-cold Coca-Cola, the ideal companion to any meal.",
      },
      {
        name: "Birthday Cake",
        price: 1000,
        image: "../src/assets/birthdayCake.png",
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
      priceIcon.src = "../src/assets/icons8-v-bucks-48.png";
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

      currentPage.appendChild(card);
    }
  }
}
