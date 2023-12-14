import femaleImage from "../src/assets/female.png";
import maleImage from "../src/assets/male.png";

export function loadContact() {
  const content = document.getElementById("content");
  const contactPage = document.createElement("div");
  const header = document.createElement("h1");
  const female = document.createElement("img");
  const male = document.createElement("img");
  const invite = document.createElement("p");
  const details = document.createElement("ul");
  const footer = document.querySelector("footer");

  contactPage.id = "contactPage";
  header.classList = "header";
  header.textContent = "Contact us";
  female.id = "female";
  female.src = femaleImage;
  female.width = "250";
  male.id = "male";
  male.src = maleImage;
  male.width = "250";
  invite.id = "invite";
  invite.textContent =
    "Want to become a part of the Durrr Burger family? Reach out to us today using the details below or swing by for a chat!";
  details.id = "details";
  const links = [
    {
      href: "mailto:durrr.burger@nosweat.com",
      textContent: "durrr.burger@nosweat.com",
    },
    { href: "tel:+15555555555", textContent: "+1 (555) 555-5555" },
    { href: "https://twitter.com/durrr_burger", textContent: "@durrr_burger" },
  ];

  links.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.textContent;
    li.appendChild(a);
    details.appendChild(li);
  });

  contactPage.appendChild(header);
  contactPage.appendChild(male);
  contactPage.appendChild(female);
  contactPage.appendChild(invite);
  contactPage.appendChild(details);
  content.insertBefore(contactPage, footer);
}
// TODO add details list
// Create an array of link objects
