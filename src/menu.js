export function loadMenu() {
  const content = document.getElementById("content");
  const currentPage = document.createElement("currentPage");
  const header = document.createElement("h1");
  const image = document.createElement("img");
  const description = document.createElement("p");

  header.textContent = "Menu";

  currentPage.appendChild(header);
  displayMenu();
  content.appendChild(currentPage);
  function displayMenu() {
    const foodArray = [
      {
        name: "French Bowl",
        price: 2.99,
        image: "./assets/frenchBowl.png",
        description:
          "Indulge in a bowl brimming with golden, crispy french fries, seasoned to perfection for a savory delight.",
      },
      {
        name: "French Burger",
        price: 3.99,
        image: "./assets/frenchBurger.png",
        description:
          "A delicious twist on the classic burger - crispy french fries tucked inside a juicy patty, delivering the perfect crunch with every bite.",
      },
      {
        name: "Ice Cream",
        price: 1.99,
        image: "./assets/iceCream.png",
        description:
          "Treat yourself to a delightful cone of creamy, sweet ice cream, the perfect cool and satisfying dessert.",
      },
      {
        name: "Coca Cola",
        price: 1.99,
        image: "./assets/cola.png",
        description:
          "Quench your thirst with a refreshing cup of ice-cold Coca-Cola, the ideal companion to any meal.",
      },
      {
        name: "Birthday Cake",
        price: 5.99,
        image: "./assets/birthdayCake.png",
        description:
          "Celebrate in style with three colossal burgers adorned with festive candles, making every bite a party!",
      },
    ];
    for (let i = 0; i < foodArray.length; i++) {
      const card = document.createElement("div");
      const name = document.createElement("h2");
      const price = document.createElement("price");
      const image = document.createElement("img");
      const description = document.createElement("p");

      card.className = "menu-card";
      name.textContent = foodArray[i].name;
      price.textContent = "$" + foodArray[i].price;
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
